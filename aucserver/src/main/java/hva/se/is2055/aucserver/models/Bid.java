package hva.se.is2055.aucserver.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private double value;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JsonIgnore
    private Offer offer;

    public Bid() {}

    public Bid(double value) {
        super();
        this.value = value;
    }

    public Offer getOffer() {
        return offer;
    }

    public void setOffer(Offer offer) {
        this.offer = offer;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Bid{" +
                "id=" + id +
                ", value=" + value +
                '}';
    }
}
