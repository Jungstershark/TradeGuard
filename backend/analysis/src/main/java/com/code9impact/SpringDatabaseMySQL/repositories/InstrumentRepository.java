package com.code9impact.SpringDatabaseMySQL.repositories;

import com.code9impact.SpringDatabaseMySQL.domains.Instrument;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InstrumentRepository extends JpaRepository<Instrument, String> {

    Optional<Instrument> findById(String id);

}
