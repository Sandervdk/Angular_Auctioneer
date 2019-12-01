package hva.se.is2055.aucserver.rest;

import hva.se.is2055.aucserver.models.AuctionStatus;
import hva.se.is2055.aucserver.models.Offer;
import hva.se.is2055.aucserver.repositories.OfferRepositoryMock;
import hva.se.is2055.aucserver.repositories.OffersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@RestController
public class OffersController {

    private final OfferRepositoryMock repository;

    @Autowired
    public OffersController(OfferRepositoryMock repository) {
        this.repository = repository;
    }

    @GetMapping("/offers")
    public List<Offer> getAllOffers() {
        return repository.findAll();
    }
}

