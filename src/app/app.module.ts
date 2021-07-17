import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HackerNewsComponent } from './hacker-news-component/hacker-news-component.component';
import { HeaderComponent } from './header-component/header-component.component';
import { ContentComponent } from './content/content.component';
import { ItemComponent } from './item/item.component';
import { HackerNewsService } from './hacker-news.service';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    HackerNewsComponent,
    HeaderComponent,
    ContentComponent,
    ItemComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HackerNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
