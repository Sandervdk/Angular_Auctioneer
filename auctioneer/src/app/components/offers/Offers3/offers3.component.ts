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
    let index = this.offers.indexOf(offer);
    this.selectedOffer = this.offers[index];
    this.selectedOfferCopy = {...this.offers[index]};
  }

  addRandomOffer() {
    let newOffer = this.offersService.addRandomOffer();
    this.offersService.add(newOffer);
    this.selectOffer(newOffer);
  }

  deleteOffer() {
    // Removes the selected offer and hides details from view
    let index = this.offers.indexOf(this.selectedOffer);
    this.offersService.remove(index);
    this.offerSelected = false;
  }

  updateOffer(offer: Offer) {
    // Updates the selected offer and reselects it so that the change isn't immediately reflected in the left list
    let index = this.offers.indexOf(this.selectedOffer);
    this.offersService.update(index, offer);
    this.selectOffer(offer);
  }
}
