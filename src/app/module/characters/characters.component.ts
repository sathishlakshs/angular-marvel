import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HOME_CARDS } from 'src/app/constants/global';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  title = HOME_CARDS[0].label;
  pageSize = 40;
  pageIndex = 0;
  throttle = 200;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';

  constructor(public service: CharactersService, public appService: AppService) { }

  ngOnInit(): void {
    this.service.getCharacters(this.pageSize, this.pageIndex);
  }

  onScrollDown = () => {
    this.pageSize = 60;
    this.pageIndex += 1;
    this.service.getCharacters(this.pageSize, this.pageIndex);
    this.direction = 'down';
  }

  onUp = () => {
    this.direction = 'up';
  }

}
