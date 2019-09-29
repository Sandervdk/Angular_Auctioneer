import {Component, OnInit} from '@angular/core';
import {Offer} from "../../../models/offer";
import {OffersService} from "../../../services/offers.service";

@Component({
  selector: 'app-offers4',
  templateUrl: './offers4.component.html',
  styleUrls: ['./offers4.component.css']
})
export class Offers4Component implements OnInit {
  offers: Offer[] = [];
  offerSelected: boolean;
  selectedOffer: Offer;
  selectedOfferCopy: Offer;
  offerChanged: boolean;

  constructor(private offersService: OffersService) {
  }

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
    if (this.alertUnsavedChanges()) {
      // Removes the selected offer and hides details from view
      let index = this.offers.indexOf(this.selectedOffer);
      this.offersService.remove(index);
      this.offerSelected = false;
    }
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
    if (this.alertUnsavedChanges()) {
      this.selectOffer(null);
    }
  }

  resetOffer() {
    if (this.alertUnsavedChanges()) {
      this.selectedOfferCopy = this.selectedOffer;
      this.selectOffer(this.selectedOfferCopy);
    }
  }

  cancelChanges() {
    if (this.alertUnsavedChanges()) {
      this.resetOffer();
      this.offerSelected = false;
    }
  }


  alertUnsavedChanges(): boolean {
    let offerChanged: boolean = true;
    //checks every variable of the offer and compares it to the copy version for any change
    if (this.selectedOffer.title !== this.selectedOfferCopy.title ||
      this.selectedOffer.valueHighestBid !== this.selectedOfferCopy.valueHighestBid ||
      this.selectedOffer.numberOfBids !== this.selectedOfferCopy.numberOfBids ||
      this.selectedOffer.auctionStatus !== this.selectedOfferCopy.auctionStatus ||
      this.selectedOffer.sellDate !== this.selectedOfferCopy.sellDate ||
      this.selectedOffer.description !== this.selectedOfferCopy.description) {
      offerChanged = confirm("Are you sure you want to discard your changes?");
    }
    return offerChanged;
  }
}
