package com.code9impact.SpringDatabaseMySQL.services.impl;

import com.code9impact.SpringDatabaseMySQL.domains.User;
import com.code9impact.SpringDatabaseMySQL.repositories.UserRepository;
import com.code9impact.SpringDatabaseMySQL.services.UserService;
import org.springframework.stereotype.Component;

@Component
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;

    }

    public Iterable<User> getUsers() {
        return userRepository.findAll();
    }
}
