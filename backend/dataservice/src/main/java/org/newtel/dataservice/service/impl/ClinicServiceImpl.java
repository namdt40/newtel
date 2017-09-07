package org.newtel.dataservice.service.impl;

import org.newtel.dataservice.models.Clinic;
import org.newtel.dataservice.repository.IClinicRepository;
import org.newtel.dataservice.service.IClinicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClinicServiceImpl implements IClinicService {

    @Autowired
    private IClinicRepository clinicRepository;

    @Override
    public Iterable<Clinic> findAll() {
        return clinicRepository.findAll();
    }

    @Override
    public Clinic save(Clinic clinic) {
        return clinicRepository.save(clinic);
    }

    @Override
    public void delete(Clinic clinic) {
        clinicRepository.delete(clinic);
    }
}
