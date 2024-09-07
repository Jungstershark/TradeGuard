package com.code9impact.records.service.impl;

import com.code9impact.records.domain.Record;
import com.code9impact.records.domain.Status;
import com.code9impact.records.repositories.RecordRepository;
import com.code9impact.records.service.RecordService;
import org.springframework.stereotype.Component;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Component
public class RecordServiceImpl implements RecordService {

    private final RecordRepository recordRepository;

    public RecordServiceImpl(RecordRepository recordRepository) {
        this.recordRepository = recordRepository;
    }

    @Override
    public Iterable<com.code9impact.records.domain.Record> getAllRecords() {
        return recordRepository.findAll();
    }

    @Override
    public Optional<com.code9impact.records.domain.Record> getRecordById(Long id) {
        return recordRepository.findById(id);
    }

    @Override
    public com.code9impact.records.domain.Record addRecord(com.code9impact.records.domain.Record newRecord) {
        return recordRepository.save(newRecord);
    }

    @Override
    public List<Record> getRecordsByStatus(Status status) {
        return recordRepository.findByStatus(status);
    }

    @Override
    public Optional<Record> getRecordByInstrumentId(String instrumentId) {
        return recordRepository.findByInstrumentId(instrumentId);
    }
}
