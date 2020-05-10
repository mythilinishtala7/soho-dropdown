import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css']
})
export class TestModalComponent implements OnInit {

  items: number[];
  cond: string;
  constructor() { }

  ngOnInit() {
    this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23, 49, 45, 13];
  }

}
