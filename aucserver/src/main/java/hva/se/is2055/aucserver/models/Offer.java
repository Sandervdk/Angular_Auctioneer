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
