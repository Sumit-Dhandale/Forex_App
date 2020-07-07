import { Component, OnInit } from '@angular/core';
import {NewsService} from '.././../services/news.service';
import {ExchangeService} from '../../services/exchange.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  articles;
  currencyexchange
  constructor(private _NewsService:NewsService,public _ExchangeService:ExchangeService ) { }

  ngOnInit(): void {
    this._ExchangeService.getexchange().subscribe(data=>{this.currencyexchange=data;
      console.log(this.currencyexchange)});
    this._NewsService.get().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
