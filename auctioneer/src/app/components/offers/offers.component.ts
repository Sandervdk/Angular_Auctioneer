import { Component, OnInit } from '@angular/core';
import {Overview1} from "./overview1.component";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [Overview1]
})

export class OffersComponent implements OnInit {
  offers : Offer[];

  constructor(private overview1: Overview1) {}

  ngOnInit() {
    this.offers = [];

    for(let i = 0; i < 8; i++) {
      this.offers.push(this.overview1.randomOffer("Amazing Offer: " + i));
    }
  }

}
