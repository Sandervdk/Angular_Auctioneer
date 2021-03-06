import {Injectable} from "@angular/core";
import {Offer} from "../models/offer";
import {AuctionStatus} from "../models/auctionStatus";
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class OfferService {
  public offers: Offer[];

  private link = 'http://localhost:8080/offers';

  constructor(private http: HttpClient) {}

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

    let newOffer = new Offer(id, title, description, auctionStatus, valueHighestBid, numberOfBids, sellDate);
    this.http.post<Offer>(this.link, newOffer).subscribe((offer) => newOffer.id = offer.id);
    return newOffer;
  }

  getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.link)
      .pipe(
        // retry(2), // retry a failed request twice
        catchError((err) => of (err))
      )
  }

  saveAllOffers() {
    return this.http.put(this.link, this.offers)
      .pipe(
        // retry(2), // retry a failed request twice
        catchError((err) => of (err))
      );
  }

  setOffers(offers: any) {
    this.offers = offers;
    // todo explain to me why this is being called :0
    // this.saveAllOffers().subscribe(
    //   () => {console.log("ree2")}
    // )
  }
}
