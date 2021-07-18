/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { Item } from '../item';

describe("ItemComponent", () => {
  describe('ItemComponent with Item', () => {
    let component: ItemComponent;
    let fixture: ComponentFixture<ItemComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ ItemComponent ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ItemComponent);
      component = fixture.componentInstance;
      component.hasItem = true;
      component.item = <Item>{ id: 124, title: "dummy", score: 23, by: "dseke", date: 2334343434 };
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('Check DOM', () => {
      expect(fixture.debugElement.nativeElement.querySelector("h3").textContent).toContain("dummy");
      expect(fixture.debugElement.nativeElement.querySelector("p").textContent).toContain("dseke");
    });

  });

  describe('ItemComponent without Item', () => {
    let component: ItemComponent;
    let fixture: ComponentFixture<ItemComponent>;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ ItemComponent ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ItemComponent);
      component = fixture.componentInstance;
      component.hasItem = false;
      component.item = <Item>{ id: -1, title: "" };
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('Check DOM', () => {
      expect(fixture.debugElement.nativeElement.querySelector("h3").textContent).toContain("Loading...");
      expect(fixture.debugElement.nativeElement.querySelector("p").textContent).toContain(".....");
    });

  });

});