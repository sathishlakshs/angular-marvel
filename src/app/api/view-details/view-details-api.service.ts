import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class ViewDetailsApiService {

  constructor(private http: HttpClient) { }

  public fetchDataById = (id, path, params): Observable<any> => {
    return this.http.get<any>(`${environment.api}/${path}/${id}?${params}`,
    { headers }).pipe(catchError(this.handleError));
  }

  handleError = (err) => {
    return throwError(err);
  }
}
