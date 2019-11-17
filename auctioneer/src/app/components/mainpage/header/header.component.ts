import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate: string;
  date: Date;
  user: String = 'Visitor';

  constructor(private sessionService: SessionService) {
    this.date = new Date();
    this.currentDate = "Today is " + this.date.toDateString();
  }

  ngOnInit() {
  }

  logIn() {
    if (this.user == 'Visitor') {
      this.sessionService.signIn('wies@test.test', 'Joepie123!');
      this.user = 'wies@test.test';
      console.log("Logged in")
    } else {
      this.sessionService.signOff();
      this.user = 'Visitor';
      console.log("Logged out")
    }
  }

}
