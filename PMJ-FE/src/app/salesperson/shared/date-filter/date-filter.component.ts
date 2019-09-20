import { Component, Input, ViewContainerRef, Output, EventEmitter } from '@angular/core';

import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import * as moment from 'moment';
import { DateDataFilterService } from './date-filter.service';
declare var $: any;

@Component({
    selector: 'date-filter-salesperson',
    templateUrl: './date-filter.component.html',
    styles: ['.form-control { height: 30px;border-radius: 4px !important; }']
})

export class DateFilterComponent {

    @Output() private dateData = new EventEmitter<any>();
    @Input() status;

    public QueryDateRange1: any = { startDate: '', endDate: '' };
    public QueryDateRange2: any = { startDate: '', endDate: '' }

    public QueryDataEndDate: string;
    public QueryDataStartDate: string;
    QueryDataDate: any = {}

    locationId: any;
    salesPersonId: any
    locationDetailsData: any;
    salesPersonDetailsData: any

    dateFormat = 'YYYY-MM-DD'
    dateRange1 = 'thismonth';

    dateRangeDetails1 = [{ id: 1, range: 'CustomRange', name: 'Custom Range' }, 
    { id: 2, range: 'lastmonth', name: 'Last Month' }, 
    { id: 3, range: 'thismonth', name: 'This Month (MTD)' },
     { id: 4, range: 'last7days', name: 'Last 7 Days' }, 
     { id: 5, range: 'last30days', name: 'Last 30 Days' }, 
     { id: 6, range: 'last60days', name: 'Last 60 Days' }, 
     { id: 7, range: 'last90days', name: 'Last 90 Days' }, 
     { id: 8, range: 'thisyear', name: 'This Year (YTD)' }]

    private readonly selDate: any;


    private readonly myDatePicker: IMyOptions = {
        openSelectorOnInputClick: true,
        inline: false,
        disableDateRanges: [{
            begin: { year: (new Date()).getFullYear(), month: (new Date()).getMonth() + 1, day: (new Date()).getDate() + 1 },
            end: { year: 9999, month: 12, day: 31 }
        }],
        dateFormat: 'dd-mm-yyyy',
        showTodayBtn: false,
        showClearDateBtn: false,
        editableDateField: false,
        height: '30px',
        selectionTxtFontSize: '14px',
        indicateInvalidDate: true,
        disableUntil: { year: (new Date()).getFullYear() - 3, month: (new Date()).getMonth() + 1, day: (new Date()).getDate() },
        disableSince: { year: 0, month: 0, day: 0 },
    };

    date = new Date()
    constructor(private readonly dateFilterService: DateDataFilterService) {
    }

    locationDetails() {
        this.dateFilterService.getLocationDetails().subscribe(
            (data: any) => {
                if (data.error == null) {
                    this.locationDetailsData = data.data;
                    for (const entity of this.locationDetailsData) {
                        if (entity.locationId === 207) {
                            this.locationId = 11;
                            break;
                        }
                        this.locationId = this.locationDetailsData[0].id;
                    }

                    this.QueryDataDate.locationId = this.locationId;
                    this.salesPersonDetails();
                } else {
                    alert(data.error.message)
                }
            })

    }

    salesPersonDetails() {
        this.dateFilterService.getSalesPersonDetails(this.locationId).subscribe(
            (data: any) => {
                if (data.error == null) {
                    this.salesPersonDetailsData = data.data
                    this.salesPersonId = this.salesPersonDetailsData[0].id
                    this.QueryDataDate.salesPersonId = this.salesPersonId
                    this.dateDetails()
                    this.dateData.emit(this.QueryDataDate);
                } else {
                    alert(data.error.message)
                }
            })
    }

  

