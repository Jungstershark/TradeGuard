package com.code9impact.execution.repositories;

import com.code9impact.execution.domains.LimitObject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LimitRepository extends JpaRepository<LimitObject, String> {
    List<LimitObject> findByInstrumentGroup(String instrumentGroup);

    List<LimitObject> findByAvailableLimitGreaterThanEqual(Long availableLimit);

    // New method to filter by both instrgrp and limithigher
    List<LimitObject> findByInstrumentGroupAndAvailableLimitGreaterThanEqual(String instrumentGroup, Long availableLimit);

    Optional<LimitObject> findByInstrumentGroupAndCounterpartyAndCurrencyAndAvailableLimit(
            String instrumentGroup,
            String counterparty,
            String currency,
            Long availableLimit
    );
}
