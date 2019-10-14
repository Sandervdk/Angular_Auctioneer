import {Component, OnInit} from '@angular/core';
import {Offer} from "../../../models/offer";
import {OffersService} from "../../../services/offers.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Offers2Service} from "../../../services/offers2.service";

@Component({
  selector: 'app-offers6',
  templateUrl: './offers6.component.html',
  styleUrls: ['./offers6.component.css']
})
export class Offers6Component implements OnInit {
  offers: any = [];

  constructor(private offersService: Offers2Service,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    // this.offers = this.offersService.offers;

    this.offersService.getAllOffers()
      .subscribe(
        (offers) => {
          this.offers = offers;
        }
      )
  }

  selectOffer(index: number): void {
    // let index = this.offers.indexOf(offer);
    this.offersService.setOffers(this.offers);

    this.router.navigate(['edit'],{
      relativeTo: this.route,
      queryParams: {id: index}
    })
  }

  addRandomOffer() {
    let newOffer = this.offersService.addRandomOffer();
    this.offersService.add(newOffer);
    this.selectOffer(this.offers.indexOf(newOffer));
  }

}
