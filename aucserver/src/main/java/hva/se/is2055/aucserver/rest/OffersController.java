package hva.se.is2055.aucserver.rest;

import hva.se.is2055.aucserver.models.AuctionStatus;
import hva.se.is2055.aucserver.models.Offer;
import hva.se.is2055.aucserver.repositories.OfferRepositoryMock;
import hva.se.is2055.aucserver.repositories.OffersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

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

   @GetMapping("/offers/{id}")
    public Offer retrieveOffer(@PathVariable long id){
        Offer offer = repository.findById(id);

        if (offer == null) {
            throw new ResourceNotFoundException("Not found offer with id-" + id);
        }

        return offer;
    }

    @PostMapping("/offers")
    public ResponseEntity<Object> createOffer(@RequestBody Offer offer) {
        Offer savedOffer = repository.save(offer);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedOffer.getId()).toUri();

        return ResponseEntity.created(location).body(savedOffer);
    }

    @DeleteMapping("offers/{id}")
    public boolean deleteOffer(@PathVariable long id){
        Offer offer = repository.findById(id);

        if (offer == null) {
            throw new ResourceNotFoundException("Not found offer with id-" + id);
        }

        return repository.deleteById(id);
    }

    //TODO: finish this
    @PutMapping("/offers/{id}")
    public Offer updateOffer(@PathVariable long id, @RequestBody Offer offer){
        return null;
    }
}

