package com.code9impact.auth_service.controllers;

import com.code9impact.auth_service.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getRole")
    public String getRole(@RequestParam String email) {
        return userService.getRoleByEmail(email);
    }
}