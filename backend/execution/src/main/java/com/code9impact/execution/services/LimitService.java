package com.code9impact.execution.services;

import com.code9impact.execution.domains.LimitObject;

import java.util.List;
import java.util.Optional;

public interface LimitService {

    Iterable<LimitObject> getAllLimits();
    Optional<LimitObject> getLimitBy(String id);
    
    List<LimitObject> getLimitsInstrGrpAvailLimit(String s, Long aLong);

    List<LimitObject> getLimitsByInstrGrp(String s);

    List<LimitObject> getLimitsByAvailLimit(Long aLong);

    // reduce the available limit
    boolean updateAvailableLimit(String id, Long amount);

    LimitObject createLimit(LimitObject limitObject);

    boolean deleteLimitById(String id);
}
