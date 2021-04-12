import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewDetailsService } from './view-details.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, public service: ViewDetailsService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(params => {
      this.service.getDataById(params.id, params.category);
    });
  }

}
