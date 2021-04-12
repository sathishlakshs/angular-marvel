import { Component, OnInit } from '@angular/core';
import {CosmicsService} from './cosmics.service';
import { HOME_CARDS } from 'src/app/constants/global';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-cosmics',
  templateUrl: './cosmics.component.html',
  styleUrls: ['./cosmics.component.scss']
})
export class CosmicsComponent implements OnInit {
  title = HOME_CARDS[1].label;
  pageSize = 40;
  pageIndex = 0;
  isLoading = false;

  constructor(public service: CosmicsService, public appService: AppService) { }

  ngOnInit(): void {
    this.service.getComics(this.pageSize, this.pageIndex);
  }

  next = () => {
    this.service.isLoading = true;
    this.pageSize = 60;
    this.pageIndex += 1;
    this.service.getComics(this.pageSize, this.pageIndex);
  }

}
