package com.code9impact.execution.services;

import com.code9impact.execution.domains.LimitObject;
import com.code9impact.execution.repositories.LimitRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LimitService {

    private LimitRepository limitRepository;

    public List<LimitObject> getAllLimits() {
        return limitRepository.findAll();
    }
}
}
