package hva.se.is2055.aucserver;

import hva.se.is2055.aucserver.models.AuctionStatus;
import hva.se.is2055.aucserver.models.Bid;
import hva.se.is2055.aucserver.models.Offer;
import hva.se.is2055.aucserver.models.User;
import hva.se.is2055.aucserver.repositories.BidJpaRepository;
import hva.se.is2055.aucserver.repositories.OffersJpaRepository;
import hva.se.is2055.aucserver.repositories.UserJpaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@SpringBootApplication
public class AucserverApplication implements CommandLineRunner {

    @Autowired
    OffersJpaRepository offerRepository;

    @Autowired
    UserJpaRepository userRepository;

    @Autowired
    BidJpaRepository bidRepository;

    public static void main(String[] args) {
        SpringApplication.run(AucserverApplication.class, args);
    }

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Override
    public void run(String... args) throws Exception {
        logger.info("Insert Offer 1 -> {}", offerRepository.save(new Offer("Round Table", "Table that might be an oval", AuctionStatus.FOR_SALE, 23.5, 4, new Date())));
        logger.info("Insert Offer 2 -> {}", offerRepository.save(new Offer("Square coca cola bottle", "Its a square coca cola bottle, what do you expect,", AuctionStatus.SOLD, 9968.35, 35, new Date())));
        logger.info("Insert Offer 3 -> {}", offerRepository.save(new Offer("Stone Frisbee", "ancient frisbee, made in 2005", AuctionStatus.FOR_SALE, 56, 69, new Date())));
        logger.info("Insert Offer 4-> {}", offerRepository.save(new Offer("offer", "descr", AuctionStatus.CLOSED, 2.0, 2, new Date())));

        offerRepository.addReviews();

        logger.info("user id 1 -> {}", offerRepository.findById(1).getTitle() + " - " + offerRepository.findById(1).getId());
        logger.info("User id 4 -> {}", offerRepository.findById(4).getTitle() + " - " + offerRepository.findById(4).getId());

        logger.info("All users -> {}", offerRepository.findAll());
        logger.info("Insert new user -> {}", userRepository.save(new User("Sir mech", "mechanic@klm.nl", "welkom123", false)));
    }

    private void addBidsToOffers(Offer offer) {

    }

    @Bean
    public WebMvcConfigurer configurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowCredentials(true)
                        .allowedHeaders(HttpHeaders.AUTHORIZATION, HttpHeaders.CONTENT_TYPE)
                        .exposedHeaders(HttpHeaders.AUTHORIZATION, HttpHeaders.CONTENT_TYPE)
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedOrigins("http://localhost:4200");
            }
        };
    }

}