    dataChangeRange1() {
        this.date = new Date()
        this.date.setDate(this.date.getDate() - 1)
        this.QueryDateRange1.endDate = { 'date': { 'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1, 'day': this.date.getDate() } }

        switch (this.dateRange1) {
            case 'last7days':
                this.date.setDate(this.date.getDate() - 6)
                this.QueryDateRange1.startDate = {
                    'date': {
                        'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1, 'day': this.date.getDate()
                    }
                }
                this.reset();
                break;
            case 'last30days':
                this.date.setDate(this.date.getDate() - 29)
                this.QueryDateRange1.startDate = {
                    'date': {
                        'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1,
                        'day': this.date.getDate()
                    }
                }
                this.reset();
                break;
            case 'CustomRange':
                this.date.setDate(this.date.getDate() - 29)
                this.QueryDateRange1.startDate = {
                    'date': {
                        'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1,
                        'day': this.date.getDate()
                    }
                }
                // this.reset();
                break
            case 'last60days':
                this.date.setDate(this.date.getDate() - 59)
                this.QueryDateRange1.startDate = {
                    'date': {
                        'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1,
                        'day': this.date.getDate()
                    }
                }
                this.reset();
                break
            case 'last90days':
                this.date.setDate(this.date.getDate() - 89)
                this.QueryDateRange1.startDate = {
                    'date': {
                        'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1,
                        'day': this.date.getDate()
                    }
                }
                this.reset();
                break

            case 'lastmonth':
                this.date = new Date()
                this.date.setDate(0);
                this.QueryDateRange1.endDate = { 'date': { 'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1, 'day': this.date.getDate() } }
                this.date.setDate(1);
                this.QueryDateRange1.startDate = {
                    'date': {
                        'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1,
                        'day': this.date.getDate()
                    }
                }
                this.reset();
                break

            case 'thismonth':
                this.getthisMonthDateRange1();
                this.reset();
                break
            case 'thisyear':
                this.getthisYearDateRange1();
                this.reset();
                break;
        }
    }


    getthisMonthDateRange1() {
        this.date = new Date()
        this.date.setDate(this.date.getDate() - 1)
        this.QueryDateRange1.endDate = { 'date': { 'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1, 'day': this.date.getDate() } }
        this.date.setDate(1);
        this.QueryDateRange1.startDate = {
            'date': {
                'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1,
                'day': this.date.getDate()
            }
        }
    }

    //'2017/04/01'

    getthisYearDateRange1() {
        this.date = new Date()
        this.date.setDate(this.date.getDate() - 1)
        if (this.date.getMonth() === 0 || this.date.getMonth() === 1 || this.date.getMonth() === 2) {
            this.date = new Date()
            this.date.setDate(this.date.getDate() - 1)
            this.QueryDateRange1.endDate = { 'date': { 'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1, 'day': this.date.getDate() } }
            this.date.setMonth(3);
            this.date.setMonth(3);
            this.date.setDate(1);
            this.date.setFullYear(this.date.getFullYear() - 1)
            this.QueryDateRange1.startDate = {
                'date': {
                    'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1,
                    'day': this.date.getDate()
                }
            }

        } else if ((this.date.getMonth()) === 3) {
            alert()
            this.getthisMonthDateRange1()
        } else {
            this.date = new Date()
            this.date.setDate(this.date.getDate() - 1)
            this.QueryDateRange1.endDate = { 'date': { 'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1, 'day': this.date.getDate() } }
            this.date.setMonth(3);
            this.date.setMonth(3);
            this.date.setDate(1);
            this.QueryDateRange1.startDate = {
                'date': {
                    'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1,
                    'day': this.date.getDate()
                }
            }
        }
    }


    getDefaultDates() {
        this.dateRange1 = 'thismonth';
        this.getthisMonthDateRange1()
        this.locationData();
    }
    locationData() {
        this.locationDetails()
    }
    
    
    ngAfterViewInit() {
       
        $('#salesPerson').on('change', (event) => {
        this.salesPersonId = (event.target.value)
        this.QueryDataDate.locationId = this.locationId
        this.QueryDataDate.salesPersonId = this.salesPersonId
        this.reset()
        });
        }
      
        locationchange() {
        this.dateFilterService.getSalesPersonDetails(this.locationId).subscribe(
        (data: any) => {
        if (data.error == null) {
        this.salesPersonDetailsData = data.data
        this.salesPersonId = this.salesPersonDetailsData[0].id
        this.QueryDataDate.salesPersonId = this.salesPersonId
        this.QueryDataDate.locationId = this.locationId
        this.reset()
        } else {
        alert(data.error.message)
        }
        })
        }
    reset() {
        this.dateDetails()
        this.dateData.emit(this.QueryDataDate)
    }

    

    ngOnInit() {
        this.getDefaultDates()
    }

    dateDetails() {
        const stYear = this.QueryDateRange1.startDate.date.year;
        const stMonth = this.QueryDateRange1.startDate.date.month;
        const stDay = this.QueryDateRange1.startDate.date.day;
        const startDate = `${stYear}-${stMonth}-${stDay}`;
        this.QueryDataDate.range1startDate = moment(startDate, this.dateFormat).format(this.dateFormat);

        const endYear = this.QueryDateRange1.endDate.date.year;
        const endMonth = this.QueryDateRange1.endDate.date.month;
        const endDay = this.QueryDateRange1.endDate.date.day;
        const endDate = `${endYear}-${endMonth}-${endDay}`;
        this.QueryDataDate.range1endDate = moment(endDate, this.dateFormat).format(this.dateFormat);

        this.QueryDataDate.dateRange1 = this.dateRange1


    }
    errorMessage1;
    querySubmit(value) {
        this.salesPersonId = parseInt(value.value)
        this.QueryDataDate.locationId = this.locationId
        this.QueryDataDate.salesPersonId = this.salesPersonId
        this.dateDetails()
        if (new Date(this.QueryDataDate.range1startDate) > new Date(this.QueryDataDate.range1endDate)) {
            this.errorMessage1 = 'End date should be greater than start date';
            setTimeout(() => {
                this.errorMessage1 = '';
            }, 3000)
        } else {
            this.errorMessage1 = '';
            this.dateData.emit(this.QueryDataDate);
        }
    }
}
