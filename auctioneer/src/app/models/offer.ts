import { AuctionStatus } from "./auctionStatus";
import {log} from "util";

export class Offer {
  public id: number;
  public title: string;
  public description: string;
  public sellDate: Date;
  public auctionStatus: AuctionStatus;
  public valueHighestBid: number;
  public numberOfBids: number;

  constructor(id: number, title: string, description: string, auctionStatus: AuctionStatus,
              valueHighestBid: number, numberOfBids: number, sellDate: Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.auctionStatus = auctionStatus;
    this.valueHighestBid = valueHighestBid;
    this.numberOfBids = numberOfBids;
    this.sellDate = sellDate;
  }
}
