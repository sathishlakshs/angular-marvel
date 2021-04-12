import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewDetailsComponent } from 'src/app/module/view-details/view-details.component';

const routes: Routes = [
  {
      path: '',
      component: ViewDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class ViewdetailsRoutingModule { }
export const RoutingComponent = [ ViewDetailsComponent ];
