import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpensesServices } from '../expenses.service';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
declare var cordova: any;

declare let navigator: any;
declare var Camera: any;

@Component({
    selector: 'add-expenses',
    templateUrl: './addexpenses.component.html',
    styles: [`
      .close-tag{
       width: 15px;
       text-align: center; 
       overflow:hidden; 
       margin-right: 173px
       }
        .ui-overlay-c {
            background-color: rgba(0, 0, 0, 0.5);
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            text-align: center;
        }
        .loading {
          position: absolute;
          top: 50%;
          left: 50%;
        }
        .loading-bar {
         
          display: inline-block;
          width: 4px;
          height: 18px;
          border-radius: 4px;
          animation: loading 1s ease-in-out infinite;
        }
        .loading-bar:nth-child(1) {
          background-color: #3498db;
          animation-delay: 0;
        }
        .loading-bar:nth-child(2) {
          background-color: #c0392b;
          animation-delay: 0.09s;
        }
        .loading-bar:nth-child(3) {
          background-color: #f1c40f;
          animation-delay: .18s;
        }
        .loading-bar:nth-child(4) {
          background-color: #27ae60;
          animation-delay: .27s;
        }
        
        @keyframes loading {
          0% {
            transform: scale(1);
          }
          20% {
            transform: scale(1, 2.2);
          }
          40% {
            transform: scale(1);
          }
        }
    
    `]
})
export class AddExpensesComponent implements OnInit {
    public complexForm: FormGroup;
    receiptImg: any = '';
    formValidate = false;
    expensesTypes: any = [{
        "id": 1,
        "expenseType": "Food"
    },
    {
        "id": 2,
        "expenseType": "Gas"
    },
    {
        "id": 3,
        "expenseType": "Hotel"
    },
    {
        "id": 4,
        "expenseType": "Others"
    }]


    addExpenseObj: any = {
        "loadNumber": {
            "apptNbr": ''
        },
        "driverId": {
            "id": localStorage.getItem('driverData')
        },
        "expenseTypeId": {
            "id": ''
        },
        "amount": '',
        "billDate": "2019-12-08",

    }


    constructor(private _sanitizer: DomSanitizer, private fb: FormBuilder, public router: Router, public _expensesServices: ExpensesServices, private formBuilder: FormBuilder) { }


    private readonly myDatePickerOptions: IMyOptions = {
        openSelectorOnInputClick: true,
        inline: false,
        disableSince: { year: (new Date()).getFullYear(), month: (new Date()).getMonth() + 1, day: (new Date()).getDate() + 1 },
        dateFormat: 'yyyy-mm-dd',
        showTodayBtn: false,
        showClearDateBtn: false,
        editableDateField: false,
        height: '30px',
        selectionTxtFontSize: '14px',
        indicateInvalidDate: true,
    };
    driverId: any;
    ngOnInit() {
        this.complexForm = this.fb.group({
            'loadNumbers': new FormControl(null, Validators.required),
            'expenseType': new FormControl(null, Validators.required),
            'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]$|^[1-9]\d$|^[1-9]\d\d$|^[1-9]?\.\d{1,2}$|^[1-9]\d?\.\d{1,2}$|^[1-9]\d\d?\.\d{1,2}$|^1000$/)]),
            'billDate': new FormControl(null, Validators.required),
            'image': new FormControl(null),

        })
        this.driverId = localStorage.getItem('driverData');
        this.getLoadNumbers();
    }
    loadNumbersList: any = [];

    getLoadNumbers() {
        this._expensesServices.getLoadNumberByDriverid(this.driverId).subscribe((data: any) => {
            if (data.error == null) {
                this.loadNumbersList = data.data;

            }
        })
    }


