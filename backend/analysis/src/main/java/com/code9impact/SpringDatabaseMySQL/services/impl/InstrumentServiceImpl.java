package com.code9impact.SpringDatabaseMySQL.services.impl;

import com.code9impact.SpringDatabaseMySQL.domains.Instrument;
import com.code9impact.SpringDatabaseMySQL.repositories.InstrumentRepository;
import com.code9impact.SpringDatabaseMySQL.services.InstrumentService;
import org.springframework.stereotype.Component;

import java.util.List;
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
    public Optional<Instrument> getInstrumentById(String id) {
        return instrumentRepository.findById(id);
    }

    @Override
    public Iterable<Instrument> findInstruments(String instrumentGroup, String instrument, String department, String riskCountry, String exchange, String tradeCCY, String exchangeCCY) {
        return instrumentRepository.searchInstruments(instrumentGroup, instrument, department, riskCountry, exchange, tradeCCY, exchangeCCY);
    }

    @Override
    public Iterable<Instrument> findInstrumentsByInstrumentGroup(String instrumentGroup) {
        return instrumentRepository.findByInstrumentGroup(instrumentGroup);
    }

    @Override
    public Instrument addInstrument(Instrument newInstrument) {
        return instrumentRepository.save(newInstrument);
    }

    @Override
    public Iterable<Instrument> findInstrumentsByMultipleIds(List<String> ids) {
        return instrumentRepository.findByInstrumentIdIn(ids);
    }


}



