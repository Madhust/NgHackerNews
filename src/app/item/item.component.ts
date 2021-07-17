import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  public item: Item = new Item();
  public hasItem: boolean = false;
  constructor() { }

  ngOnInit() {
    this.hasItem = this.item !== null && this.item.id !== -1;
  }

  navTo(item: Item) {
    window.open(item.url, '_blank')!.focus(); 
  }

}
