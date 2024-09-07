package com.code9impact.SpringDatabaseMySQL.controllers;

import com.code9impact.SpringDatabaseMySQL.domains.User;
import com.code9impact.SpringDatabaseMySQL.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "/users")
    public ResponseEntity<Iterable<User>> getAllUsers() {
        return new ResponseEntity<Iterable<User>>(userService.getUsers(), HttpStatus.OK);
    }
}
