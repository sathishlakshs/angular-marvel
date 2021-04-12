import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesRoutingModule, RoutingComponent } from '../../routing/series-routing/series-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzPaginationModule  } from 'ng-zorro-antd/pagination';

@NgModule({
  declarations: [RoutingComponent],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    SharedModule,
    NzPaginationModule
  ]
})
export class SeriesModule { }
