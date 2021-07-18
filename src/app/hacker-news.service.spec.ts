/* tslint:disable:no-unused-variable */

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { HackerNewsService } from './hacker-news.service';

describe('HackerNewsService', () => {
  describe('HackerNewsService creation', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [HackerNewsService, HttpClient]
      });
    });

    it('should create and inject', inject([HackerNewsService], (service: HackerNewsService) => {
      expect(service).toBeTruthy();
      expect(service.http).toBeTruthy();
    }));
  });

  describe('HackerNewsService Http Call', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: HackerNewsService;

    beforeEach(() => {
      // TODO: spy on other methods too
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new HackerNewsService(httpClientSpy as any);
    });

    it("check getStories method", waitForAsync(() => {
      httpClientSpy.get.and.returnValue(of([222, 3333]));
      service.getStories().subscribe(x => expect(x[0]).toBe(222));
    }));

    it("check getItemById method", waitForAsync(() => {
      httpClientSpy.get.and.returnValue(of({ id: 12333 }));
      service.getItemById(222).subscribe(x => expect(x.id).toBe(12333));
    }));
  });
});