import {OnInit} from "@angular/core";

export class Overview1 implements OnInit {
  public offers: Offer[];

  constructor() {
  }

  ngOnInit() {
    this.offers = [];
    for(let i = 0; i < 8; i++) {
      this.offers.push(this.randomOffer("Amazing Offer: " + i));
    }
  }ng

  randomOffer(title: string): Offer {
    let description: string = "A description";
    let sellDate: Date = new Date();
    let auctionStatus: AuctionStatus;
    let valueHighestBid: number;
    let numberOfBids: number;

    switch (Math.random() * 8) {
      case 0: auctionStatus = AuctionStatus.CLOSED; break;
      case 1: auctionStatus = AuctionStatus.DELIVERED; break;
      case 2: auctionStatus = AuctionStatus.EXPIRED; break;
      case 3: auctionStatus = AuctionStatus.FOR_SALE; break;
      case 4: auctionStatus = AuctionStatus.NEW; break;
      case 5: auctionStatus = AuctionStatus.PAID; break;
      case 6: auctionStatus = AuctionStatus.SOLD; break;
      case 7: auctionStatus = AuctionStatus.WITHDRAWN; break;
    }

    valueHighestBid = Math.random() * 2500;
    numberOfBids = Math.random() * 20;

    return {title, description, auctionStatus, valueHighestBid, numberOfBids, sellDate};
  }

}
