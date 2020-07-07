import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  url='https://api.exchangeratesapi.io/latest?'
  mydata;
  private baseUrl = 'https://api.exchangeratesapi.io/latest';
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  
  constructor(private http:HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable();
   }
  getexchange():Observable<any>{
    //return this.http.get(`https://financialmodelingprep.com/api/v3/fx?apikey=5bb54d52a285d97e87f5902ab0926ef5`);
     return this.http.get(`https://financialmodelingprep.com/api/v3/fx?apikey=3978db28cabcb96c6acc1ca35a4ce625`);
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
