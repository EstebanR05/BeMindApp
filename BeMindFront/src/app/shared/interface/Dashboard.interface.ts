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
