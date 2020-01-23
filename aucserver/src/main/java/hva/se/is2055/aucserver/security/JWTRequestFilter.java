package hva.se.is2055.aucserver.security;

import hva.se.is2055.aucserver.exceptions.UnauthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Set;

@Component
public class JWTRequestFilter extends OncePerRequestFilter {

    private static final Set<String> SECURED_PATHS =
            Set.of("/offers", "/bids", "users");

    @Autowired
    private JWToken jwToken;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        String servletPath = request.getServletPath();

        if (HttpMethod.OPTIONS.matches(request.getMethod()) ||
                SECURED_PATHS.stream().noneMatch(servletPath::startsWith)) {
            filterChain.doFilter(request, response);
            return;
        }

        // get the encoded token string from the authorization request header
        String encodedToken = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (encodedToken == null) {
            // avoid giving clues to the caller (do not say that header is not present, for example)
            throw new UnauthorizedException("You need to log in first.");
        }

        // remove the bearer initial string
        encodedToken = encodedToken.replace("Bearer ", "");

        // get a representation of the token for future usage
        JWToken tokenInfo = jwToken.decode(encodedToken);

        // Future chain members might use token info (see the example that tries to delete a user)
        request.setAttribute("tokenInfo", tokenInfo);

        // continues the chain
        filterChain.doFilter(request, response);
    }
}
