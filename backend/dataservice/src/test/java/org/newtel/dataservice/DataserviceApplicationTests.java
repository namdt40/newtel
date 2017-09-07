package org.newtel.dataservice;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.newtel.dataservice.models.Clinic;
import org.newtel.dataservice.service.IClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DataserviceApplicationTests {

	@Autowired
	private IClinicService clinicService;
	@Test
	public void contextLoads() {

	}

	@Test
	public void createNew() {
		Clinic clinic = new Clinic();
		clinic.setName("Clinic 1");
		clinic.setDescription("Description clinic 1");
		this.clinicService.save(clinic);
	}

}
