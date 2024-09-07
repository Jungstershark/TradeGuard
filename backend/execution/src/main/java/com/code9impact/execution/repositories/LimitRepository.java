package com.code9impact.execution.repositories;

import com.code9impact.execution.domains.LimitObject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LimitRepository extends JpaRepository<LimitObject, String> {
}
