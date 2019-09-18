import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate: string;
  date: Date;

  constructor() {
    this.date = new Date();
    this.currentDate = "Today is " + this.date.toDateString();
  }

  ngOnInit() {
  }

}
