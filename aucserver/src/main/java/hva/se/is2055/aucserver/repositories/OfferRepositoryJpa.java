package hva.se.is2055.aucserver.repositories;

import hva.se.is2055.aucserver.models.Offer;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class OfferRepositoryJpa implements OffersRepository {
    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Offer> findAll() {
        TypedQuery<Offer> query =
                this.entityManager.createQuery(
                        "select o from Offer o", Offer.class);
        return query.getResultList();
    }

    @Override
    public Offer findById(long id) {
        return entityManager.find(Offer.class, id);
    }

    @Override
    public Offer save(Offer offer) {
        return entityManager.merge(offer);
    }

    @Override
    public boolean deleteById(long id) {
        Offer offer = findById(id);
        if (offer != null) {
            entityManager.remove(offer);
            return true;
        } else return false;
    }
}
