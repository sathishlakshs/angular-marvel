import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenusComponent implements OnInit {
  @Input() menus: any;
  @Output() selectTab = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickTab(path): any {
    this.selectTab.emit(path);
  }

}
