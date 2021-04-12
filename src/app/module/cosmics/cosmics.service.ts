import { Injectable } from '@angular/core';
import { CosmicsApiService } from 'src/app/api/cosmics/cosmics-api.service';
import { environment} from 'src/environments/environment';
import { AppService } from '../../app.service';
import { ROUTE_URLS } from 'src/app/constants/routeurls';

@Injectable({
  providedIn: 'root'
})
export class CosmicsService {
  today = new Date();
  count = 0;
  list = [];
  isLoading = false;

  constructor(public api: CosmicsApiService, public appService: AppService) { }

  getComics = async (pageSize, pageIndex) => {
    let params = `ts=${this.appService.getTimeStamp(this.today)}&apikey=${environment.publickey}&hash=${this.appService.getMd5ConvertedToken(this.today)}`;
    params += `&limit=${pageSize}&offset=0&hasDigitalIssue=${pageIndex}`;
    const res = await this.api.fetchComics(params).toPromise();
    if (res?.data?.results && res.data.results.length > 0 ) {
      this.list = [...this.list, ...this.appService.manipulateResData(res.data.results, ROUTE_URLS.COSMICS)];
      this.count = res.data.total;
    }
    this.isLoading = false;
  }
}
