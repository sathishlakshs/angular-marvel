import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENUS } from './constants/global';;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menus = MENUS;
  activeLinkIndex = -1;
  constructor(private router: Router) {  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.menus.indexOf(this.menus.find(tab => tab.path === '.' + this.router.url));
  });
  }

}
