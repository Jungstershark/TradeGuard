package com.code9impact.records.repositories;

import com.code9impact.records.domain.Record;
import com.code9impact.records.domain.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RecordRepository extends JpaRepository<Record, Long> {
    Optional<com.code9impact.records.domain.Record> findById(Long id);

    Optional<com.code9impact.records.domain.Record> findByInstrumentId(String id);

    List<Record> findByStatus(Status status);





}
