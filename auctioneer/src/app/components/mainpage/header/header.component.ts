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

  logInOrOut() {
    // If this function is called, either logs you out if you're not currently 'Visitor',
    // or takes you to the login page if you're currently 'Visitor'
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
