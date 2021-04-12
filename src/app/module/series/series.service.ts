import { Injectable } from '@angular/core';
import { SeriesApiService } from 'src/app/api/series/series-api.service';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';
import { ROUTE_URLS } from 'src/app/constants/routeurls';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  today = new Date();
  count = 0;
  list = [];

  constructor(public api: SeriesApiService, public appService: AppService) { }

  getSeries = async (pageSize, pageIndex) => {
    let params = `ts=${this.appService.getTimeStamp(this.today)}&apikey=${environment.publickey}&hash=${this.appService.getMd5ConvertedToken(this.today)}`;
    params += `&limit=${pageSize}&offset=${pageIndex}`;
    const res = await this.api.fetchSeries(params).toPromise();
    if (res?.data?.results && res.data.results.length > 0 ) {
      this.list = [...this.appService.manipulateResData(res.data.results, ROUTE_URLS.SERIES)];
      this.count = res.data.total;
    }
  }
}
