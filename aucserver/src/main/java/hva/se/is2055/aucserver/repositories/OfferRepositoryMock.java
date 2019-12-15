package hva.se.is2055.aucserver.repositories;

import hva.se.is2055.aucserver.models.AuctionStatus;
import hva.se.is2055.aucserver.models.Offer;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class OfferRepositoryMock implements OffersRepository {
    private static long startingId = 10000;
    private long currentId = startingId++;
    private List<Offer> offers;

    public OfferRepositoryMock() {
        Offer[] offerArray = new Offer[]{
                new Offer(currentId++, "Item 1", "Description", AuctionStatus.NEW, 50.22, 1, Date.valueOf(LocalDate.now())),
                new Offer(currentId++, "Item 2", "Description", AuctionStatus.CLOSED, 40.3, 3, Date.valueOf(LocalDate.now())),
                new Offer(currentId++, "Item 3", "Description", AuctionStatus.DELIVERED, 30.56, 2, Date.valueOf(LocalDate.now())),
                new Offer(currentId++, "Item 4", "Description", AuctionStatus.EXPIRED, 35.5, 8, Date.valueOf(LocalDate.now())),
                new Offer(currentId++, "Item 5", "Description", AuctionStatus.FOR_SALE, 2.50, 11, Date.valueOf(LocalDate.now())),
                new Offer(currentId++, "Item 6", "Description", AuctionStatus.PAID, 2.33, 7, Date.valueOf(LocalDate.now())),
                new Offer(currentId++, "Item 7", "Description", AuctionStatus.SOLD, 7.43, 3, Date.valueOf(LocalDate.now())),
                new Offer(currentId++, "Item 8", "Description", AuctionStatus.WITHDRAWN, 2.66, 4, Date.valueOf(LocalDate.now()))};
        this.offers = Arrays.stream(offerArray).collect(Collectors.toList());
    }

    @Override
    public List<Offer> findAll() {
        return offers;
    }

    @Override
    public Offer findById(long id) {
        for (Offer offer : offers) {
            if (offer.getId() == id) {
                return offer;
            }
        }
        return null;
    }

    @Override
    public Offer save(Offer offer) {
        if (offer.getId() == 0) {
            offer.setId(currentId++);
        }
        offers.add(offer);
        return offer;
    }

    @Override
    public boolean deleteById(long id) {
        for (Offer offer : offers) {
            if (offer.getId() == id) {
                offers.remove(offer);
                return true;
            }
        }
        return false;
    }
}
