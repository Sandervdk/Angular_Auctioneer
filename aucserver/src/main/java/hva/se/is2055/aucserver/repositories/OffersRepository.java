package hva.se.is2055.aucserver.repositories;

import hva.se.is2055.aucserver.models.Offer;

import java.util.List;

public interface OffersRepository {

    List<Offer> findAll();

    Offer findById(long id);

    Offer save(Offer offer);

    boolean deleteById(long id);
}
