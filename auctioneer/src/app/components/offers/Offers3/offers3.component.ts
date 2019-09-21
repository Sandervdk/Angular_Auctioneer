import { Component, OnInit } from '@angular/core';
import {OffersService} from "../../../services/offers.service";
import {Offer} from "../../../models/offer";

@Component({
  selector: 'app-offers3',
  templateUrl: './offers3.component.html',
  styleUrls: ['./offers3.component.css']
})
export class Offers3Component implements OnInit {
  offers : Offer[] = [];
  offerSelected: boolean;
  selectedOffer: Offer;
  selectedOfferCopy: Offer;

  constructor(private offersService: OffersService) {}

  ngOnInit() {
    this.offers = this.offersService.offers;
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

  addRandomOffer() {
    return this.offersService.addRandomOffer();
  }
}
