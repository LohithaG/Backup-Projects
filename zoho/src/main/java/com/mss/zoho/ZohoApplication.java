package com.mss.zoho;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class ZohoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZohoApplication.class, args);
	}

}
