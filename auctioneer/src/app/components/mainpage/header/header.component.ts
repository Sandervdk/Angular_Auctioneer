import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../services/session.service";
import {Router, RouterModule, RouterState} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate: string;
  date: Date;

  constructor(private sessionService: SessionService,
              private router : Router) {
    this.date = new Date();
    this.currentDate = "Today is " + this.date.toDateString();
  }

  ngOnInit() {
  }

  logIn() {
    if (this.sessionService.getCurrentUser() != 'Visitor') {
      this.sessionService.signOff();
      this.router.navigate(['/']);
      this.sessionService.setCurrentUser('Visitor');
      console.log("Logged out");
    } else {
      this.router.navigate(['/login']);
    }
  }

}
