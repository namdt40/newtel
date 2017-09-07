package org.newtel.dataservice;

import org.newtel.dataservice.models.Clinic;
import org.newtel.dataservice.service.IClinicService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DataserviceApplication {

	private  static Logger log = LoggerFactory.getLogger(DataserviceApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(DataserviceApplication.class, args);
	}

	@Autowired
	private IClinicService clinicService;

	@RequestMapping(value = "/findall", method = RequestMethod.GET)
	public Iterable<Clinic> findAll() {
		log.debug("Vo day");
		return this.clinicService.findAll();
	}
}
