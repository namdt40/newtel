package org.newtel.dataservice.service.impl;

import org.newtel.dataservice.models.User;
import org.newtel.dataservice.repository.IUserRepository;
import org.newtel.dataservice.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private IUserRepository userRepository;

    @Override
    public Iterable<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void save(User user) {
        this.userRepository.save(user);
    }

    @Override
    public void delete(User user) {
        this.delete(user);
    }
}
