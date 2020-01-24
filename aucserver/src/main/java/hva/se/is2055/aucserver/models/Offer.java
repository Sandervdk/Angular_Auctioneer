package hva.se.is2055.aucserver.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@NamedQueries({
        @NamedQuery(name="offer_find_by_status", query="select o from Offer o where o.status = ?1"),
        @NamedQuery(name="offer_find_by_title", query="select o from Offer o where o.title = ?1"),
        @NamedQuery(name="offer_find_by_minBidValue", query="select o from Offer o where o.valueHighestBid >= ?1")
})
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    private String description;

    private Date sellDate;

    @Enumerated(EnumType.STRING)
    private AuctionStatus status;

    private double valueHighestBid;

    private int numberOfBids;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "offer", cascade = CascadeType.MERGE)
    private List<Bid> bids = new ArrayList<>();

    protected Offer() {}

    public Offer(String title, String description, AuctionStatus status,
                 double valueHighestBid, int numberOfBids, Date sellDate) {
        super();
        this.title = title;
        this.description = description;
        this.sellDate = sellDate;
        this.status = status;
        this.valueHighestBid = valueHighestBid;
        this.numberOfBids = numberOfBids;
    }

    public Bid getLatestBid() {
        if (bids.size() > 0) {
            return this.bids.get(bids.size() - 1);
        }
        else return null;
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

    public AuctionStatus getStatus() {
        return status;
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

    public void setStatus(AuctionStatus status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Offer{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", status=" + status +
                ", valueHighestBid=" + valueHighestBid +
                ", numberOfBids=" + numberOfBids +
                ", sellDate=" + sellDate +
                '}';
    }
}
