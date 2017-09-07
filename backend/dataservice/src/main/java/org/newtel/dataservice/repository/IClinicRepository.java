package org.newtel.dataservice.repository;

import org.newtel.dataservice.models.Clinic;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IClinicRepository extends CrudRepository<Clinic, String> {
}
