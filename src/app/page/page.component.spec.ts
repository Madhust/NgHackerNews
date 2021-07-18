/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageComponent } from './page.component';

describe("PageComponent", () => {
  describe('PageComponent Next page', () => {
    let component: PageComponent;
    let fixture: ComponentFixture<PageComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ PageComponent ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(PageComponent);
      component = fixture.componentInstance;
      component.direction = "Next";
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('Check isNext property', () => {
      expect(component.isNext).toBeTrue();
    });

    it('Check initial page property', () => {
      expect(component.pageNumber).toBe(1);
    });

    it("Should page change on click", waitForAsync(() =>{
      component.pageNumberChanged.subscribe(x => expect(x).toBe(2));
      component.onClicked();
    }));

  });
  describe('PageComponent Previous page', () => {
    let component: PageComponent;
    let fixture: ComponentFixture<PageComponent>;
  
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ PageComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(PageComponent);
      component = fixture.componentInstance;
      component.direction = "Previous";
      component.pageNumber = 4;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('Check isNext property to be false', () => {
      expect(component.isNext).toBeFalse();
    });
  
    it('Check initial page property', () => {
      expect(component.pageNumber).toBe(4);
    });
  
    it("Should page change on click", waitForAsync(() =>{
      component.pageNumberChanged.subscribe(x => expect(x).toBe(3));
      component.onClicked();
    }));
  
  });
});
