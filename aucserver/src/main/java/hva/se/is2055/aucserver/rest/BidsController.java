package hva.se.is2055.aucserver.rest;

import hva.se.is2055.aucserver.exceptions.ForbiddenException;
import hva.se.is2055.aucserver.models.AuctionStatus;
import hva.se.is2055.aucserver.models.Bid;
import hva.se.is2055.aucserver.models.Offer;
import hva.se.is2055.aucserver.repositories.BidJpaRepository;
import hva.se.is2055.aucserver.repositories.OffersJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
public class BidsController {
    private final BidJpaRepository repository;
    private final OffersJpaRepository offersJpaRepository;

    @Autowired
    public BidsController(BidJpaRepository repository, OffersJpaRepository offersJpaRepository) {
        this.repository = repository;
        this.offersJpaRepository = offersJpaRepository;
    }

    @PostMapping("/offers/{id}/bids")
    public Offer addBids(@RequestBody Bid bid, @PathVariable long id) {
        Offer offer = offersJpaRepository.findById(id);

        if (offer.getValueHighestBid() > bid.getValue()) {
            throw new ForbiddenException("Bid with value=" + bid.getValue() + " does not beat latest bid" +
                    " on offerId=" + id);
        }

        if (offer.getStatus() != AuctionStatus.FOR_SALE) {
            throw new ForbiddenException("Bid is not open for new bids.");
        }
        bid.setOffer(offer);
        offer.addHigherBid(bid);
        repository.save(bid);
        return offer;
    }
}

