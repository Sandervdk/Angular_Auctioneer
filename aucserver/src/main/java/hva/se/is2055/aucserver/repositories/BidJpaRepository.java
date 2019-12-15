package hva.se.is2055.aucserver.repositories;

import hva.se.is2055.aucserver.models.Bid;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class BidJpaRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Bid> findAll() {
        TypedQuery<Bid> find_all_offers = entityManager.createQuery("SELECT o FROM Bid o", Bid.class);
        return find_all_offers.getResultList();    }

    public Bid findById(long id) {
        return entityManager.find(Bid.class, id);
    }

    public Bid save(Bid bid) {
        entityManager.merge(bid);
        return bid;
    }

    public boolean deleteById(long id) {
        entityManager.remove(this.findById(id));
        return this.findById(id) == null;
    }
}
