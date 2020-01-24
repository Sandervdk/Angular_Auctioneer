package hva.se.is2055.aucserver.repositories;

import hva.se.is2055.aucserver.models.AuctionStatus;
import hva.se.is2055.aucserver.models.Bid;
import hva.se.is2055.aucserver.models.Offer;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class OffersJpaRepository implements OffersRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Offer> findByQuery(String jpqlName, Object param) {
        TypedQuery<Offer> query = entityManager.createNamedQuery(jpqlName, Offer.class)
                .setParameter(1, param);
        return query.getResultList();
    }

    @Override
    public List<Offer> findAll() {
        TypedQuery<Offer> find_all_offers = entityManager.createQuery("SELECT o FROM Offer o", Offer.class);
        return find_all_offers.getResultList();
    }

    @Override
    public Offer findById(long id) {
        return entityManager.find(Offer.class, id);
    }

    @Override
    public Offer save(Offer e) {
        entityManager.merge(e);
        return e;
    }

    @Override
    public boolean deleteById(long id) {
        Offer deletedOffer = this.findById(id);
        if (deletedOffer != null) {
            entityManager.remove(deletedOffer);
        }
        return this.findById(id) == null;
    }

    public void addReviews() {
        Bid bid1 = new Bid(20);
        Bid bid2 = new Bid(25);
        Bid bid3 = new Bid(30);
        Bid bid4 = new Bid(15);

        //adds the offer to the bids
        Offer offer = findById(1);
        bid1.setOffer(offer);
        bid2.setOffer(offer);
        bid3.setOffer(offer);
        bid4.setOffer(offer);

        //adds the bids to the offer
        offer.addHigherBid(bid1);
        offer.addHigherBid(bid2);
        offer.addHigherBid(bid3);
        offer.addHigherBid(bid4);

        //Adds every bid that has been made properly
        for (Bid bid : offer.getBids()) {
            entityManager.persist(bid);
        }
    }


//    public OffersJpaRepository() {
//        Offer[] offerArray = new Offer[]{
//                new Offer("Item 1", "Description", AuctionStatus.NEW, 50.22, 1, Date.valueOf(LocalDate.now())),
//                new Offer("Item 2", "Description", AuctionStatus.CLOSED, 40.3, 3, Date.valueOf(LocalDate.now())),
//                new Offer("Item 3", "Description", AuctionStatus.DELIVERED, 30.56, 2, Date.valueOf(LocalDate.now())),
//                new Offer("Item 4", "Description", AuctionStatus.EXPIRED, 35.5, 8, Date.valueOf(LocalDate.now())),
//                new Offer("Item 5", "Description", AuctionStatus.FOR_SALE, 2.50, 11, Date.valueOf(LocalDate.now())),
//                new Offer("Item 6", "Description", AuctionStatus.PAID, 2.33, 7, Date.valueOf(LocalDate.now())),
//                new Offer("Item 7", "Description", AuctionStatus.SOLD, 7.43, 3, Date.valueOf(LocalDate.now())),
//                new Offer("Item 8", "Description", AuctionStatus.WITHDRAWN, 2.66, 4, Date.valueOf(LocalDate.now()))};
//        this.offers = Arrays.stream(offerArray).collect(Collectors.toList());
//    }
//
//    @Override
//    public List<Offer> findAll() {
//        return offers;
//    }
//
//    @Override
//    public Offer findById(long id) {
//        return entityManager.find(Offer.class, id);
//    }
//
//    @Override
//    public Offer save(Offer offer) {
//        if (offer.getId() == 0) {
//            offer.setId(currentId++);
//        }
//        offers.add(offer);
//        return offer;
//    }
//
//    @Override
//    public boolean deleteById(long id) {
//        for (Offer offer : offers) {
//            if (offer.getId() == id) {
//                offers.remove(offer);
//                return true;
//            }
//        }
//        return false;
//    }
}
