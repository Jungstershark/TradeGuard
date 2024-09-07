package com.code9impact.SpringDatabaseMySQL.services;

import com.code9impact.SpringDatabaseMySQL.domains.Instrument;

public interface InstrumentService {

    Iterable<Instrument> getAllInstruments();

}
