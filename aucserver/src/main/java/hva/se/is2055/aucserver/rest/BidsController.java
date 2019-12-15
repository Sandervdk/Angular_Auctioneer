package hva.se.is2055.aucserver.rest;

import hva.se.is2055.aucserver.models.Bid;
import hva.se.is2055.aucserver.repositories.BidJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
public class BidsController {
    private final BidJpaRepository repository;

    @Autowired
    public BidsController(BidJpaRepository repository) {this.repository = repository;}

    @PostMapping("/offers/{id}/bids")
    public ResponseEntity<Bid> addBisd(@RequestBody Bid bid) {
        System.out.println(bid);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(1).toUri();
        System.out.println(location +" - " + "LOCATION");
        return null;
    }

}

