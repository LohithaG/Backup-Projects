package com.mbb.mbbplatform.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.web.firewall.StrictHttpFirewall;

import com.mbb.mbbplatform.common.CORSFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authenticationProvider());
	}

	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(userDetailsService);
		authProvider.setPasswordEncoder(bCryptPasswordEncoder());
		return authProvider;
	}
	
	@Bean
	public HttpFirewall allowUrlEncodedSlashHttpFirewall() {
	    StrictHttpFirewall firewall = new StrictHttpFirewall();
	    firewall.setAllowUrlEncodedSlash(true);    
	    return firewall;
	}
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.cors().and().authorizeRequests()
				.antMatchers("/api/users/**", "/mbb/inventory/**", "/mbb/inventoryItem/**", "/mbb/dispatch/**")
				.hasAnyAuthority("DISPATCHER", "INVENTORY_MANAG", "ADMIN", "ACCOUNTANT", "ACCOUNTANT_MANAG",
						"RETURN_MANAG", "PRODUCT_VERIFIER", "SUPERADMIN","SERVICE MANAGER")
				.anyRequest().authenticated().and().httpBasic().realmName("ddr")
				.authenticationEntryPoint(getBasicAuthEntryPoint()).and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
				.addFilterAfter(new CORSFilter(), BasicAuthenticationFilter.class).csrf().disable();

	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/api/users/registerUser", "/api/users/setPassword/**",
				"/api/users/forgotPassword/**", "/api/inventory/**", "/hello/**", "/mbb/zepoSRShipmentsTracking/**");
		web.httpFirewall(allowUrlEncodedSlashHttpFirewall());
	}

	@Bean
	public CustomAuthenticationEntryPoint getBasicAuthEntryPoint() {
		return new CustomAuthenticationEntryPoint();
	}
}
