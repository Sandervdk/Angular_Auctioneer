package hva.se.is2055.aucserver.repositories;

import hva.se.is2055.aucserver.models.Offer;

import java.util.List;

public interface OffersRepository {

    // Used object instead of object... since I couldn't get it to work otherwise
    List<Offer> findByQuery(String jpqlName, Object param);

    List<Offer> findAll();

    Offer findById(long id);

    Offer save(Offer offer);

    boolean deleteById(long id);
}
