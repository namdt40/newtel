package org.newtel.dataservice.repository;

import org.newtel.dataservice.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRepository extends CrudRepository<User, String> {
}
