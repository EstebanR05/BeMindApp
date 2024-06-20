import {CommonModule} from '@angular/common';
import {Component, ViewEncapsulation, ViewChild, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {TablerIconsModule} from 'angular-tabler-icons';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';
import {BaseComponent} from "../../shared/core/base.component";
import {DashboardService} from "../../shared/services/dashboard.service";
import {RecentlyDone, TaskInTheWeek} from 'src/app/shared/interface/Dashboard.interface';

export interface profitExpanceChart {
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

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  hourRate: number;
  classes: number;
  priority: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Mark J. Freeman',
    position: 'English',
    hourRate: 150,
    classes: 53,
    priority: 'Available',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    position: 'Project Manager',
    hourRate: 150,
    classes: 68,
    priority: 'In Class',
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Jamil',
    position: 'Project Manager',
    hourRate: 150,
    classes: 94,
    priority: 'Absent',
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Nirav Joshi',
    position: 'Frontend Engineer',
    hourRate: 150,
    classes: 27,
    priority: 'On Leave',
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    TablerIconsModule,
    MatCardModule,
    NgApexchartsModule,
    MatTableModule,
    CommonModule,
  ],
})
export class AppDashboardComponent extends BaseComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public graficAllByYearly!: Partial<profitExpanceChart> | any;
  displayedColumns: string[] = ['profile', 'hrate', 'exclasses', 'status'];
  listTaskInWeek: TaskInTheWeek[] = [];
  stats: RecentlyDone[] = [];

  constructor(private dashboardService: DashboardService) {
    super();
  }

  ngOnInit(): void {
    this.onReload();
  }

  public onReload(): void {
    this.getAllByYearly();
    this.getAllRecentlyDone();
    this.getAllTaskInWeek();

    //binding
    this.bindingAllByYearly();
  }

  private async getAllByYearly(): Promise<void> {
    const response = await this.dashboardService.getAllYearly();
  }

  private async getAllTaskInWeek(): Promise<void> {
    const response = await this.dashboardService.getAllTaskInWeek();
    this.listTaskInWeek = response;
  }

  private async getAllRecentlyDone(): Promise<void> {
    const response = await this.dashboardService.getAllRecentlyDone();
    response.forEach((element: RecentlyDone) => {
      const fecha = new Date(element.doingDate);
      var horas = fecha.getHours();
      const amPm = horas >= 12 ? 'PM' : 'AM';
      horas = horas % 12;
      horas = horas ? horas : 12;
      const hora = horas + ':' + fecha.getMinutes() + " " + amPm;
      element.doingDate = hora;
    });
    this.stats = response;
  }

  private bindingAllByYearly(): void {
    this.graficAllByYearly = {
      series: [
        {
          name: 'Eanings this month',
          data: [9, 5, 3, 7, 5, 10, 3],
          color: '#0085db',
        },
        {
          name: 'Expense this month',
          data: [6, 3, 9, 5, 4, 6, 4],
          color: '#fb977d',
        },
      ],
      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        strokeDashArray: 3,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          borderRadius: 4,
          endingShape: "rounded",
        },
      },
      chart: {
        type: 'bar',
        height: 390,
        offsetY: 10,
        foreColor: '#adb0bb',
        fontFamily: 'inherit',
        toolbar: {show: false},
      },
      dataLabels: {enabled: false},
      markers: {size: 0},
      legend: {show: false},
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {cssClass: 'grey--text lighten-2--text fill-color'},
        },
      },
      stroke: {
        show: true,
        width: 5,
        colors: ['transparent'],
      },
      tooltip: {theme: 'light'},
      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 3,
              },
            },
          },
        },
      ],
    };
  }
}
