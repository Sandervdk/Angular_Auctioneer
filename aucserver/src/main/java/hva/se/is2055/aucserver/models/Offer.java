package hva.se.is2055.aucserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;
    private String description;
    @Enumerated(EnumType.STRING)
    private AuctionStatus auctionStatus;
    private double valueHighestBid;
    private int numberOfBids;
    private Date sellDate;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "offer")
    private List<Bid> bids = new ArrayList<>();

    protected Offer() {}

    public Offer(String title, String description, AuctionStatus auctionStatus,
                 double valueHighestBid, int numberOfBids, Date sellDate) {
        super();
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

    public Bid getLatestBid() {
        return this.bids.get(bids.size() - 1);
    }

    public boolean addHigherBid(Bid newBid) {
        double bidPrice = newBid.getValue();
        for (Bid placedBids: bids) {
            if (placedBids.getValue() > bidPrice) {
                return false;
            }
        }
        bids.add(newBid);
        this.valueHighestBid = newBid.getValue();
        this.numberOfBids = bids.size();
        return true;
    }

    public List<Bid> getBids() {
        return bids;
    }

    public void addBid(Bid bid) {
        bids.add(bid);
    }

    public void removeBid(Bid bid) {
        bids.remove(bid);
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
        return this.bids.size();
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

    @Override
    public String toString() {
        return "Offer{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", auctionStatus=" + auctionStatus +
                ", valueHighestBid=" + valueHighestBid +
                ", numberOfBids=" + numberOfBids +
                ", sellDate=" + sellDate +
                '}';
    }
}
