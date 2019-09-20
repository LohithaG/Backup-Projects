import { Component, Input, ViewContainerRef, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import * as moment from 'moment';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { DateFilterService } from './date-filter.service';
declare var $: any;

@Component({
    selector: 'growth-date-filter',
    templateUrl: './date-filter.component.html',
    styleUrls: ['./date-filter.component.css']
})

export class DateFilterComponent {

    @Output() public dateData = new EventEmitter<any>();
    @Input() status;
    @Input() locationStatus;
    @Input() clusterStatus;

    endDate3;
    startDate3; endDate2; startDate2; endDate; startDate;


    public QueryDateRange1: any = { startDate: '', endDate: '' };
    public QueryDateRange2: any = { startDate: '', endDate: '' };
    public QueryDateRange3: any = { startDate: '', endDate: '' };

    public QueryDataEndDate: string;
    public QueryDataStartDate: string;
    QueryDataDate: any = {}

    form: FormGroup

    dateFormat = 'YYYY-MM-DD'
    dateRange1 = 'thismonth';
    dateRange2 = 'thisyear';

    locationId: any
    stateId: any
    salesPersonId: any
    clusterId: any
    locationDetailsData: any;
    statesData: any
    classDetailsData: any
    salesPersonDetailsData: any
    clusterDetailsData: any

    public readonly selDate: any;
    public readonly myDatePicker: IMyOptions = {
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
    constructor(private readonly cdr: ChangeDetectorRef, private readonly fb: FormBuilder,
        private readonly dateFilterService: DateFilterService) {
    }

    getDefaultDates() {
        this.range3Status = false;
        this.statusChange();
        this.dateRange1 = 'thismonth';
        this.getthisMonthDateRange1()
        this.dateRange2 = 'thisyear';
        this.getYearDate()
        this.reset()

    }
    reset() {

        if (this.locationStatus === true) {
            this.locationDetails()
        } else if (this.clusterStatus === true) {
            this.stateDetails()
        } else {
            this.dateDetails()
            this.dateData.emit(this.QueryDataDate)
        }

    }

    ngOnInit() {
        this.getDefaultDates()
    }

    locationDetails() {
        this.dateFilterService.getLocationDetails().subscribe(
            (data: any) => {
                if (data.error == null) {
                    this.locationDetailsData = data.data;
                    this.locationId = this.locationDetailsData[0].id;
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
                    this.dateData.emit(this.QueryDataDate)
                } else {
                    alert(data.error.message)
                }
            })
    }
    locationChange() {
        this.dateFilterService.getSalesPersonDetails(this.locationId).subscribe(
            (data: any) => {
                if (data.error == null) {
                    this.salesPersonDetailsData = data.data
                    this.salesPersonId = this.salesPersonDetailsData[0].id
                    this.QueryDataDate.salesPersonId = this.salesPersonId
                } else {
                    alert(data.error.message)
                }
            })
    }

    stateDetails() {
        this.dateFilterService.getAllStates().subscribe(
            (data: any) => {
                if (data.error == null) {
                    this.statesData = data.data;
                    this.stateId = this.statesData[0].state;
                    this.QueryDataDate.stateId = this.stateId;
                    this.clusterDetails(data.data[0].state)
                } else {
                    alert(data.error.message)
                }
            })
    }


    clusterDetails(stateName) {
        this.dateFilterService.getClusterDetails(stateName).subscribe(
            (data: any) => {
                if (data.error == null) {
                    this.clusterDetailsData = data.data
                    this.clusterId = this.clusterDetailsData[0].cluster
                    this.QueryDataDate.clusterId = this.clusterId
                    this.dateDetails()
                    this.dateData.emit(this.QueryDataDate)
                } else {
                    alert(data.error.message)
                }
            })
    }


    stateChange() {
        this.dateFilterService.getClusterDetails(this.stateId).subscribe(
            (data: any) => {
                if (data.error == null) {
                    this.clusterDetailsData = data.data
                    this.clusterId = this.clusterDetailsData[0].id
                    this.QueryDataDate.clusterId = this.clusterId
                } else {
                    alert(data.error.message)
                }
            })
    }

    getthisMonthDateRange1() {
        this.date = new Date()
        this.date.setDate(this.date.getDate() - 1)
        this.QueryDateRange1.endDate = { 'date': { 'year': this.date.getFullYear() - 1, 'month': this.date.getMonth() + 1, 'day': this.date.getDate() } }
        this.date.setDate(1);
        this.QueryDateRange1.startDate = {
            'date': {
                'year': this.date.getFullYear() - 1, 'month': this.date.getMonth() + 1,
                'day': this.date.getDate()
            }
        }
    }



    getYearDate() {
        this.date = new Date()
        this.date.setDate(this.date.getDate() - 1)
        this.QueryDateRange2.endDate = { 'date': { 'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1, 'day': this.date.getDate() } }
        this.date.setDate(1);
        this.QueryDateRange2.startDate = {
            'date': {
                'year': this.date.getFullYear(), 'month': this.date.getMonth() + 1,
                'day': this.date.getDate()
            }
        }
    }





    range3Status = false;
    statusChange() {
        this.QueryDateRange3.startDate = '';
        this.QueryDateRange3.endDate = '';
        if (this.range3Status === true) {
            const testValue = "";
        } else {
            delete this.QueryDataDate.range3startDate;
            delete this.QueryDataDate.range3endDate;
        }
    }
    dateDetails() {
        window.scrollTo(0, 0)
        let stYear = this.QueryDateRange1.startDate.date.year;
        let stMonth = this.QueryDateRange1.startDate.date.month;
        let stDay = this.QueryDateRange1.startDate.date.day;
        let startDate = `${stYear}-${stMonth}-${stDay}`;
        this.QueryDataDate.range1startDate = moment(startDate, this.dateFormat).format(this.dateFormat);

        let endYear = this.QueryDateRange1.endDate.date.year;
        let endMonth = this.QueryDateRange1.endDate.date.month;
        let endDay = this.QueryDateRange1.endDate.date.day;
        let endDate = `${endYear}-${endMonth}-${endDay}`;
        this.QueryDataDate.range1endDate = moment(endDate, this.dateFormat).format(this.dateFormat);

        stYear = this.QueryDateRange2.startDate.date.year;
        stMonth = this.QueryDateRange2.startDate.date.month;
        stDay = this.QueryDateRange2.startDate.date.day;
        startDate = `${stYear}-${stMonth}-${stDay}`;
        this.QueryDataDate.range2startDate = moment(startDate, this.dateFormat).format(this.dateFormat);


        endYear = this.QueryDateRange2.endDate.date.year;
        endMonth = this.QueryDateRange2.endDate.date.month;
        endDay = this.QueryDateRange2.endDate.date.day;
        endDate = `${endYear}-${endMonth}-${endDay}`;
        this.QueryDataDate.range2endDate = moment(endDate, this.dateFormat).format(this.dateFormat);


        if (this.range3Status === true) {

            const stYear = this.QueryDateRange3.startDate.date.year;
            const stMonth = this.QueryDateRange3.startDate.date.month;
            const stDay = this.QueryDateRange3.startDate.date.day;
            const startDate = `${stYear}-${stMonth}-${stDay}`;
            this.QueryDataDate.range3startDate = moment(startDate, this.dateFormat).format(this.dateFormat);


            const endYear = this.QueryDateRange3.endDate.date.year;
            const endMonth = this.QueryDateRange3.endDate.date.month;
            const endDay = this.QueryDateRange3.endDate.date.day;
            const endDate = `${endYear}-${endMonth}-${endDay}`;
            this.QueryDataDate.range3endDate = moment(endDate, this.dateFormat).format(this.dateFormat);

        }

    }

    errorMessage1;
    errorMessage2;
    errorMessage3;
    error1 = 'End date should be greater than start date';
    public serviceErrorResponse;
    public serviceErrorData;
    range3StartDateErrorMessage;
    range3EndDateErrorMessage

    ngAfterViewInit() {
        $('#state').on('change', (event) => {
            this.stateId = (event.target.value)
            this.stateChange()
        });
        $('#location').on('change', (event) => {
            this.locationId = (event.target.value)
            this.locationChange()
        });
    }

    QuerySubmit(location, employee, state, cluster) {
        if (this.locationStatus === true) {
            this.salesPersonId = parseInt(employee.value)
            this.QueryDataDate.salesPersonId = this.salesPersonId
            this.QueryDataDate.locationId = parseInt(location.value)
        } else if (this.clusterStatus === true) {
            this.clusterId = (cluster.value)
            this.QueryDataDate.stateId = state.value
            this.QueryDataDate.clusterId = this.clusterId
        }


        if (this.range3Status === false) {
            this.dateDetails()
            if (new Date(this.QueryDataDate.range1startDate) > new Date(this.QueryDataDate.range1endDate)) {
                this.errorMessage1 = this.error1;
                setTimeout(() => {
                    this.errorMessage1 = '';
                }, 3000)
            } else {
                this.errorMessage1 = ''
                if (new Date(this.QueryDataDate.range2startDate) > new Date(this.QueryDataDate.range2endDate)) {
                    this.errorMessage2 = this.error1;
                    setTimeout(() => {
                        this.errorMessage2 = '';
                    }, 3000)
                } else {
                    this.dateData.emit(this.QueryDataDate);
                }
            }
        } else {
            if (this.QueryDateRange3.startDate !== '' && this.QueryDateRange3.endDate !== '') {
                this.dateDetails()
                if (new Date(this.QueryDataDate.range1startDate) > new Date(this.QueryDataDate.range1endDate)) {
                    this.errorMessage1 = this.error1;
                    setTimeout(() => {
                        this.errorMessage1 = '';
                    }, 3000)
                } else {
                    this.errorMessage1 = ''
                    if (new Date(this.QueryDataDate.range2startDate) > new Date(this.QueryDataDate.range2endDate)) {
                        this.errorMessage2 = this.error1;
                        setTimeout(() => {
                            this.errorMessage2 = '';
                        }, 3000)
                    } else {
                        this.errorMessage2 = '';
                        if (new Date(this.QueryDataDate.range3startDate) > new Date(this.QueryDataDate.range3endDate)) {
                            this.errorMessage3 = this.error1;
                            setTimeout(() => {
                                this.errorMessage3 = '';
                            }, 3000)
                        } else {
                            this.errorMessage3 = '';
                            this.dateData.emit(this.QueryDataDate);
                        }

                    }
                }
            } else {
                if (this.QueryDateRange3.startDate === '') {
                    this.range3StartDateErrorMessage = "Please Enter StartDate";
                    setTimeout(() => {
                        this.range3StartDateErrorMessage = '';
                    }, 3000)
                }
                if (this.QueryDateRange3.endDate === '') {
                    this.range3EndDateErrorMessage = "Please Enter EndDate"
                    setTimeout(() => {
                        this.range3EndDateErrorMessage = '';
                    }, 3000)
                }
            }
        }
    }
}
