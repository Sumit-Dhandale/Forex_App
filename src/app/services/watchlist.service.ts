import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,} from '@angular/common/http';
import {Observable,throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
 
  baseurl = 'http://localhost:3000';
  _url='http://localhost:3000/enroll';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  CreateBug(data): Observable<any> {
    return this.http.post<any>(this.baseurl + '/bugtracking/', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }  
  
  GetIssues(): Observable<any> {
    return this.http.get<any>(this.baseurl + '/bugtracking/')
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  Del(id){
    return this.http.delete<any>(this.baseurl + '/bugtracking/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

// Error handling
errorHandl(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

  enroll(art:any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    return this.http.post<any>(this._url,art);
  }

  Get(): Observable<any> {
    return this.http.get(this._url )
    .pipe(
      retry(1)
    )
  }
}
