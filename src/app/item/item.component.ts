import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'app/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  public item: Item;
  public hasItem: boolean;
  constructor() { }

  ngOnInit() {
    this.hasItem = this.item !== null && this.item.id !== undefined;
  }

  navTo(item: Item) {
    window.open(item.url, '_blank').focus(); 
  } 

}
