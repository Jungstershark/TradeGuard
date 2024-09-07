package com.code9impact.SpringDatabaseMySQL.services.impl;

import com.code9impact.SpringDatabaseMySQL.domains.Instrument;
import com.code9impact.SpringDatabaseMySQL.repositories.InstrumentRepository;
import com.code9impact.SpringDatabaseMySQL.services.InstrumentService;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class InstrumentServiceImpl implements InstrumentService {

    private final InstrumentRepository instrumentRepository;

    public InstrumentServiceImpl(InstrumentRepository instrumentRepository) {
        this.instrumentRepository = instrumentRepository;
    }

    @Override
    public Iterable<Instrument> getAllInstruments() {
        return instrumentRepository.findAll();
    }

    @Override
    public Optional<Instrument> getInstrumentBy(String id) {
        return instrumentRepository.findById(id);
    }


}
