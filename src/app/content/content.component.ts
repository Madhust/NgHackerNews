import { Component, OnInit } from '@angular/core';
import { Item } from 'app/item';
import { Observable } from 'rxjs';
import { HackerNewsService} from '../hacker-news.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public items: Item[];
  public service: HackerNewsService
  public stories: number[];
  public page: number = 1;
  public pageSize: number = 7;
  constructor(service: HackerNewsService) { this.service = service;}

  ngOnInit() {
    this.items = [new Item(),new Item(),new Item(),new Item(),new Item(),new Item(),new Item()];
    this.service.getStories().subscribe(i => {
      this.stories = i;
      this.fetchPagedStories(this.page);
    });
    
  }

  fetchPagedStories(pageNumber: number)
  {
    this.items = [new Item(),new Item(),new Item(),new Item(),new Item(),new Item(),new Item()];
    let start = (pageNumber - 1) * this.pageSize;
    let end = start + this.pageSize;
    let articles: number[] = this.stories.slice(start, end);

    let obs: Observable<Item>[] = [];
    articles.forEach(x => obs.push(this.service.getItemById(x)));
    Observable.forkJoin(...obs).subscribe(x => { 
      this.items = x;
    });
  }

}
