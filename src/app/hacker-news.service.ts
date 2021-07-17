import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from './item';
import { environment } from '../environments/environment';

@Injectable()
export class HackerNewsService {
  
  public maxItemID: number = 0;

  public http: Http;
  constructor(private _http:Http) {
    this.http = _http;
  }

  public getMaxItemID(): Observable<number> {
    return this.http.get(`${environment.apiBaseUrl}/maxitem.json`)
    .pipe(map((x: any) => x.json()));
  }

  public getItemById(id: number): Observable<Item>
  {
    return this.http.get(`${environment.apiBaseUrl}/item/${id}.json`)
    .pipe(map((x: any) => x.json()));
  }

  public getStories(): Observable<number[]> {
    return this.http.get(`${environment.apiBaseUrl}/topstories.json`)
    .pipe(map((x: any) => x.json()));
  }

}
