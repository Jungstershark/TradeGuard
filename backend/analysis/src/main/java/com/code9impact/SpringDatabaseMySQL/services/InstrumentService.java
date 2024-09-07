package com.code9impact.SpringDatabaseMySQL.services;

import com.code9impact.SpringDatabaseMySQL.domains.Instrument;

import java.util.List;
import java.util.Optional;

public interface InstrumentService {

    Iterable<Instrument> getAllInstruments();

    Optional<Instrument> getInstrumentById(String id);

    Iterable<Instrument> findInstruments(String instrumentGroup, String instrument, String department, String riskCountry, String exchange, String tradeCCY, String exchangeCCY);

    Iterable<Instrument> findInstrumentsByInstrumentGroup(String instrumentGroup);

    Instrument addInstrument(Instrument newInstrument);
}
