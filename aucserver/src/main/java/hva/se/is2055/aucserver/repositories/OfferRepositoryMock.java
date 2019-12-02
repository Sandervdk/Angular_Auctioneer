package hva.se.is2055.aucserver.repositories;

import hva.se.is2055.aucserver.models.AuctionStatus;
import hva.se.is2055.aucserver.models.Offer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class OfferRepositoryMock implements OffersRepository {
    private List<Offer> offers;

    public OfferRepositoryMock() {
        Offer[] offerArray = new Offer[]{
                new Offer("Item 1", "Description", Date.valueOf(LocalDate.now()), AuctionStatus.NEW, 50.22, 1),
                new Offer("Item 2", "Description", Date.valueOf(LocalDate.now()), AuctionStatus.CLOSED, 40.3, 3),
                new Offer("Item 3", "Description", Date.valueOf(LocalDate.now()), AuctionStatus.DELIVERED, 30.56, 2),
                new Offer("Item 4", "Description", Date.valueOf(LocalDate.now()), AuctionStatus.EXPIRED, 35.5, 8),
                new Offer("Item 5", "Description", Date.valueOf(LocalDate.now()), AuctionStatus.FOR_SALE, 2.50, 11),
                new Offer("Item 6", "Description", Date.valueOf(LocalDate.now()), AuctionStatus.PAID, 2.33, 7),
                new Offer("Item 7", "Description", Date.valueOf(LocalDate.now()), AuctionStatus.SOLD, 7.43, 3),
                new Offer("Item 8", "Description", Date.valueOf(LocalDate.now()), AuctionStatus.WITHDRAWN, 2.66, 4),};
        this.offers = Arrays.stream(offerArray).collect(Collectors.toList());
    }

    @Override
    public List<Offer> findAll() {
        return offers;
    }
}
