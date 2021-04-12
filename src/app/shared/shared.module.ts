import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterComponent } from '../components/poster/poster.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const sharedComponent = [PosterComponent, SpinnerComponent];

@NgModule({
  exports: [
    sharedComponent
],
declarations: [sharedComponent],
imports: [
    CommonModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatProgressSpinnerModule
]
})
export class SharedModule {
  static forRoot(): any {
    return {
        ngModule: SharedModule,
        providers: []
    };
}
 }
