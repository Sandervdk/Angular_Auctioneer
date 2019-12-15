package hva.se.is2055.aucserver.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Offer {

    @Id
    @GeneratedValue
    private long id;

    private String title;
    private String description;
    private Date sellDate;
    private AuctionStatus auctionStatus;
    private double valueHighestBid;
    private int numberOfBids;

    protected Offer() {}

    public Offer(long id, String title, String description, AuctionStatus auctionStatus,
                 double valueHighestBid, int numberOfBids, Date sellDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.sellDate = sellDate;
        this.auctionStatus = auctionStatus;
        this.valueHighestBid = valueHighestBid;
        this.numberOfBids = numberOfBids;
    }

    public Offer(String title, String description, AuctionStatus auctionStatus,
                 double valueHighestBid, int numberOfBids, Date sellDate) {
        this.title = title;
        this.description = description;
        this.sellDate = sellDate;
        this.auctionStatus = auctionStatus;
        this.valueHighestBid = valueHighestBid;
        this.numberOfBids = numberOfBids;
    }

    public static Offer createRandomOffer() {
        String title = "Item " + Math.round((Math.random() * 1000));
        String description = "A description";
        Date sellDate = new Date();
        AuctionStatus auctionStatus = null;
        double valueHighestBid;
        int numberOfBids;

        valueHighestBid = Math.round((Math.random() * 2500)) /100.00;
        numberOfBids = (int) Math.round(Math.random() * 20);

        switch ((int) Math.round(Math.random() * 7)) {
            case 0: auctionStatus = AuctionStatus.CLOSED; break;
            case 1: auctionStatus = AuctionStatus.DELIVERED; break;
            case 2: auctionStatus = AuctionStatus.EXPIRED; break;
            case 3: auctionStatus = AuctionStatus.FOR_SALE; break;
            case 4: auctionStatus = AuctionStatus.NEW; break;
            case 5: auctionStatus = AuctionStatus.PAID; break;
            case 6: auctionStatus = AuctionStatus.SOLD; break;
            case 7: auctionStatus = AuctionStatus.WITHDRAWN; break;
        }

        return new Offer(title, description, auctionStatus, valueHighestBid, numberOfBids, sellDate);
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
