import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill, ApexGrid, ApexLegend, ApexMarkers,
  ApexPlotOptions, ApexStroke, ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from "ng-apexcharts";

export interface AllByYearly {
  month: number;
  taskDoing: number;
  taskDone: number;
}

export interface RecentlyDone {
  name: string;
  area: string;
  doingDate: any;
}

export interface TaskInTheWeek {
  id: number
  img: string;
  name: string;
  area: string;
  state: number;
}

export interface AllByYearlyParamsChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  marker: ApexMarkers;
}
