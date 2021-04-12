import { Injectable } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { CharactersApiService } from '../../api/characters/characters-api.service';
import { environment } from 'src/environments/environment';
import { ROUTE_URLS } from '../../constants/routeurls';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  today = new Date();
  count = 0;
  list = [];

  constructor(public api: CharactersApiService, public appService: AppService) { }

  getCharacters = async (pageSize, pageIndex) => {
    let params = `ts=${this.appService.getTimeStamp(this.today)}&apikey=${environment.publickey}&hash=${this.appService.getMd5ConvertedToken(this.today)}`;
    params += `&limit=${pageSize}&orderBy=-modified&offset=${pageIndex}`;
    const res = await this.api.fetchCharacters(params).toPromise();
    if (res?.data?.results && res.data.results.length > 0 ) {
      this.list = [...this.list, ...this.appService.manipulateResData(res.data.results, ROUTE_URLS.CHARACTERS)];
      this.count = res.data.total;
    }
  }
}
