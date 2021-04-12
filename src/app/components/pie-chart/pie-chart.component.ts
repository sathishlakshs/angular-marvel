import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  colorScheme = {
    domain: ['#3f8ca9', '#79b39c']
  };
  view: any[] = [300, 250];
  name = 'Angular';
  data = [
    { name : 'cosmics', value : 100 },
    { name : 'series', value : 30}
  ];
  @Input() legends;

  constructor() { }

  ngOnInit(): void {
  }

}
