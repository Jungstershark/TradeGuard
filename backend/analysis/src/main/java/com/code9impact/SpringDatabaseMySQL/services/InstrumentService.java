package com.code9impact.SpringDatabaseMySQL.services;

import com.code9impact.SpringDatabaseMySQL.domains.Instrument;

import java.util.Optional;

public interface InstrumentService {

    Iterable<Instrument> getAllInstruments();
    Optional<Instrument> getInstrumentBy(String id);
}
