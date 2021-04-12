import { Component, Input, OnInit } from '@angular/core';

const mockdata = [
  {
    name: '2016',
    value: 89
  },
  {
    name: '2017',
    value: 50
  },
  {
    name: '2018',
    value: 72
  },
  {
    name: '2019',
    value: 60
  },
  {
    name: '2020',
    value: 65
  }
];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [500, 250];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';
  colorScheme = {
    domain: ['#3f8ca9', '#3f8ca9', '#3f8ca9', '#3f8ca9']
  };
  @Input() legends;
  constructor() {
    Object.assign(this, { single: mockdata });
  }

  ngOnInit(): void {
  }

  onSelect = (event) => {
    console.log(event);
  }

}
