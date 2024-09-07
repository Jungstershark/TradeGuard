package com.code9impact.SpringDatabaseMySQL.controllers;

import com.code9impact.SpringDatabaseMySQL.domains.Instrument;
import com.code9impact.SpringDatabaseMySQL.services.InstrumentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class InstrumentController {

    private InstrumentService instrumentService;

    public InstrumentController(InstrumentService instrumentService) {
        this.instrumentService = instrumentService;
    }

    @GetMapping(path = "/instruments")
    public ResponseEntity<Iterable<Instrument>> getAllInstruments() {
        return new ResponseEntity<Iterable<Instrument>>(instrumentService.getAllInstruments(), HttpStatus.OK);
    }

    @GetMapping(path = "/instruments/{id}")
    public ResponseEntity<Optional<Instrument>> getInstrumentById(@PathVariable int id) {
        return new ResponseEntity<Optional<Instrument>>(instrumentService.getInstrumentBy(id), HttpStatus.OK);
    }

}
