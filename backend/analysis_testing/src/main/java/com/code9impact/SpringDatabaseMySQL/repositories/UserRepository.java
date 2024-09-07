package com.code9impact.SpringDatabaseMySQL.repositories;

import com.code9impact.SpringDatabaseMySQL.domains.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {

}
