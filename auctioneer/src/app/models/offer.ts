import { AuctionStatus } from "./auctionStatus";

export class Offer {
  public title: string;
  public description: string;
  public sellDate: Date;
  public auctionStatus: AuctionStatus;
  public valueHighestBid: number;
  public numberOfBids: number;

  constructor(title: string, description: string, auctionStatus: AuctionStatus,
              valueHighestBid: number, numberOfBids: number, sellDate: Date) {
    this.title = title;
    this.description = description;
    this.auctionStatus = auctionStatus;
    this.valueHighestBid = valueHighestBid;
    this.numberOfBids = numberOfBids;
    this.sellDate = sellDate;
  }
}
