import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ROUTE_URLS} from './constants/routeurls';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `${ROUTE_URLS.HOME}` },
{
  path: ROUTE_URLS.COSMICS,
  loadChildren: () =>
    import('./module/cosmics/cosmics.module').then((m) => m.CosmicsModule),
},
{
  path: ROUTE_URLS.CHARACTERS,
  loadChildren: () =>
    import('./module/characters/characters.module').then((m) => m.CharactersModule),
},
{
  path: ROUTE_URLS.HOME,
  loadChildren: () =>
    import('./module/home/home.module').then((m) => m.HomeModule),
},
{
  path: ROUTE_URLS.SERIES,
  loadChildren: () =>
    import('./module/series/series.module').then((m) => m.SeriesModule),
},
{
  path: ROUTE_URLS.VIEWDETAILS,
  loadChildren: () =>
    import('./module/view-details/view-details.module').then((m) => m.ViewDetailsModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const RoutingComponent = [AppComponent];
