package com.code9impact.auth_service.auth;

import com.code9impact.auth_service.domain.Department;
import com.code9impact.auth_service.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {
    private String email;

    String password;

    private Department department;
}
