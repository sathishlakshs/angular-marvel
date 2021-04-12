import { Injectable } from '@angular/core';
import { CosmicsApiService } from 'src/app/api/cosmics/cosmics-api.service';
import { AppService } from 'src/app/app.service';
import {HOME_CARDS} from 'src/app/constants/global';
import { environment } from 'src/environments/environment';
import { CharactersApiService } from 'src/app/api/characters/characters-api.service';
import { SeriesApiService } from 'src/app/api/series/series-api.service';
import {ROUTE_URLS} from 'src/app/constants/routeurls';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  today = new Date();
  publichedCosmicDatas = [];
  characters = null;
  comics = null;
  series = null;
  cards = HOME_CARDS;

  constructor(public comicsApi: CosmicsApiService, public charApi: CharactersApiService,
              public appService: AppService, public seriesApi: SeriesApiService) { }

  getCosmicPublished = () => {
    let params = `ts=${this.appService.getTimeStamp(this.today)}&apikey=${environment.publickey}&hash=${this.appService.getMd5ConvertedToken(this.today)}`;
    params += `&limit=40&offset=0&hasDigitalIssue=true`;
    // tslint:disable-next-line: deprecation
    this.comicsApi.fetchComics(params).subscribe(res => {
      if (res?.data?.results && res.data.results.length > 0 ) {
        res.data.results = [...this.appService.manipulateResData(res.data.results, ROUTE_URLS.COSMICS)];
        this.comics = res.data;
        this.cards[1].children = this.comics?.results;
      }
    });
  }

  getCharacters = async () => {
    let params = `ts=${this.appService.getTimeStamp(this.today)}&apikey=${environment.publickey}&hash=${this.appService.getMd5ConvertedToken(this.today)}`;
    params += `&limit=40&orderBy=-modified&offset=0`;
    const res = await this.charApi.fetchCharacters(params).toPromise();
    if (res?.data?.results && res.data.results.length > 0 ) {
      res.data.results = [...this.appService.manipulateResData(res.data.results, ROUTE_URLS.CHARACTERS)];
      this.characters = res.data;
      this.cards[0].children = this.characters?.results;
    }
  }

  getSeries = async () => {
    let params = `ts=${this.appService.getTimeStamp(this.today)}&apikey=${environment.publickey}&hash=${this.appService.getMd5ConvertedToken(this.today)}`;
    params += `&limit=40&offset=0`;
    const res = await this.seriesApi.fetchSeries(params).toPromise();
    if (res?.data?.results && res.data.results.length > 0 ) {
      res.data.results = [...this.appService.manipulateResData(res.data.results, ROUTE_URLS.SERIES)];
      this.series = res.data;
      this.cards[2].children = this.series?.results;
    }
  }
}
