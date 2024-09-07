package com.code9impact.records.service;


import com.code9impact.records.domain.Record;
import com.code9impact.records.domain.Status;

import java.util.List;
import java.util.Optional;

public interface RecordService {

    Iterable<com.code9impact.records.domain.Record> getAllRecords();

    Optional<com.code9impact.records.domain.Record> getRecordById(Long id);

    Record addRecord(com.code9impact.records.domain.Record newRecord);

    List<Record> getRecordsByStatus(Status status);

    Optional<Record> getRecordByInstrumentId(String instrumentId);
}
