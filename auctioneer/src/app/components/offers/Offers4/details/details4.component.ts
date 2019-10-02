import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Offer} from "../../../../models/offer";
import {Subscription} from "rxjs";
import {OffersService} from "../../../../services/offers.service";
import {AuctionStatus} from "../../../../models/auctionStatus";

@Component({
  selector: 'app-details4',
  templateUrl: './details4.component.html',
  styleUrls: ['./details4.component.css']
})
export class Details4Component implements OnInit, OnDestroy {
  auctionStatus = AuctionStatus;
  noChange: boolean = true;
  offers: Offer[];
  paramsSubscription: Subscription;
  index: number;
  offerCopy: Offer;
  offer: Offer;

  constructor(private route: ActivatedRoute, private router: Router,
              private offersService: OffersService) {
  }

  ngOnInit() {
    this.offers = this.offersService.offers;
    this.paramsSubscription = this.route.queryParams.subscribe((queryParams: Params) => {
      this.index = queryParams['id'];
      this.editOffer(this.index);
    })
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  private editOffer(index: number): void {
    if (!(index >= this.offers.length)) {
      this.noChange = true;
      this.offer = this.offersService.offers[index];
      this.offerCopy = {...this.offer};
      // If an index larger than the size of the offers array is typed into the URL, redirects back to /offers4
    } else this.router.navigate(['..'], {relativeTo: this.route});
  }

  saveOffer() {
    if (this.index != null) {
      this.offersService.update(this.index, this.offerCopy);
      this.reroute();
    } else {
      // If index == null, offer is a new instance and therefore pushed onto the array
      this.offersService.add(this.offerCopy);
      this.reroute();
    }
  }

  deleteOffer() {
    if (this.alertUnsavedChanges()) {
      this.offersService.remove(this.index);
      this.reroute();
    }
  }

  clearOffer() {
    // Used to clear the form to make a new offer
    if (this.alertUnsavedChanges()) {
      this.index = null;
      this.offer = {
        title: null, sellDate: null, numberOfBids: null,
        valueHighestBid: null, auctionStatus: null, description: null
      };
      this.offerCopy = {...this.offer};
    }
  }

  resetOffer() {
    if (this.alertUnsavedChanges()) {
      this.noChange = true;
      this.offerCopy = {...this.offer};
    }
  }

  cancelChanges() {
    if (this.alertUnsavedChanges()) {
      this.noChange = true;
      this.offerCopy = {...this.offer};
      this.reroute();
    }
  }

  private reroute() {
    this.router.navigate(['../'], {
      relativeTo: this.route
    })
  }

  private alertUnsavedChanges(): boolean {
    let offerChanged: boolean = true;
    //checks every variable of the offer and compares it to the copy version for any change
    if (this.offerCopy.title !== this.offer.title ||
      this.offerCopy.valueHighestBid !== this.offer.valueHighestBid ||
      this.offerCopy.numberOfBids !== this.offer.numberOfBids ||
      this.offerCopy.auctionStatus !== this.offer.auctionStatus ||
      this.offerCopy.sellDate !== this.offer.sellDate ||
      this.offerCopy.description !== this.offer.description) {
      offerChanged = confirm("Are you sure you want to discard your changes?");
    }
    return offerChanged;
  }

}
