import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-offerslist',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  selectOffer(offer: String): void {
    // let index = this.offers.indexOf(offer);

    this.router.navigate([offer], {
      relativeTo: this.route
    })
  }

}
