import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HOME_CARDS } from 'src/app/constants/global';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  title = HOME_CARDS[2].label;
  pageSize = 40;
  pageIndex = 1;
  size = 0;
  data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
  ];

  constructor(public service: SeriesService, public appService: AppService) { }

  ngOnInit(): void {
    this.service.getSeries(this.pageSize, this.pageIndex);
  }

  onPageIndexChange = (index) => {
    this.size = (index - 1) * this.pageSize;
    this.pageIndex = index;
    this.service.getSeries(this.pageSize, this.pageIndex);
  }

}
