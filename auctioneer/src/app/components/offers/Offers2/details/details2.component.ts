import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuctionStatus} from "../../../../models/auctionStatus";
import { Offer } from "../../../../models/offer";

@Component({
  selector: 'app-details2',
  templateUrl: './details2.component.html',
  styleUrls: ['./details2.component.css'],

})
export class Details2Component implements OnInit {
  @Input() offer: Offer;
  @Output() copyChange: EventEmitter<Offer> = new EventEmitter<Offer>();

  auctionStatus: AuctionStatus = AuctionStatus;

  constructor() {
  }

  ngOnInit() {
  }

  saveOffer() {
    this.copyChange.emit(this.offer);
  }

}
