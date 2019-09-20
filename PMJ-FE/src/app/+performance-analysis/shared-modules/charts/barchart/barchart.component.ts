import { Component, Input, ChangeDetectorRef, ViewContainerRef, Output, SimpleChanges, EventEmitter } from '@angular/core';

import * as moment from 'moment';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';

@Component({
    selector: 'app-barchart',
    templateUrl: './barchart.component.html',
    styles: [`
    
    `]
})

export class BarChartComponent {
    barCategories: any;
    baryAxisText: any;
    barchartId: any
    seriesdata: any

    @Input()
    set seriesData(g) {
        this.seriesdata = g
    }

    @Input()
    set categories(g) {
        this.barCategories = g
    }

    @Input()
    set chartId(g) {
        this.barchartId = g
    }

    @Input()
    set yAxisText(g) {
        this.baryAxisText = g
    }
    constructor(private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.getData()
    }

    ngOnChanges(changes: SimpleChanges) {
        this.cdr.detectChanges()
        this.getData()
    }

    getData() {
        this.cdr.detectChanges()
        Highcharts.chart(this.barchartId, {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.categories
            },
            yAxis: {
                title: {
                    text: this.baryAxisText
                }
            },
            credits: {
                enabled: false
            },

            series: this.seriesdata
        });
    }



}

