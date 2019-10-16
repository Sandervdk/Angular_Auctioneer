import {Injectable} from "@angular/core";
import {Offer} from "../models/offer";
import {AuctionStatus} from "../models/auctionStatus";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class Offers2Service {
  public offers: Offer[];

  private link = 'https://ng-auctioneer-is205-5.firebaseio.com/offers';

  constructor(private http: HttpClient) {
    // this.offers = [];
    // for (let i = 0; i < 7; i++) {
    //   this.offers.push(this.addRandomOffer());
    // }
  }

  // CRUD functionalities for offers
  add(offer: Offer): number {
    this.offers.push(offer);
    return this.offers.indexOf(offer);
  }

  update(oIdx: number, offer: Offer) {
    this.offers[oIdx] = offer;
  }

  remove(oIdx: number): Offer {
    let trash = this.offers[oIdx];
    this.offers.splice(oIdx, 1);
    return trash;
  }

  // For populating the array initially, 3.0
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

  getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.link + '.json')
      .pipe(
        retry(2), // retry a failed request twice
        catchError((err) => of (err))
      )
  }

  saveAllOffers() {
    return this.http.put(this.link + '.json', this.offers)
      .pipe(
        retry(2), // retry a failed request twice
        catchError((err) => of (err))
      );
  }

  setOffers(offers: any) {
    this.offers = offers;
    this.saveAllOffers().subscribe(
      () => {}
    )
  }
}
