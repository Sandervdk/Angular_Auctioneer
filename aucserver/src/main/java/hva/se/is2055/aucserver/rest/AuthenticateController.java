package hva.se.is2055.aucserver.rest;

import com.fasterxml.jackson.databind.node.ObjectNode;
import hva.se.is2055.aucserver.exceptions.UnauthorizedException;
import hva.se.is2055.aucserver.models.User;
import hva.se.is2055.aucserver.repositories.UserJpaRepository;
import hva.se.is2055.aucserver.security.JWToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/authenticate")
public class AuthenticateController {

    private final UserJpaRepository repository;

    private JWToken tokenGenerator;

    @Autowired
    private AuthenticateController(UserJpaRepository repository, JWToken tokenGenerator) {
        this.repository = repository;
        this.tokenGenerator = tokenGenerator;
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody ObjectNode loginDetails) {
        String email = loginDetails.get("email").asText();
        String password = loginDetails.get("password").asText();

        if (email != null) {
            String name = email.substring(0, email.indexOf("@"));
            if (email.startsWith(password)) {
                User user = repository.save(new User(name, email, password, false));

                return ResponseEntity.accepted()
                        .header(HttpHeaders.AUTHORIZATION, "Bearer " +
                                tokenGenerator.encode(user.getId(), user.isAdmin()))
                        .body(user);
            } else {
                throw new UnauthorizedException("Cannot authenticate user by email=" + email
                        + " and password=" + password);
            }
        }
        return null;
    }
}
