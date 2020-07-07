import { Component, OnInit } from '@angular/core';
import {NewsService} from '.././../services/news.service';
import {WatchlistService} from '.././../services/watchlist.service'
import { BehaviorSubject,Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news;
  articles;
  constructor(private _NewsService:NewsService,private _WatchlistService:WatchlistService) { 
    
  }

  send(art) {
    this._WatchlistService.CreateBug(art).subscribe(res => {
      console.log('Issue added!')
      
    });
  }
  ngOnInit(): void {
    this._NewsService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
   
}
