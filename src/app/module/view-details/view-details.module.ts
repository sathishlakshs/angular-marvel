import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewdetailsRoutingModule, RoutingComponent } from 'src/app/routing/viewdetails-routing/viewdetails-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [RoutingComponent],
  imports: [
    CommonModule,
    ViewdetailsRoutingModule,
    SharedModule
  ]
})
export class ViewDetailsModule { }
