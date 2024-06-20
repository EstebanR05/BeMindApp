import {CommonModule} from '@angular/common';
import {Component, ViewEncapsulation, ViewChild, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {TablerIconsModule} from 'angular-tabler-icons';
import {ChartComponent, NgApexchartsModule,} from 'ng-apexcharts';
import {BaseComponent} from "../../shared/core/base.component";
import {DashboardService} from "../../shared/services/dashboard.service";
import {
  AllByYearly,
  AllByYearlyParamsChart,
  RecentlyDone,
  TaskInTheWeek
} from 'src/app/shared/interface/Dashboard.interface';

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
  public graficAllByYearly!: Partial<AllByYearlyParamsChart> | any;
  displayedColumns: string[] = ['profile', 'hrate', 'exclasses', 'status'];
  listTaskInWeek: TaskInTheWeek[] = [];
  stats: RecentlyDone[] = [];
  private doing: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  private done: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
    this.bindingAllByYearly(this.doing, this.done);
  }

  private async getAllByYearly(): Promise<void> {
    try {
      const response = await this.dashboardService.getAllYearly();
      const taskDoing: AllByYearly[] = response.filter((task: AllByYearly) => task.taskDoing !== 0);
      const taskDone: AllByYearly[] = response.filter((task: AllByYearly) => task.taskDone !== 0);

      taskDoing.forEach((task: AllByYearly) => {
        this.doing[(task.month - 1)] = task.taskDoing;
      });

      taskDone.forEach((task: AllByYearly) => {
        this.done[(task.month - 1)] = task.taskDone;
      });

      this.bindingAllByYearly(this.doing, this.done);
    } catch (error) {
      console.error("Error fetching yearly tasks:", error);
    }
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

  private bindingAllByYearly(doing: number[], done: number[]): void {
    this.graficAllByYearly = {
      series: [
        {
          name: 'Task Doing',
          data: doing,
          color: '#0085db',
        },
        {
          name: 'Task Done',
          data: done,
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
