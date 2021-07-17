import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';
import { environment } from '../environments/environment';

@Injectable()
export class HackerNewsService {
  
  public maxItemID: number = 0;

  public http: HttpClient;
  constructor(private _http:HttpClient) {
    this.http = _http;
  }

  public getItemById(id: number): Observable<Item>
  {
    return this.http.get(`${environment.apiBaseUrl}/item/${id}.json`)
    .pipe((x: any) => x);
  }

  public getStories(): Observable<number[]> {
    return this.http.get(`${environment.apiBaseUrl}/topstories.json`)
    .pipe((x: any) => x);
  }

}
