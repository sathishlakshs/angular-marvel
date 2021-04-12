import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CosmicsRoutingModule, RoutingComponent} from '../../routing/cosmics-routing/cosmics-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RoutingComponent],
  imports: [
    CommonModule,
    CosmicsRoutingModule,
    SharedModule
  ]
})
export class CosmicsModule { }
