package org.newtel.dataservice.service;

import org.newtel.dataservice.models.User;


public interface IUserService {
    Iterable<User> findAll();
    void save(User user);
    void delete(User user);
}
