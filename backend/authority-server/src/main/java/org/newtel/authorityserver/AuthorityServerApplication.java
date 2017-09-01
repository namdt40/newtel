package org.newtel.authorityserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class AuthorityServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthorityServerApplication.class, args);
	}

	@RequestMapping("/")
	public String getAuthority() {
		return "Service authority";
	}
}
