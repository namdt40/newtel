package org.newtel.homecare;

import org.newtel.dataservice.Data;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class HomecareApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomecareApplication.class, args);
	}

	@RequestMapping("/")
	public Data getHelloMessage() {
		Data d = new Data();
		d.setVal("Hello Clinic Service");
		return d;
	}
}
