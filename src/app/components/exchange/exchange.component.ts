import { Component, OnInit } from '@angular/core';
import {ExchangeService} from '../../services/exchange.service'
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  currencyexchange: any[];
  headers=["CURRENCY","BID","ASK","OPEN","LOW","HIGH"];
  data$ = new Subject<any>();
  filterdata:any[];
  constructor(private _ExchangeService:ExchangeService) { }

  ngOnInit(): void {
    this._ExchangeService.getexchange().subscribe(data=>{this.currencyexchange=data;
    console.log(this.currencyexchange)});
    this._ExchangeService.getexchange().subscribe(data=>{this.filterdata=data;
      console.log(this.filterdata)}); 
    
  }
  search(term: string) {
    console.log(term)
    if(!term) {
      this.filterdata= this.currencyexchange;
    } else {
      this.filterdata= this.currencyexchange.filter(x => 
         x.ticker.trim().toLowerCase().includes(term.trim().toLowerCase())
      
      );
     
    }
  }

}
