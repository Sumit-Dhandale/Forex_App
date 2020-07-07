import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '.././../services/watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  list
  flag=0;
  constructor(
    public _WatchlistService: WatchlistService){ }
    
  ngOnInit(): void {
    this.load()
    if(this.list.length)
    {
      this.flag=1;
    }
  }
  load() {
    return this._WatchlistService.GetIssues().subscribe((data: {}) => {
      this.list = data;
      console.log(data)
    })
  }
  remove(data){
    var index = data;
     return this._WatchlistService.Del(data.id).subscribe(res => {
      this.list.splice(index, 1)
       console.log('Issue deleted!')
     })
  }

}
