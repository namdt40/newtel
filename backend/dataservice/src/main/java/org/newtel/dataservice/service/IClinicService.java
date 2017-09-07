package org.newtel.dataservice.service;

import org.newtel.dataservice.models.Clinic;
import org.springframework.stereotype.Component;

@Component
public interface IClinicService {
    Iterable<Clinic> findAll();
    Clinic save(Clinic clinic);
    void delete(Clinic clinic);
}
