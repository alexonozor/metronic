import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { ChartComponent } from "ng-apexcharts";


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: any;
};

@Component({
  selector: 'app-base-tables-widget6',
  templateUrl: './base-tables-widget6.component.html',
  styles: [`
   .apexcharts-legend {
     display: none;
   }
  `]
})
export class BaseTablesWidget6Component implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  TABS: string[] = [
    'Month',
    'Week',
    'Day'
  ];
  currentTab;
  @Input() cssClass: string;
  @Input() scenarios: any[];

  constructor() {
    this.chartOptions = {
      series: [80, 10],
      chart: {
        width: 200,
        type: "donut",
      },
      dataLabels: {
        enabled: false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 80
            },
          }
        },

      ],
    };
  }


  ngOnInit(): void {
    
  }




}
