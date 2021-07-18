/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { HackerNewsService } from '../hacker-news.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe("ContentComponent", () => {
  describe('ContentComponent dom check', () => {
    let component: ContentComponent;
    let fixture: ComponentFixture<ContentComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [HackerNewsService, HttpClient],
        declarations: [ ContentComponent ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ContentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render paging icons', () => {
      expect(fixture.debugElement.nativeElement.querySelectorAll("app-page").length).toBe(2);
    });

    it('should render item container', () => {
      expect(fixture.debugElement.nativeElement.querySelectorAll("app-item").length).toBe(7);
    });

  });

  describe('Content component - fetch news method', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: HackerNewsService;
    let component: ContentComponent;
    beforeEach(() => {
      // TODO: spy on other methods too
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      service = new HackerNewsService(httpClientSpy as any);
      component = new ContentComponent(service);
      component.stories = [1, 2, 3];
    });

    it("check getLoadingItems method", waitForAsync(() => {
      expect(component.getLoadingItems().length).toBe(7);
    }));

    it("check fetachPagedStores method", waitForAsync(() => {
      httpClientSpy.get.and.returnValue(of({ id: 12333 }));
      component.fetchPagedStories(1);
      expect(component.items.length).toBe(3);
    }));
  });

});