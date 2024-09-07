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

    @Override
    public boolean updateAvailableLimit(String id, Long amount) {
        Optional<LimitObject> limitOptional = limitRepository.findById(id);

        if (limitOptional.isPresent()) {
            LimitObject limit = limitOptional.get();
            Long currentLimit = limit.getAvailableLimit();

            if (amount > currentLimit) {
                // The operation is not allowed as the amount exceeds the current available limit
                return false;
            }

            // Subtract the amount and update the available limit
            Long newLimit = currentLimit - amount;
            limit.setAvailableLimit(newLimit);
            limitRepository.save(limit);  // Save the updated limit to the database
            return true;
        }

        // Return false if the limit object is not found
        return false;
    }

    @Override
    public LimitObject createLimit(LimitObject limitObject) {
        // Save the limit object to the repository, MySQL will generate the ID
        return limitRepository.save(limitObject);
    }

    @Override
    public boolean deleteLimitById(String id) {
        Optional<LimitObject> limitOptional = limitRepository.findById(id);

        if (limitOptional.isPresent()) {
            limitRepository.deleteById(id);  // Delete the record if found
            return true;
        } else {
            return false;  // Return false if the record was not found
        }
    }


}

