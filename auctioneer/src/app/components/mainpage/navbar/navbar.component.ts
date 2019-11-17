import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: string = 'Visitor';

  constructor(private sessionService: SessionService) {

  }

  ngOnInit() {
  }

  logIn() {
    if (this.user == 'Visitor') {
      this.sessionService.signOn('wies@test.test', 'Joepie123!');
      this.user = 'wies@test.test';
    } else {
      this.sessionService.signOff();
      this.user = 'Visitor';
    }
  }
}
