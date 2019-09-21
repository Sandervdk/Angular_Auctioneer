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
    let newOffer = this.offersService.addRandomOffer();

    //Adds a new offer and displays it instantly, (check is so the first offers that get added in the list don't show)
    if (this.offers.length >= 7) {
      this.selectedOffer = newOffer;
      this.selectedOfferCopy = newOffer;
      this.offerSelected = true;
    }
    this.offersService.offers.push(newOffer);
  }

  deleteOffer() {
    for (let i = 0; i < this.offers.length; i++) {
      if (this.offers[i] == this.selectedOffer) {
        this.offersService.remove(i);
        this.offerSelected = false;
      }
    }
  }

  updateOffer(offer: Offer) {
    for (let i = 0; i < this.offers.length; i++) {
      if (this.offers[i] == this.selectedOffer) {
        this.offersService.update(i, offer);
      }
    }
  }
}
