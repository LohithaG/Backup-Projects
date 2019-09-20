package com.mss.pmj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class PmjFilesApplication {

	public static void main(String[] args) {
		SpringApplication.run(PmjFilesApplication.class, args);
	}

}
