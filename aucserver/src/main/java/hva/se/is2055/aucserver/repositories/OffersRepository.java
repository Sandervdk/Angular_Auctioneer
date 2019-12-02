package hva.se.is2055.aucserver.repositories;

import hva.se.is2055.aucserver.models.Offer;

import java.util.List;

public interface OffersRepository {

   List<Offer> findAll();
}
