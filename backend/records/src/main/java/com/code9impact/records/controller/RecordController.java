package com.code9impact.records.controller;

import com.code9impact.records.domain.Record;
import com.code9impact.records.domain.Status;
import com.code9impact.records.service.RecordService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class RecordController {

    private final RecordService recordService;

    public RecordController(RecordService recordService) {
        this.recordService = recordService;
    }

    @GetMapping(path = "/records")
    public ResponseEntity<Iterable<com.code9impact.records.domain.Record>> getAllRecords() {
        Iterable<com.code9impact.records.domain.Record> records = recordService.getAllRecords();
        return new ResponseEntity<>(records, HttpStatus.OK);
    }

//    @GetMapping(path = "/records/{id}")
//    public ResponseEntity<Optional<com.code9impact.records.domain.Record>> getRecordById(@PathVariable Long id) {
//        Optional<com.code9impact.records.domain.Record> recordById = recordService.getRecordById(id);
//        return new ResponseEntity<Optional<com.code9impact.records.domain.Record>>
//                (recordById, HttpStatus.OK);
//    }

    // Get records by status
    @GetMapping("/records/status/{status}")
    public ResponseEntity<List<Record>> getRecordsByStatus(@PathVariable Status status) {
        List<Record> records = recordService.getRecordsByStatus(status);
        return new ResponseEntity<>(records, HttpStatus.OK);
    }


    // Get records by instrumentId
    @GetMapping("/records/{instrumentId}")
    public ResponseEntity<Record> getRecordByInstrumentId(@PathVariable("instrumentId") String instrumentId) {
        Optional<Record> optionalRecord = recordService.getRecordByInstrumentId(instrumentId);
        return optionalRecord.map(record -> new ResponseEntity<>(record, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping(path = "/records/create")
    public ResponseEntity<Record> createRecord(@RequestBody com.code9impact.records.domain.Record newRecord) {
        com.code9impact.records.domain.Record record = recordService.addRecord(newRecord);
        return new ResponseEntity<>(record, HttpStatus.CREATED);
    }


}
