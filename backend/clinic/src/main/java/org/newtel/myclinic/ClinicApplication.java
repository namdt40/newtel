package org.newtel.myclinic;

import org.newtel.dataservice.models.Clinic;
import org.newtel.dataservice.service.IClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@ComponentScan(basePackages = {"org.newtel.dataservice"})
@SpringBootApplication
@RestController
@EnableMongoRepositories(basePackages = {"org.newtel.dataservice.repository"})
@EnableAutoConfiguration
public class ClinicApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClinicApplication.class, args);
	}

	@Autowired
	private IClinicService clinicService;

	@RequestMapping(value = "/findall", method = RequestMethod.GET)
	public Iterable<Clinic> findAll() {
		return this.clinicService.findAll();
	}


}