    loaderBtn = false;
    base64Data: any = '';
    takePicture() {

        // this.receiptImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCADMAl0DASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAIDBAEFB//EADUQAQACAgACBgkDAgcAAAAAAAABAgMEESEFEhMxQVEUFTJCUmFxgZEiI0MzYlOCorHB0eH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAvEQEAAgAEAggGAgMAAAAAAAAAAQIDERIxBCEjMkFRYZGh0RMUM2JxwSSBU7Hh/9oADAMBAAIRAxEAPwD5+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2V0Jy462wZqXmY4zHdMMaeLJbDkrek84lW0T2S2wbYcT0kZx/pzJjvivNclZraPCUXrbta7WlXYpHOscft4w8lFL6oacVgfAvlE5xPOJ8ABdygO0pa9urSs2nyiBMRM8ocGqNK1I62xkrijynnP4O11sP9LFOW3xZO78Ka4nbm3+XtX6k6fzv5bqMeHJlnhjpa30hf6JXHz2M1af215yhk3M+SOE3mtfhryhQZWnwNWDTaNX55R5R7tser68v3bfN3q9HT7+WGERo8ZW+a+yvk25dGJxdrrZO1rHfHixLtbZvrX61O6e+PNrz6+Pbx9vq+171EappOVtmk4VOIrqwYytG8fuPZ5wTExPCY4SNXCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9HozJF8eTWt70TMf8ALz5jhMxPfCzWydlsY78eERPP6eLffo6M+W2WuaOzvPW5RxYzMUtMz2vRrS/FYNa0jOa8v6l5a7DqZ83OlJ4ec8obuGhqc+Pa3j7/APjNs7+XP+mP0U8o8U67W6sKTw+Fgxni2znuj9y72Gtr/wBfL2l49zH/ANuX3rxXqYKVw0/t7/yyC2iO3mynibRGWHGmPDfz3dtabTxtMzM+MuAu5twAAABPFlvhv1sdprP+6ATGaYtNZzjd6HpGrtRw2adnk+OqOTo2/V62C9csfLkwp4s2TDPHHea/RnomOrLsjiaYn165+Mcp9pWRpbM/w2J0tmP4bJesNrhH7v8Apgnf2Z/ln8QdJ4H8P7vRH0PY/wAG34WY+jdi/fWKR85Rnf2p/ln8QqyZ8uT28lrfKZOk8EZ8JHOItPlHu1erbR358Ufdz1befZzYp+7EGm3er8XA/wAfq1W6O2a91It9JhCdPYjvw2+ymLTHdMx9JTjYzR3Zbx/mlOV+9GfDz2TH9xP6Rvjvj9ulq/WOCLTXe2Kxwm/XjytHFKM2rm5ZsPZz8WPu/BnaN4Ph4VupbL88vWM/0yDRm1LUr2mOYy4p96vh9WdaJidmN8O2HOVoAEqAlTFkyexS1vpHFox9H7F++kUjztKs2iN5a0wcTE6lZllG70fUwc8+btLfDRG29FI4a+GmOPOY4yjXn1Yazw8U+raI8I5z7eqnHqbGT2cVuHnPJzPr315rGTq8Z8InjwMmzmye3ltPy48lSY1Z81Lzg5ZUic++fb/oAswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWYc+TBbjjtMeceEtVaYN32erhzeXu2YRWa5843b4eNNY02jOvd7dzdTovNM/rtWsefesmunpxz/eyeU82Cc2Wa9Wcl5jym0oKaLT1pb/MYOHHRU5988/TZrydIZ7T+m0Y6+EVhnvmy5I4XyWtHzlAXitY2hzXx8W/WtMgCzIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//Z')

        this.loaderBtn = true;
        if (navigator != undefined) {
            navigator.camera.getPicture(
                (base64string) => {
                    this.loaderBtn = false;
                    this.base64Data = base64string;
                    this.receiptImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                        + base64string);
                    this.addExpenseObj.billImage = base64string
                },
                (error) => {
                    this.loaderBtn = false;
                    alert("Unable to obtain picture: " + error);
                }, {
                    quality: 100,
                    //  allowEdit: true,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    encodingType: Camera.EncodingType.PNG,
                    targetWidth: 100,
                    targeHeight: 100,
                    correctOrientation: true
                }
            );
        }
    }
    deleteReceiptImg() {
        this.receiptImg = null;
    }

    addExpenceDetailsSuccessMsg: any;
    addExpenceDetailsErrorMsg: any;
    addExpensesDetails() {

        if (this.complexForm.valid && this.receiptImg != '') {
            this.addExpenseObj.billDate = this.complexForm.value.billDate["jsdate"];
            const formData: FormData = new FormData();
            formData.append('expenseDetails', JSON.stringify(this.addExpenseObj))

            this._expensesServices.addExpenses(this.addExpenseObj).subscribe((data: any) => {
                if (data.error == null) {
                    this.addExpenceDetailsSuccessMsg = "Expenses Added Successfully";
                    setTimeout(() => {
                        this.addExpenceDetailsSuccessMsg = '';
                        this.router.navigate(['./expenses'])
                    }, 2000)
                } else {
                    this.addExpenceDetailsErrorMsg = data.error.message;
                    setTimeout(() => {
                        this.addExpenceDetailsErrorMsg = '';
                        this.router.navigate(['./expenses'])
                    }, 2000)
                }
            })
        } else {
            this.formValidate = true
        }
    }
}