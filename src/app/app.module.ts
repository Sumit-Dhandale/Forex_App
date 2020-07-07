import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { NewsComponent } from './components/news/news.component';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { ConvertorComponent } from './components/convertor/convertor.component';
import { HistoryComponent } from './components/history/history.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    NewsComponent,
    ExchangeComponent,
    ConvertorComponent,
    HistoryComponent,
    HomepageComponent,
    WatchlistComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
