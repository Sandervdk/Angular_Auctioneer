import {Component, Input, OnInit, Output} from '@angular/core';
import {OffersComponent} from "../Offers/offers.component";

@Component({
  selector: 'app-offers2',
  templateUrl: './offers2.component.html',
  styleUrls: ['./offers2.component.css']
})
export class Offers2Component implements OnInit {
  offers : Offer[];
  selectedOffer: Offer;
  offerSelected: boolean;

  constructor() {}

  ngOnInit() {
    this.offers = [];

    for(let i = 0; i < 8; i++) {
      this.offers.push(this.addRandomOffer());
    }
  }

  selectOffer(title: string): void {
    this.offerSelected = true;

    for (let i = 0; i < this.offers.length; i++) {
      if (this.offers[i].title == title) {
        this.selectedOffer = this.offers[i];
      }
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
    let newOffer: Offer = {title, description, auctionStatus, valueHighestBid, numberOfBids, sellDate};

    //Adds a new offer and displays it instantly, (check is so the first offers that get added in the list don't show)
    if (this.offers.length >= 8) {
      this.selectedOffer = newOffer;
      this.offerSelected = true;
    }

    return newOffer;
  }
}
