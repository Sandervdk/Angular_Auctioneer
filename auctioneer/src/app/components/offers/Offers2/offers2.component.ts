import {Component, Input, OnInit, Output} from '@angular/core';
import {AuctionStatus} from "../../../models/auctionStatus";
import { Offer } from "../../../models/offer";

@Component({
  selector: 'app-offers2',
  templateUrl: './offers2.component.html',
  styleUrls: ['./offers2.component.css']
})
export class Offers2Component implements OnInit {
  offers : Offer[];
  selectedOffer: Offer;
  selectedOfferCopy: Offer;
  offerSelected: boolean;

  constructor() {}

  ngOnInit() {
    this.offers = [];

    for(let i = 0; i < 8; i++) {
      this.offers.push(this.addRandomOffer());
    }
  }

  deleteOffer() {
    for (let i = 0; i < this.offers.length; i++) {
      if (this.offers[i] == this.selectedOffer) {
        this.offers.splice(i, 1);
      }
    }
  }

  changeOffer(offer: Offer) {
    for (let i = 0; i < this.offers.length; i++) {
      if (this.offers[i] == this.selectedOffer) {
        //yeets the new offer into the offers list ezpz
        this.offers[i] = offer;
      }
    }
  }

  selectOffer(offer: Offer): void {
    this.offerSelected = true;

    for (let i = 0; i < this.offers.length; i++) {
      if (this.offers[i] == offer) {
        //Selects the selected offer and makes a copy of that specific offer
        this.selectedOffer = this.offers[i];
        this.selectedOfferCopy = {...this.offers[i]};
      }
    }
  }

  addRandomOffer(): Offer {
    let id: number = 0;
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
    let newOffer: Offer = {id, title, description, auctionStatus, valueHighestBid, numberOfBids, sellDate};

    //Adds a new offer and displays it instantly, (check is so the first offers that get added in the list don't show)
    if (this.offers.length >= 8) {
      this.selectedOffer = newOffer;
      this.offerSelected = true;
    }

    return newOffer;
  }
}
