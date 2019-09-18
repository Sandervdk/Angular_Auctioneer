import { Component, OnInit } from '@angular/core';
import {Overview1} from "./overview1.component";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [Overview1]
})
export class OffersComponent implements OnInit {
  offers : {title: string, description: string, auctionStatus: AuctionStatus,
    valueHighestBid: number, numberOfBids: number, sellDate: Date}[] = [];

  constructor(private overview1: Overview1) {}

  ngOnInit() {
    this.offers = this.overview1.offers;
  }

}
