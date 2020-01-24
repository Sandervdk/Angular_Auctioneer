package hva.se.is2055.aucserver.repositories;

import hva.se.is2055.aucserver.models.Offer;
import hva.se.is2055.aucserver.models.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class UserJpaRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public List<User> findAll() {
        TypedQuery<User> find_all_users = entityManager.createQuery("SELECT o FROM User o", User.class);
        return find_all_users.getResultList();
    }

    public User findById(long id) {
        return entityManager.find(User.class, id);
    }

    public User findByEmail(String email) {
        return entityManager.createQuery("Select u FROM User u WHERE u.email = \'" + email + "\'", User.class).getResultList().get(0);
    }

    public User save(User user) {
        entityManager.merge(user);
        if (!entityManager.contains(user)) {
            entityManager.persist(user);
        }
        return user;
    }

    public boolean deleteById(long id) {
        entityManager.remove(this.findById(id));
        return this.findById(id) == null;
    }
}
