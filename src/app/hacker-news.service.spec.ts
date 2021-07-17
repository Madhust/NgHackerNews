/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HackerNewsService } from './hacker-news.service';

describe('HackerNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackerNewsService]
    });
  });

  it('should ...', inject([HackerNewsService], (service: HackerNewsService) => {
    expect(service).toBeTruthy();
  }));
});
