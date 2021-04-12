import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_URLS } from 'src/app/constants/routeurls';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  @Input() imagePath;
  @Input() data;
  @Input() btnLabel = 'View Details';
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  redirectTo = () => {
    if (this.data) {
      this.router.navigate([`/${ROUTE_URLS.VIEWDETAILS}`, { category: this.data.routePath, id: this.data.id }]);
    }
  }

}
