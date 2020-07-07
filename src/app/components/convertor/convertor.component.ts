import { Component, OnInit } from '@angular/core';
import {ExchangeService} from '../../services/exchange.service'
@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']
})
export class ConvertorComponent implements OnInit {
  amount=1;
  data="";f="USD";s="EUR";
  samples;answer;
  errorMsg;
  isShow=false
  assign()
  {
    this.isShow = true;
    this.data="?base="+this.f+"&symbols="+this.f+","+this.s;
    //console.log(this.data) 
    this.ngOnInit(); 
    
  }
  constructor(private _exchangeService:ExchangeService) { }

  ngOnInit(): void {
    this._exchangeService.myMethod(this.data);
    this._exchangeService.getInfo().subscribe(data=>{this.samples=data;
    // console.log(this.samples);this.answer=this.samples.rates.EUR*this.amount;
    // console.log(this.answer)});
    for (const [key, value] of Object.entries(this.samples.rates)) {
      if(value!=1)
      {
        this.answer=value;
        this.answer=this.answer*this.amount;
      }
    }});
    
  }
}
