package hva.se.is2055.aucserver.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum AuctionStatus {

    @JsonProperty("New")
    NEW("New"),

    @JsonProperty("For Sale")
    FOR_SALE("For Sale"),

    @JsonProperty("Sold")
    SOLD("Sold"),

    @JsonProperty("Paid")
    PAID("Paid"),

    @JsonProperty("Delivered")
    DELIVERED("Delivered"),

    @JsonProperty("Closed")
    CLOSED("Closed"),

    @JsonProperty("Expired")
    EXPIRED("Expired"),

    @JsonProperty("Withdrawn")
    WITHDRAWN("Withdrawn");

    private String name;

    AuctionStatus(String aNew) {
        this.name = aNew;
    }

    public String getName() {
        return name;
    }
}
