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
  @Output() emitCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitReset: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitClear: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitChange: EventEmitter<Offer> = new EventEmitter<Offer>();
  auctionStatus = AuctionStatus;
  noChange: boolean = true;

  constructor(private offersService: OffersService) { }

  ngOnInit() {
  }

  saveOffer() {
    this.emitChange.emit(this.offer);
  }

  deleteOffer() {
    this.emitDelete.emit(null);
  }

  clearOffer() {
    this.noChange = false;
    this.emitClear.emit(null);
  }

  resetOffer() {
    this.noChange = true;
    this.emitReset.emit(null);
  }

  cancelChanges() {
    this.emitCancel.emit(null);
  }
}
