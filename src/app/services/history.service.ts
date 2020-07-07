import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable,Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  
  public mydata;
  private baseUrl = 'https://api.exchangeratesapi.io/';
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  constructor(private http:HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable();
   }

   myMethod(data) {
    this.mydata=data;
    this.myMethodSubject.next(data);
}

  getInfo():Observable<any>{
    //console.log(this.baseUrl+this.mydata)
    return this.http.get<any>(this.baseUrl+this.mydata);
  }
}
