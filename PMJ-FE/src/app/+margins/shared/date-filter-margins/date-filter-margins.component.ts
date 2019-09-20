import { Component, Input, ViewContainerRef, Output, EventEmitter } from '@angular/core';

import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import * as moment from 'moment';
import { DateFilterService } from './date-filter-service.service';

@Component({
  selector: 'date-filter-margins',
  templateUrl: './date-filter-margins.component.html',
  styleUrls: ['../date-filters/date-filters.css']

})

export class DateFilterComponentMargins {

  @Output() private dateData = new EventEmitter<any>();


  public QueryDateRange1: any = { startDate: '', endDate: '' };
  public QueryDateRange2: any = { startDate: '', endDate: '' }

  public QueryDataEndDate: string;
  public QueryDataStartDate: string;
  QueryDataDate: any = {}

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
  locationId: any
  stateId: any
  salesPersonId: any
  clusterId: any
  locationDetailsData: any;
  statesData: any
  classDetailsData: any
  salesPersonDetailsData: any
  clusterDetailsData: any

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
  constructor(private readonly dateFilterService: DateFilterService) {
  }


  stateDetails() {
    this.dateFilterService.getAllStates().subscribe(
      (data: any) => {
        if (data.error == null) {
          this.statesData = data.data;
          this.statesData.unshift({ state: 'ALL' });
          this.stateId = this.statesData[0].state;
          this.clusterId = "ALL"
          this.locationId = "ALL"
          this.clusterDetails()
        } else {
          alert(data.error.message)
        }
      })
  }
  stateChange() {
    if (this.stateId === 'ALL') {
      this.clusterId = 'ALL';
      this.locationId = 'ALL';
      this.dateDetails()
      this.dateData.emit(this.QueryDataDate)
    } else {
      this.dateFilterService.getClusterDetails(this.stateId).subscribe(
        (data: any) => {
          if (data.error == null) {
            this.clusterDetailsData = []
            this.clusterDetailsData = data.data
            this.clusterDetailsData.unshift({ cluster: 'ALL' });
            this.clusterId = this.clusterDetailsData[0].cluster
            this.dateDetails()
            this.dateData.emit(this.QueryDataDate)
          } else {
            alert(data.error.message)
          }
        })
    }
  }
  clusterDetails() {
    this.clusterId = 'ALL';
    this.clusterDetailsData = [{ cluster: 'ALL' }];
    this.locationDetails()

  }
  clusterChange() {
    if (this.clusterId === 'ALL') {
      this.locationId = "ALL"
      this.dateDetails()
      this.dateData.emit(this.QueryDataDate)
    } else {
      this.dateFilterService.getLocationDetailsByCluster(this.clusterId).subscribe(
        (data: any) => {
          if (data.error == null) {
            this.locationDetailsData = []
            this.locationDetailsData = data.data;
            this.locationDetailsData.unshift({ id: 'ALL', locationCode: 'ALL' });
            this.locationId = this.locationDetailsData[0].locationCode;
            this.QueryDataDate.locationId = this.locationId;
            this.dateDetails()
            this.dateData.emit(this.QueryDataDate)
          } else {
            alert(data.error.message)
          }
        })
    }
  }

  locationDetails() {
    this.locationId = 'ALL';
    this.locationDetailsData = [{ id: 'ALL', locationCode: 'ALL' }];
    this.QueryDataDate.stateId = this.stateId;
    this.QueryDataDate.clusterId = this.clusterId;
    this.QueryDataDate.locationId = this.locationId;
    this.dateDetails()
    this.dateData.emit(this.QueryDataDate)
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
        this.getthisMonthDateRange1()
        this.reset();
        break
      case 'thisyear':
        this.getthisYearDateRange1()
        this.reset();
        break;
    }
  }
  stateSelect = "ALL";
  locationSelect = "ALL";
  clusterSelect = "ALL";
  clusters: any;
  locations: any;
  // stateChange() {
  //   if (this.stateSelect === 'ALL') {
  //     this.clusterSelect = 'ALL';
  //     this.locationSelect = 'ALL';
  //   }
  // }
  locationChange() {
    this.dateDetails()
    this.dateData.emit(this.QueryDataDate)

  }
  getthisMonthDateRange1() {
    this.dateRange1 = 'thismonth';
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


  reset() {
    window.scrollTo(0, 0)
    this.dateDetails()
    this.dateData.emit(this.QueryDataDate)
  }
  getDefaultDates() {
    this.getthisMonthDateRange1()
    this.resett();
  }
  resett() {
    this.stateDetails()
  }

  ngOnInit() {
    this.getDefaultDates()
    window.scrollTo(0, 0)
  }

  dateDetails() {
    window.scrollTo(0, 0)
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
    this.QueryDataDate.stateId = this.stateId;
    this.QueryDataDate.clusterId = this.clusterId;
    this.QueryDataDate.locationId = this.locationId;
  }
  errorMessage1;
  querySubmit() {
    window.scrollTo(0, 0)
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
