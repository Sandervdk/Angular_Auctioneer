package hva.se.is2055.aucserver.rest;

import hva.se.is2055.aucserver.exceptions.ForbiddenException;
import hva.se.is2055.aucserver.exceptions.ResourceNotFoundException;
import hva.se.is2055.aucserver.models.Offer;
import hva.se.is2055.aucserver.repositories.OfferRepositoryJpa;
import hva.se.is2055.aucserver.repositories.OfferRepositoryMock;
import hva.se.is2055.aucserver.repositories.OffersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class OffersController {

    private final OffersRepository repository;

    @Autowired
    public OffersController(OfferRepositoryJpa repository) {
        this.repository = repository;
    }

    @GetMapping("/offers")
    public List<Offer> getAllOffers() {
        return repository.findAll();
    }

    @GetMapping("/offers/{id}")
    public Offer retrieveOffer(@PathVariable long id) {
        Offer offer = repository.findById(id);

        if (offer == null) {
            throw new ResourceNotFoundException("Not found offer with id-" + id);
        }

        return offer;
    }

    @PostMapping("/offers")
    public ResponseEntity<Offer> createOffer(@RequestBody Offer offer) {
        Offer savedOffer = repository.save(offer);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedOffer.getId()).toUri();

        return ResponseEntity.created(location).body(savedOffer);
    }

    @DeleteMapping("offers/{id}")
    public boolean deleteOffer(@PathVariable long id) {
        Offer offer = repository.findById(id);

        if (offer == null) {
            throw new ResourceNotFoundException("Not found offer with id-" + id);
        }

        return repository.deleteById(id);
    }

    @PutMapping("/offers/{id}")
    public Offer updateOffer(@PathVariable long id, @RequestBody Offer offer) {
        System.out.println(id);
        if (id == offer.getId()) {
            repository.deleteById(id);
            return repository.save(offer);
        } else throw new ForbiddenException("Offer " + offer.getId() + " does not match parameter " + id);
    }

}

