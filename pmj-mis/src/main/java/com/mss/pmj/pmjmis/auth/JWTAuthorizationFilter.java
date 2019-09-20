package com.mss.pmj.pmjmis.auth;

import static com.mss.pmj.pmjmis.auth.SecurityConstants.HEADER_STRING;
import static com.mss.pmj.pmjmis.auth.SecurityConstants.SECRET;
import static com.mss.pmj.pmjmis.auth.SecurityConstants.TOKEN_PREFIX;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import io.jsonwebtoken.Jwts;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

	public JWTAuthorizationFilter(AuthenticationManager authManager) {
		super(authManager);
	}

	@Override
	protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
			throws IOException, ServletException {

	try {
			String header = req.getHeader(HEADER_STRING);

			if (header == null || !header.startsWith(TOKEN_PREFIX)) {

				chain.doFilter(req, res);

			} else {
				UsernamePasswordAuthenticationToken authentication = getAuthentication(req);
				if (authentication != null) {
					SecurityContextHolder.getContext().setAuthentication(authentication);
					chain.doFilter(req, res);
				} else {
					chain.doFilter(req, res);
				}
			}
		} catch (Exception e) {
			res.setStatus(302);
		}

	}

	private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {

		String token = request.getHeader(HEADER_STRING);
		if (token != null) {

			// parse the token.
			String user = Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token.replace(TOKEN_PREFIX, "")).getBody()
					.getSubject();
			if (user != null) {
				return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
			}
			return null;
		}
		return null;

	}

}