import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  constructor(private http: HttpClient) { }

  public fetchCharacters = (params): Observable<any> => {
    return this.http.get<any>(`${environment.api}/characters?${params}`, { headers }).pipe(catchError(this.handleError));
  }
  handleError = (err) => {
    return throwError(err);
  }
}
