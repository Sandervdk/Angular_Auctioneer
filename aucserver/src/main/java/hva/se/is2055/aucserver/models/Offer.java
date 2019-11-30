package hva.se.is2055.aucserver.models;

import java.util.Date;

public class Offer {
    private String title;
    private String description;
    private Date sellDate;
    private AuctionStatus auctionStatus;
    private double valueHighestBid;
    private int numberOfBids;

    public Offer(String title, String description, Date sellDate,
                 AuctionStatus auctionStatus, double valueHighestBid, int numberOfBids) {
        this.title = title;
        this.description = description;
        this.sellDate = sellDate;
        this.auctionStatus = auctionStatus;
        this.valueHighestBid = valueHighestBid;
        this.numberOfBids = numberOfBids;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public Date getSellDate() {
        return sellDate;
    }

    public AuctionStatus getAuctionStatus() {
        return auctionStatus;
    }

    public double getValueHighestBid() {
        return valueHighestBid;
    }

    public int getNumberOfBids() {
        return numberOfBids;
    }
}
