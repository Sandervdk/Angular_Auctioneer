package hva.se.is2055.aucserver.models;

import java.util.Date;

public class Offer {
    private long id;
    private String title;
    private String description;
    private Date sellDate;
    private AuctionStatus auctionStatus;
    private double valueHighestBid;
    private int numberOfBids;

    protected Offer() {
    }

    public Offer(long id, String title, String description, Date sellDate,
                 AuctionStatus auctionStatus, double valueHighestBid, int numberOfBids) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.sellDate = sellDate;
        this.auctionStatus = auctionStatus;
        this.valueHighestBid = valueHighestBid;
        this.numberOfBids = numberOfBids;
    }

    //Getters
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

    public long getId() {
        return id;
    }

    // Setters


    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setSellDate(Date sellDate) {
        this.sellDate = sellDate;
    }

    public void setAuctionStatus(AuctionStatus auctionStatus) {
        this.auctionStatus = auctionStatus;
    }

    public void setValueHighestBid(double valueHighestBid) {
        this.valueHighestBid = valueHighestBid;
    }

    public void setNumberOfBids(int numberOfBids) {
        this.numberOfBids = numberOfBids;
    }
}
