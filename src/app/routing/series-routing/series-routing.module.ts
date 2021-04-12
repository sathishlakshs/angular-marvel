import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from '../../module/series/series.component';

const routes: Routes = [
  {
      path: '',
      component: SeriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class SeriesRoutingModule { }
export const RoutingComponent = [ SeriesComponent ];
