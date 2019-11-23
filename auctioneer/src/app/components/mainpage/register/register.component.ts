import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../../services/session.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private sessionService: SessionService,
              private router : Router) {
  }

  ngOnInit() {
  }

  registerUser(f: NgForm) {
    let email = f.value.email;
    let password = f.value.password;
    console.log("yeet");
    this.sessionService.registerAccount(email, password);
    this.router.navigate(['/'])
  }

}
