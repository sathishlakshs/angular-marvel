import { Injectable } from '@angular/core';
import { ViewDetailsApiService } from 'src/app/api/view-details/view-details-api.service';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewDetailsService {
  today = new Date();
  data = null;

  constructor(public api: ViewDetailsApiService, public appService: AppService) { }

  getDataById = async (id, path) => {
    const params = `ts=${this.appService.getTimeStamp(this.today)}&apikey=${environment.publickey}&hash=${this.appService.getMd5ConvertedToken(this.today)}`;
    const res = await this.api.fetchDataById(id, path, params).toPromise();
    if (res?.data?.results && res.data.results.length > 0) {
      res.data.results[0].imagePath = `${res.data.results[0]?.thumbnail?.path}.${res.data.results[0]?.thumbnail?.extension}`;
      this.data = res.data.results[0];
      console.log(this.data);
    }
  }
}
