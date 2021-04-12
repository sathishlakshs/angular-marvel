import { Injectable, Inject } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {environment} from 'src/environments/environment';
import { ReplaySubject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  loadedLibraries: { [url: string]: ReplaySubject<any> } = {};
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  getMd5ConvertedToken = (ts) => {
    const md5 = new Md5();
    const today = new Date();
    const hashkey = md5.appendStr(`${this.getTimeStamp(today)}${environment.privatekey}${environment.publickey}`).end();
    return hashkey;
  }

  getTimeStamp = (date) => {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
  }

  manipulateResData = (data, path) => {
    const temp = [];
    data.forEach(element => {
      element.imagePath = `${element.thumbnail?.path}.${element.thumbnail?.extension}`;
      element.routePath = path;
      temp.push(element);
    });
    return temp;
  }

  arrayIterate(n: number): any[] {
    return Array(n);
  }

  loadScript(url: string): Observable<any> {
    if (this.loadedLibraries[url]) {
      return this.loadedLibraries[url].asObservable();
    }

    this.loadedLibraries[url] = new ReplaySubject();

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = () => {
      this.loadedLibraries[url].next();
      this.loadedLibraries[url].complete();
    };

    this.document.body.appendChild(script);

    return this.loadedLibraries[url].asObservable();
  }
}
