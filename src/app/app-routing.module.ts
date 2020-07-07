import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { NewsComponent } from './components/news/news.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { ConvertorComponent } from './components/convertor/convertor.component';
import { HistoryComponent } from './components/history/history.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {WatchlistComponent} from './components/watchlist/watchlist.component'
import {ContactComponent} from './components/contact/contact.component'

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {path:'homepage',component:HomepageComponent},
  {path:'helpdesk',component:ChatComponent},
  {path:'news',component:NewsComponent},
  {path:'currencies',component:ExchangeComponent},
  {path:'convertor',component:ConvertorComponent},
  {path:'history',component:HistoryComponent},
  {path:'about',component:ContactComponent},
  {path:'watchlist',component:WatchlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
