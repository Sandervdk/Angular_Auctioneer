package hva.se.is2055.aucserver.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum AuctionStatus {
    @JsonProperty("New")
    NEW,

    @JsonProperty("For Sale")
    FOR_SALE,

    @JsonProperty("Sold")
    SOLD,

    @JsonProperty("Paid")
    PAID,

    @JsonProperty("Delivered")
    DELIVERED,

    @JsonProperty("Closed")
    CLOSED,

    @JsonProperty("Expired")
    EXPIRED,

    @JsonProperty("Withdrawn")
    WITHDRAWN
}
