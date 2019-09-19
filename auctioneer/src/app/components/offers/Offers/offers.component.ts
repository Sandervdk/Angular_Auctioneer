import { Component, OnInit } from '@angular/core';
import { AuctionStatus } from "../../../models/auctionStatus";
import { Offer } from "../../../models/offer";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})

export class OffersComponent implements OnInit {
  offers : Offer[];

  constructor() {}

  ngOnInit() {
    this.offers = [];

    for(let i = 0; i < 8; i++) {
      this.offers.push(this.addRandomOffer());
    }
  }

  addRandomOffer(): Offer {
    let title: string = "Item " + (Math.random() * 1000).toFixed(0);
    let description: string = "A description";
    let sellDate: Date = new Date();
    let auctionStatus: AuctionStatus;
    let valueHighestBid: number;
    let numberOfBids: number;

    switch (Math.round(Math.random() * 7)) {
      case 0: auctionStatus = AuctionStatus.CLOSED; break;
      case 1: auctionStatus = AuctionStatus.DELIVERED; break;
      case 2: auctionStatus = AuctionStatus.EXPIRED; break;
      case 3: auctionStatus = AuctionStatus.FOR_SALE; break;
      case 4: auctionStatus = AuctionStatus.NEW; break;
      case 5: auctionStatus = AuctionStatus.PAID; break;
      case 6: auctionStatus = AuctionStatus.SOLD; break;
      case 7: auctionStatus = AuctionStatus.WITHDRAWN; break;
    }

    valueHighestBid = parseFloat((Math.random() * 2500).toFixed(2));
    numberOfBids = Math.round(Math.random() * 20);

    return {title, description, auctionStatus, valueHighestBid, numberOfBids, sellDate};
  }

}
