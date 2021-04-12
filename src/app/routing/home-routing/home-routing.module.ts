import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../module/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';
import { LineChartComponent } from '../../components/line-chart/line-chart.component';
import { BarChartComponent } from '../../components/bar-chart/bar-chart.component';
import { ExpansionComponent } from 'src/app/components/expansion/expansion.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
export const RoutingComponent = [ HomeComponent, PieChartComponent, LineChartComponent,
  BarChartComponent, ExpansionComponent];
