package org.newtel.emr;

import org.newtel.dataservice.Data;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class EmrApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmrApplication.class, args);
	}

	@RequestMapping("/")
	public Data getHelloMessage() {
		Data d = new Data();
		d.setVal("Hello Clinic Service");
		return d;
	}
}
