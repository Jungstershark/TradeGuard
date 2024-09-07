package com.code9impact.execution.services;

import com.code9impact.execution.domains.LimitObject;

import java.util.Optional;

public interface LimitService {

    Iterable<LimitObject> getAllLimits();
    Optional<LimitObject> getLimitBy(String id);
}
