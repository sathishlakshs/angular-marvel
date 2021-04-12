import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomeService } from './home.service';
import { HOME_SLIDES } from '../../constants/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  slides = HOME_SLIDES;
  lineNgxLegends = [{name: 'series', label: 'Series Released', class: 'typo1 lightgreen', value: '11774'}];
  pieNgxLegends = [{name: 'comics', label: 'Comics', class: 'typo1 cyan', value: '27612'},
          {name: 'series', label: 'Series', class: 'typo1 lightgreen', value: '11774'}];
  barNgxLegends = [{name: 'Comics', label: 'Comics Published', class: 'typo1 cyan', value: '27612'}];

  constructor(public service: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.service.getCosmicPublished();
    this.service.getCharacters();
    this.service.getSeries();
  }

  navigateTo = (path) => {
    this.router.navigateByUrl(`${path}`);
   }

}
