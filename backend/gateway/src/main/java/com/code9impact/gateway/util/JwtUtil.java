package com.code9impact.gateway.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtUtil{

    private static final String SECRET_KEY = "sZfr+fU1dGH2gfpy8NTyaH0ieMPoo+b8dds0tepgG6QbNEfQ74wOopYIGDDlROwIMe6uhie+y37fWSjn1rkBdZIdEkOrX8JfqNIJ50MObU6HjnTXWiVYJ9QmaHUq5ljz/5vUT2EyT/lUHv/u9ZHewAWW+kFZoZPAYGwI6fsIuAtkSBOHRgjzqT+/OQpXchd1Y0kfu1kHNoubvfGZd9MQw4UccQkG+sHGK4NlL9YYKNALEBB8bCm4pPOs3R6Uua+cZy970UTXf2oeM9lqqV7VBAKF9sVqpHsKGMsTa7vPX0nrnwW2ewD0s5GpiQ1yKdHUSkhxm4VX7RwMSFq+tXjs6931n99St2S7Ya1yDySpKrk=";



    public void validateToken(final String token) {
        Jwts.parserBuilder().setSigningKey(getSignInKey()).build().parseClaimsJws(token);
    }


    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
