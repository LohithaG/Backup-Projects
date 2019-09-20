import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FileUploadService } from './file-upload.service'
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'file-upload',
    templateUrl: './file-upload.component.html'
})

export class FileUploadComponent {
    @ViewChild('lgModal') public lgModal: ModalDirective;

    constructor(
        public fileUploadService: FileUploadService,
        private readonly cdr: ChangeDetectorRef,
        private readonly _sanitizer: DomSanitizer,
        private readonly router: Router,
        private readonly _location: Location

    ) {
    }
    ngAfterViewInit() {
        this.get()
    }
    ngOnInit() {
    }
    get() {
        this.lgModal.show()
    }

    modelClose() {
        this.lgModal.hide()
        this._location.back();
    }
    fileType: any = "";

    loaderStatus = false;
    fileTypes = [
        { name: "Employee Actual Monthly-d2h", value: "empactmnthly_D2H", status: false },
        { name: "Employee Actual Monthly-shw", value: "empactmnthly_SHW", status: false },
        { name: "Employee Master", value: "EmployeeMaster", status: true },
        { name: 'Employee Monthly Target shw-Diamond', value: 'emptrgtmnthly-shw-Diamond-MMM_yyyy', status: true },
        { name: 'Employee Monthly Target shw-Gold', value: 'emptrgtmnthly-shw-Gold-MMM_yyyy', status: true },
        { name: 'Gold Diamond Classification', value: 'Gold_DiamondClassification', status: true },
        { name: 'Location Master', value: 'LocationMaster', status: true },
        { name: 'Manager Data', value: 'managerdata', status: true },
        { name: 'Sales Data', value: 'salesdata_MMM_yyyy', status: false },
        { name: 'Team Monthly Target-d2h', value: 'teamtrgtmnthly-d2h-MMM_yyyy', status: true },
        { name: 'Sales Return', value: 'salesreturn', status: false }
    ]
    downloadError
    downloadSuccess;
    downloadCsvFile() {
        if (this.fileType !== "") {
            this.fileUploadService.downloadFile(this.fileType).subscribe((data: any) => {
                if (data !== null) {
                    const toArray = data.split(",").map(str => str.replace(/\s/g, ''));
                    const testArray = [];
                    testArray.push(toArray)
                    this.downloadCSV(this.fileType + ".csv", testArray)
                } else {
                    this.router.navigate(['/error', 'Error in Downloading File']);
                }
            })
        } else {
            this.downloadError = "Please select file type"
            setTimeout(() => {
                this.downloadError = ''
            }, 2000)
        }
    }

    status;
    fileTypeChange() {
        this.status = ''
        let fileStatus = this.fileTypes.find(file => file.value === this.fileType)
        this.status = fileStatus.status
        const path1: any = document.getElementById('file-input1')
        path1.value = '';


    }
    fileDatails
    fileError
    fileUploadStatusSuccess: any
    fileUploadStatusFail: any
    uploadedFiles: any = [];
    updateFile() {
        const filePath: any = document.getElementById('file-input1')
        if (this.status) {
            if (this.fileType !== "" && filePath.value !== '') {
                this.loaderStatus = true;
                const formData: FormData = new FormData();
                formData.append('file', this.uploadedFiles[0], this.uploadedFiles[0].name);
                this.fileUploadService.fileUpload(formData).subscribe((data: any) => {
                    if (data.error == null) {
                        this.loaderStatus = false;
                        this.fileUploadStatusSuccess = data.data;
                        setTimeout(() => {
                            this.fileUploadStatusSuccess = '';
                            this.modelClose()
                        }, 5000)
                        filePath.value = '';
                    } else {
                        this.loaderStatus = false;
                        this.fileUploadStatusFail = data.error.message;
                        filePath.value = '';
                        setTimeout(() => {
                            // this.modelClose()
                            this.fileUploadStatusFail = '';
                        }, 2000)
                    }

                })
            } else {
                this.loaderStatus = false;

                if (this.fileType === "") {
                    this.downloadError = "Please select file type"
                    setTimeout(() => {
                        this.downloadError = ''
                    }, 2000)
                } else if (filePath.value === '') {
                    this.fileError = "Please select file";
                    setTimeout(() => {
                        this.fileError = '';
                    }, 2000)
                }
            }
        } else {
            alert('These are System Generated Files')
        }
    }
    selectedFile: any;

    public picked(event, field) {
        this.selectedFile = field;
        const fileList: FileList = event.target.files;
        const file: File = fileList[0];
        this.handleInputChange(file);
    }



    handleInputChange(files) {
        const file = files;
        const reader = new FileReader();
        const uploadedFile = file.name.substring(0, 8)
        const selectedFile = this.fileType.substring(0, 8)
        if (uploadedFile === selectedFile) {
            reader.onload = (e: any) => {
                file.src = e.target.result;
                if (this.selectedFile === 1) {
                    this.uploadedFiles[0] = file
                }
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select choosen file type')
            const path1: any = document.getElementById('file-input1')
            path1.value = '';
        }



    }
    downloadCSV(filename, rows) {
        const processRow = function (row) {
            let finalVal = '';
            for (let j = 0; j < row.length; j++) {
                let innerValue = row[j] === null ? '' : row[j].toString();
                if (row[j] instanceof Date) {
                    innerValue = row[j].toLocaleString();
                }
                let result = innerValue.replace(/"/g, '""');
                if (result.search(/("|,|\n)/g) >= 0) {
                    result = `"${result}"`;
                }
                if (j > 0) {
                    finalVal += ',';
                }
                finalVal += result;
            }
            return finalVal + '\n';
        };
        let csvFile = '';
        for (const i of rows) {
            csvFile += processRow(i);
        }
        this.downloadCSVSubMethod(csvFile, filename)
    }

    downloadCSVSubMethod(csvFile, filename) {
        const blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) {
            navigator.msSaveBlob(blob, filename);
        } else {
            const link = document.createElement("a");
            if (link.download !== undefined) {
                const url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }

        this.downloadSuccess = "File Downloaded SuccessFully"
        setTimeout(() => {
            this.downloadSuccess = ''
            this.modelClose()
        }, 5000)
        this.fileType = ""
    }
}

