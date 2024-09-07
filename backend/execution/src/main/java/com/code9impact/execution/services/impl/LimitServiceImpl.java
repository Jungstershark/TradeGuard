package com.code9impact.execution.services.impl;

import com.code9impact.execution.domains.LimitObject;
import com.code9impact.execution.repositories.LimitRepository;
import com.code9impact.execution.services.LimitService;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Component
public class LimitServiceImpl implements LimitService {

    private final LimitRepository limitRepository;

    public LimitServiceImpl(LimitRepository limitRepository) {
        this.limitRepository = limitRepository;
    }

    @Override
    public Iterable<LimitObject> getAllLimits() {
        return limitRepository.findAll();
    }

    @Override
    public Optional<LimitObject> getLimitBy(String id) {
        return limitRepository.findById(id);
    }

    @Override
    public List<LimitObject> getLimitsInstrGrpAvailLimit(String instrumentGroup, Long availableLimit) {
        return limitRepository.findByInstrumentGroupAndAvailableLimitGreaterThanEqual(instrumentGroup, availableLimit);
    }

    @Override
    public List<LimitObject> getLimitsByInstrGrp(String instrumentGroup) {
        return limitRepository.findByInstrumentGroup(instrumentGroup);
    }

    @Override
    public List<LimitObject> getLimitsByAvailLimit(Long availableLimit) {
        return limitRepository.findByAvailableLimitGreaterThanEqual(availableLimit);
    }


}

