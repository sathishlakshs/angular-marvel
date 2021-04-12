import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosmicsComponent } from '../../module/cosmics/cosmics.component';
import { RouterModule, Routes } from '@angular/router';
import { PosterComponent } from 'src/app/components/poster/poster.component';

const routes: Routes = [
  {
      path: '',
      component: CosmicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class CosmicsRoutingModule { }
export const RoutingComponent = [CosmicsComponent];
