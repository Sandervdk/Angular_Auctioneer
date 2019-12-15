package hva.se.is2055.aucserver;

import hva.se.is2055.aucserver.models.Offer;
import hva.se.is2055.aucserver.repositories.OfferRepositoryJpa;
import hva.se.is2055.aucserver.repositories.OffersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.transaction.Transactional;
import java.util.List;

@SpringBootApplication
public class AucserverApplication implements CommandLineRunner {

    @Autowired
    OfferRepositoryJpa offersRepository;

    public static void main(String[] args) {
        SpringApplication.run(AucserverApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer configurer(){
        return new WebMvcConfigurer(){
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/*")
                        .allowedOrigins("http://localhost:4200");
            }
        };
    }

    @Override
    public void run(String... args) throws Exception {
        createInitialOffers();
    }

    @Transactional
    protected void createInitialOffers() {
        List<Offer> offers = this.offersRepository.findAll();
        if (offers.size() > 0) return;
        System.out.println("Configuring some initial offer data");

        for (int i = 0; i < 4; i++) {
            Offer offer = this.offersRepository.save(Offer.createRandomOffer());
        }
    }
}
