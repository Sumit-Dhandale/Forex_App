import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../../services/history.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  cur=["EUR","CAD","HKD","LVL","PHP","DKK","HUF","CZK","AUD","RON","SEK","IDR",
  "INR","BRL","RUB","LTL","JPY","THB","CHF","SGD","PLN","BGN","TRY","CNY",
  "NOK","NZD","ZAR","USD","MXN","EEK","GBP","KRW","MYR","HRK"]
  public data="2020-09-06?base=AUD";
  public samples ;
  public errorMsg;
  headers=["Currency","Rates"]
  assign(value,date)
  {
    this.data=date+"?base="+value;
    //console.log(this.data) 
    this.ngOnInit(); 
  }
  constructor(private _HistoryService:HistoryService) { }

  ngOnInit(): void {
    this._HistoryService.myMethod(this.data);
    this._HistoryService.getInfo().subscribe(data=>this.samples=data ,
                                          error=>this.errorMsg=error);
    
  }

}
