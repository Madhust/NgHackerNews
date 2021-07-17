import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input()
  public direction: string;

  @Input()
  public pageNumber: number;

  @Output()
  public pageNumberChanged: EventEmitter<number> = new EventEmitter<number>();

  public isNext: boolean;

  constructor() { }

  ngOnInit() {
    this.isNext = this.direction == "Next";
  }

  onClicked()
  {
    if (this.direction === "Previous") {
      this.pageNumber = --this.pageNumber;
    } else {
      this.pageNumber = ++this.pageNumber;
    }
    this.pageNumberChanged.emit(this.pageNumber);
  }

}
