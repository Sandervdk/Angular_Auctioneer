import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../../services/session.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.css']
})
export class SignOnComponent implements OnInit {
  user: String;

  constructor(private sessionService: SessionService,
              private router : Router) {
  }

  ngOnInit() {
    this.user = this.sessionService.getCurrentUser();
  }

  logIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.sessionService.signIn(email, password);
    this.sessionService.setCurrentUser(email);
    this.router.navigate(['/']);
    console.log("Logged in")
  }

}
