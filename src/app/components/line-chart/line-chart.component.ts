import { Component, Input, OnInit } from '@angular/core';

const mockdata = [
  {
    name: 'USA',
    series: [
      {
        name: '2016',
        value: 70
      },
      {
        name: '2017',
        value: 60
      },
      {
        name: '2018',
        value: 40
      },
      {
        name: '2019',
        value: 67
      },
      {
        name: '2020',
        value: 80
      }
    ]
  }
];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  multi: any[];
  view: any[] = [500, 280];
  legend = false;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = false;
  showXAxisLabel = false;
  xAxisLabel = 'Year';
  yAxisLabel = 'Population';
  timeline = true;
  roundDomains = true;
  seriesValue = '11774';
  @Input() legends;

  colorScheme = {
    domain: [ '#79b39c', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { multi: mockdata });
   }

  ngOnInit(): void {
  }

  onSelect = (event) => {
    console.log(event);
  }

}
