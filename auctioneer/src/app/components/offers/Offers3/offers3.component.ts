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
    let index = this.offers.indexOf(this.selectedOffer);

    if (index != -1) {
      // If index of selectedOffer is found, updates the selected offer
      this.offersService.update(index, offer);
    } else {
      // If index of selectedOffer is not found, adds the new offer to the array
      this.offersService.add(offer);
    }
    //Reselects the offer so that an updated offer isn't immediately reflected in the left list
    this.selectOffer(offer);
  }

  clearOffer() {
    // Works in conjunction with updateOffer
    this.selectOffer(null);
  }

  resetOffer() {
    this.selectedOfferCopy = this.selectedOffer;
    this.selectOffer(this.selectedOfferCopy);
  }

  cancelChanges() {
    this.resetOffer();
    this.offerSelected = false;
  }
}
