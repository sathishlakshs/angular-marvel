import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule, RoutingComponent } from '../../routing/characters-routing/characters-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [RoutingComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class CharactersModule { }
