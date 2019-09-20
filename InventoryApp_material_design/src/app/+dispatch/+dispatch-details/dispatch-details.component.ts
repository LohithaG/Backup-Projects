import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import { AppService } from '../../app.service';



@Component({
    selector: 'dispatch-details-module',
    templateUrl: './dispatch-details.component.html',
    styles: [`
    .footer-text{
        font-weight:bold
    }
    `]
})

export class DispatchDetailsComponent implements OnInit {

    submitted;
    dispatachDetails;
    private startDate = null;
    private endDate = null;
    public loading = false;


    errorMessage: any;
    constructor(
        public appService: AppService
    ) {

    }

    ngOnInit(): void {
        /**
        * Back Button event trigger
        */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    }

    submit() {

        this.submitted = true;
        this.loading = true;
        if (this.startDate != null && this.endDate != null) {
            if (new Date(this.startDate) > new Date(this.endDate)) {
                this.errorMessage = 'End date should be greater than start date';
                setTimeout(() => {
                    this.errorMessage = '';
                }, 3000)
            } else {
                this.startDate = this.convert(this.startDate)
                this.endDate = this.convert(this.endDate)

                this.appService.getAllDispatchDetails(this.startDate, this.endDate).subscribe((data: any) => {
                    if (data.data != null) {
                        this.loading = false;
                        this.dispatachDetails = data.data
                        if (this.dispatachDetails.length === 0) {
                            this.errorMessage = 'No records found these selected dates';
                            setTimeout(() => {
                                this.errorMessage = '';
                            }, 3000)
                        }
                    }
                })
            }
        }

    }

    convert(str) {
        const date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
}



@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.barcode.toLowerCase().includes(searchText);
        });
    }
}

