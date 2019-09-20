package com.mss.ship;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)

public class AuthenticationToken {


		// TODO Auto-generated method stub
		 @JsonProperty(value = "access_token")
		    String token;

		public String getToken() {
			return token;
		}

		public void setToken(String token) {
			this.token = token;
		}

		
	}


