import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OffersService} from "../../../../services/offers.service";
import {Offer} from "../../../../models/offer";
import {AuctionStatus} from "../../../../models/auctionStatus";

@Component({
  selector: 'app-details3',
  templateUrl: './details3.component.html',
  styleUrls: ['./details3.component.css']
})
export class Details3Component implements OnInit {
  @Input() offer: Offer;
  @Output() emitDelete: EventEmitter<Offer> = new EventEmitter<Offer>();
  @Output() emitChange: EventEmitter<Offer> = new EventEmitter<Offer>();
  auctionStatus = AuctionStatus;

  constructor(private offersService: OffersService) { }

  ngOnInit() {
  }

  saveOffer() {
    this.emitChange.emit(this.offer);
  }

  deleteOffer() {
    this.emitDelete.emit(this.offer);
  }

  clearOffer() {

  }
}
