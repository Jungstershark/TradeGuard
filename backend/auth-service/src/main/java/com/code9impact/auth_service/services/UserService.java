package com.code9impact.auth_service.services;

import com.code9impact.auth_service.domain.User;
import com.code9impact.auth_service.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String getRoleByEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return user.getRole().name();  // Assuming Role is an enum
    }
}
