import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  route : string = this.router.url;
  paramsSubscription : Subscription;

  constructor(private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.paramsSubscription = this.activatedRoute.url
      .subscribe(
        (event) => {
          this.route = '/' + event[0].toString();
        }
      )
  }

}
