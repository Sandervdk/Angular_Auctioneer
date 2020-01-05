package hva.se.is2055.aucserver.rest;

import hva.se.is2055.aucserver.exceptions.ForbiddenException;
import hva.se.is2055.aucserver.exceptions.ResourceNotFoundException;
import hva.se.is2055.aucserver.models.AuctionStatus;
import hva.se.is2055.aucserver.models.Offer;
import hva.se.is2055.aucserver.repositories.OffersJpaRepository;
import javassist.tools.web.BadHttpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
public class OffersController {

    private final OffersJpaRepository repository;

    @Autowired
    public OffersController(OffersJpaRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/offers")
    public List<Offer> getAllOffers(@RequestParam(required = false) Map<String, String> allParams) {
        if (allParams.isEmpty()) {
            // If no params present, returns all
            return repository.findAll();
        } else {
            if (allParams.size() > 1) {
                // If more than one param is present, throws this error
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "Can only handle one request parameter filter=, status= or minBidValue=");
            } else if (allParams.containsKey("status")) {
                for (AuctionStatus a : AuctionStatus.values()) {
                    if (a.getName().equals(allParams.get("status"))) {
                        // Returns offers with matching auction status
                        return repository.findByQuery("offer_find_by_status", a);
                    }
                }
                // Error is thrown if AuctionStatus param doesn't match enum
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                        "status=" + allParams.get("status") + " is not a valid auction status value");
            } else if (allParams.containsKey("title")) {
                // Only works if the name is exactly the same within the params, not "substring" as the assignment
                return repository.findByQuery("offer_find_by_title", allParams.get("title"));
            } else if (allParams.containsKey("minBidValue")) {
                // Returns offers with highest bid of a value of at least the param's value
                return repository.findByQuery("offer_find_by_minBidValue",
                        Double.parseDouble(allParams.get("minBidValue")));
            } return null;
        }
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

