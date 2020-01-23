package hva.se.is2055.aucserver.security;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JWToken {
    private static final String JWT_ADMIN_CLAIM = "admin";

    private String email = null;
    private Long userId = null;
    private boolean admin = false;

    @Value("${jwt.issuer:MyOrganisation}")
    private String issuer;

    @Value("${jwt.pass-phrase}")
    private String passphrase;

    @Value("${jwt.expiration-seconds}")
    private int expiration;

    public String encode(long id, boolean admin) {
        Key key = getKey(passphrase);

        String token = Jwts.builder()
                .claim(Claims.SUBJECT, id)
                .claim(JWT_ADMIN_CLAIM, Boolean.toString(admin))
                .setIssuer(issuer)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration * 1000))
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();

        return token;
    }

    private static Key getKey(String passphrase) {
        byte hmacKey[] = passphrase.getBytes(StandardCharsets.UTF_8);
        Key key = new SecretKeySpec(hmacKey, SignatureAlgorithm.HS512.getJcaName());
        return key;
    }

    public JWToken decode(String token) {
        try {
            Key key = getKey(passphrase);
            Jws<Claims> jws = Jwts.parser().setSigningKey(key).parseClaimsJws(token);
            Claims claims = jws.getBody();

            JWToken jwToken = new JWToken();
            jwToken.setEmail(claims.get(Claims.SUBJECT).toString());
            String isAdminString = claims.get(JWT_ADMIN_CLAIM).toString();
            jwToken.setAdmin(Boolean.parseBoolean(isAdminString));

            return jwToken;

        } catch (ExpiredJwtException | MalformedJwtException |
                UnsupportedJwtException | IllegalArgumentException e) {
            return null;
        }
    }

    // Getters and Setters
    public static String getJwtAdminClaim() {
        return JWT_ADMIN_CLAIM;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    public String getIssuer() {
        return issuer;
    }

    public void setIssuer(String issuer) {
        this.issuer = issuer;
    }

    public String getPassphrase() {
        return passphrase;
    }

    public void setPassphrase(String passphrase) {
        this.passphrase = passphrase;
    }

    public int getExpiration() {
        return expiration;
    }

    public void setExpiration(int expiration) {
        this.expiration = expiration;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
