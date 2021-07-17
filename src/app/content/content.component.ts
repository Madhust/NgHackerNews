import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { forkJoin, Observable } from 'rxjs';
import { HackerNewsService} from '../hacker-news.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public items: Item[] = [];
  public service: HackerNewsService
  public stories: number[] = [];
  public page: number = 1;
  public pageSize: number = 7;
  constructor(service: HackerNewsService) { this.service = service;}

  ngOnInit() {
    this.items = this.getLoadingItems();

    this.service.getStories().subscribe(i => {
      this.stories = i;
      this.fetchPagedStories(this.page);
    });
    
  }

  fetchPagedStories(pageNumber: number)
  {
    this.page = pageNumber;
    this.items = this.getLoadingItems();
    let start = (pageNumber - 1) * this.pageSize;
    let end = start + this.pageSize;
    let articles: number[] = this.stories.slice(start, end);

    let obs: Observable<Item>[] = [];
    articles.forEach(x => obs.push(this.service.getItemById(x)));
    forkJoin(obs).subscribe(x => { 
      this.items = x;
    });
  }

  getLoadingItems(): Item[] { return [new Item(),new Item(),new Item(),new Item(),new Item(),new Item(),new Item()]; }

}
