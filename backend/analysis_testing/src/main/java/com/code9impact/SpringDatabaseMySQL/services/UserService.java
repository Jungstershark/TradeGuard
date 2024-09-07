package com.code9impact.SpringDatabaseMySQL.services;

import com.code9impact.SpringDatabaseMySQL.domains.User;

public interface UserService {

    Iterable<User> getUsers();
}
