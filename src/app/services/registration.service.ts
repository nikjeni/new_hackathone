import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Registration } from '../models/registration';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/api/users";
interface UserPostResponse {
  success: boolean,
  msg: string,
  data:[]
}
@Injectable({
  providedIn: 'root'
})
export class RegistartionService {

  constructor(private http: HttpClient) { }



  register (data:Registration): Observable<UserPostResponse> {
    return this.http.post<UserPostResponse>(apiUrl+'/signup', data, httpOptions).pipe(
      catchError(this.handleError<UserPostResponse>('regitration'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  createEvent (data): Observable<UserPostResponse> {
    return this.http.post<UserPostResponse>(apiUrl+'/createEvent', data, httpOptions).pipe(
      catchError(this.handleError<UserPostResponse>('regitration'))
    );
  }
}