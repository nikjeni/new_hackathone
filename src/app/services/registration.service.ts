import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Registration } from '../models/registration';
import { ToastrService } from 'ngx-toastr';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};
const apiUrl = "http://localhost:3000/api/users";
interface UserPostResponse {
  success: boolean,
  msg: string,
  data:any,
  token:""
}
@Injectable({
  providedIn: 'root'
})
export class RegistartionService {

  constructor(private http: HttpClient,private toastr: ToastrService) {
   }



  register (data:Registration): Observable<UserPostResponse> {
    return this.http.post<UserPostResponse>(apiUrl+'/signup', data, httpOptions).pipe(
      catchError(this.handleError<UserPostResponse>('regitration'))
    );
  }
  login (data): Observable<UserPostResponse> {
    return this.http.post<UserPostResponse>(apiUrl+'/signin', data, httpOptions).pipe(
      catchError(this.handleError<UserPostResponse>('login'))
    );
  }
  updateProfile (data): Observable<UserPostResponse> {
    const headers = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization':this.getUserToken()}),
    };
       return this.http.post<UserPostResponse>(apiUrl+'/updateProfile', data, headers).pipe(
      catchError(this.handleError<UserPostResponse>('updateProfile'))
    );
  }
  public getUserInfo() : any {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return JSON.parse(userData);
    }
    return null;
  }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }
  public setUserToken(token){
    localStorage.setItem('token', token);
  }
  public getUserToken(){
    return localStorage.getItem('token');
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      this.toastr.error('Unauthorized User');
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  createEvent (data): Observable<UserPostResponse> {
    const headers = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization':this.getUserToken()}),
    };
    return this.http.post<UserPostResponse>(apiUrl+'/createEvent', data, headers).pipe(
      catchError(this.handleError<UserPostResponse>('createEvent'))
    );
  }
  getEvents(): Observable<UserPostResponse> {
    const headers = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization':this.getUserToken()}),
    };
    return this.http.get<UserPostResponse>(apiUrl+'/getEvents', headers).pipe(
      catchError(this.handleError<UserPostResponse>('getEvents'))
    );
  }
  getUsers(): Observable<UserPostResponse> {
    const headers = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization':this.getUserToken()}),
    };
    return this.http.get<UserPostResponse>(apiUrl+'/getUsers', headers).pipe(
      catchError(this.handleError<UserPostResponse>('getUsers'))
    );
  }
  deactiveUser (data): Observable<UserPostResponse> {
    const headers = {
      headers: new HttpHeaders({'Content-Type': 'application/json','Authorization':this.getUserToken()}),
    };
    return this.http.put<UserPostResponse>(apiUrl+'/deactiveUser', data, headers).pipe(
      catchError(this.handleError<UserPostResponse>('deactiveUser'))
    );
  }
}