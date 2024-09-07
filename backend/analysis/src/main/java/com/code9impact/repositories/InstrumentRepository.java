package com.code9impact.repositories;

import com.code9impact.domain.Instrument;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstrumentRepository extends JpaRepository<Instrument, Integer> {

}
