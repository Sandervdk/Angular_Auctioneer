class Offer {
  public title: string;
  public description: string;
  public sellDate: Date;
  public auctionStatus: AuctionStatus;
  public valueHighestBid: number;
  public numberOBids: number;

  constructor(title: string, description: string, auctionStatus: AuctionStatus,
              valueHighestBid: number, numberOfBids: number, selldate: Date) {
    this.title = title;
    this.description = description;
    this.auctionStatus = auctionStatus;
    this.valueHighestBid = valueHighestBid;
    this.numberOBids = numberOfBids;
    this.sellDate = selldate;
  }

}
