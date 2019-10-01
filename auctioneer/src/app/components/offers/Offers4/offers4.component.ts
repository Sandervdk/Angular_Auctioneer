import {Component, OnInit} from '@angular/core';
import {Offer} from "../../../models/offer";
import {OffersService} from "../../../services/offers.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-offers4',
  templateUrl: './offers4.component.html',
  styleUrls: ['./offers4.component.css']
})
export class Offers4Component implements OnInit {
  offers: Offer[] = [];

  constructor(private offersService: OffersService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.offers = this.offersService.offers;
  }

  selectOffer(offer: Offer): void {
    let index = this.offers.indexOf(offer);

    this.router.navigate(['edit'],{
      relativeTo: this.route,
      queryParams: {id: index}
    })
  }

  addRandomOffer() {
    let newOffer = this.offersService.addRandomOffer();
    this.offersService.add(newOffer);
    this.selectOffer(newOffer);
  }

}
