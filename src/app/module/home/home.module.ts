import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule, RoutingComponent } from '../../routing/home-routing/home-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from 'src/app/shared/shared.module';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { MatExpansionModule } from '@angular/material/expansion';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [RoutingComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxChartsModule,
    SharedModule,
    MatExpansionModule,
    // MatCarouselModule.forRoot(),
    NzCarouselModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
