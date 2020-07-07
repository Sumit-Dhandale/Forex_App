import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable,Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _url: string ="https://api.exchangeratesapi.io/latest";

  constructor(private http:HttpClient) { }
  public getNews(){
    return this.http.get(`http://newsapi.org/v2/everything?q=forex&from=2020-06-16&sortBy=publishedAt&apiKey=bb89c58a843b416b963ceaac0dc04eb7`);
    
  }

  public get(){
    return this.http.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bb89c58a843b416b963ceaac0dc04eb7`);
    
  }
  
  
}