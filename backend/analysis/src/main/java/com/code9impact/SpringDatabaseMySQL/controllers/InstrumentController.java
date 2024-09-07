package com.code9impact.SpringDatabaseMySQL.controllers;

import com.code9impact.SpringDatabaseMySQL.domains.Instrument;
import com.code9impact.SpringDatabaseMySQL.domains.InstrumentSearchRequest;
import com.code9impact.SpringDatabaseMySQL.services.InstrumentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class InstrumentController {

    private InstrumentService instrumentService;

    public InstrumentController(InstrumentService instrumentService) {
        this.instrumentService = instrumentService;
    }

    @GetMapping(path = "/instruments")
    public ResponseEntity<Iterable<Instrument>> getAllInstruments() {
        return new ResponseEntity<Iterable<Instrument>>(
                instrumentService.getAllInstruments(), HttpStatus.OK);
    }

    @GetMapping(path = "/instruments/id/{id}")
    public ResponseEntity<Optional<Instrument>> getInstrumentById(@PathVariable String id) {
        return new ResponseEntity<Optional<Instrument>>(
                instrumentService.getInstrumentById(id), HttpStatus.OK);
    }

    //    @GetMapping(path = "/instruments/search")
//    public ResponseEntity<Iterable<Instrument>> searchInstruments(
//            @RequestParam(required = false) String instrumentGroup,
//            @RequestParam(required = false) String instrument,
//            @RequestParam(required = false) String department,
//            @RequestParam(required = false) String riskCountry,
//            @RequestParam(required = false) String exchange,
//            @RequestParam(required = false) String tradeCCY,
//            @RequestParam(required = false) String exchangeCCY) {
//        System.out.println(instrumentGroup);
//        System.out.println(instrument);
//        System.out.println(department);
//        System.out.println(riskCountry);
//        System.out.println(exchange);
//        System.out.println(tradeCCY);
//        System.out.println(exchangeCCY);
//        // Use the instrumentService to search based on provided parameters
//        Iterable<Instrument> instruments = instrumentService.findInstruments(
//                instrumentGroup, instrument, department, riskCountry, exchange, tradeCCY, exchangeCCY);
//
//        // Return a ResponseEntity with the list of instruments and HTTP status
//        return new ResponseEntity<>(instruments, HttpStatus.OK);
//    }
    @PostMapping(path = "/instruments/search", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Iterable<Instrument>> searchInstruments(@RequestBody InstrumentSearchRequest searchRequest) {
        // Debugging output for request fields
        System.out.println("Instrument Group: " + searchRequest.getInstrumentGroup());
        System.out.println("Instrument: " + searchRequest.getInstrument());
        System.out.println("Department: " + searchRequest.getDepartment());
        System.out.println("Risk Country: " + searchRequest.getRiskCountry());
        System.out.println("Exchange: " + searchRequest.getExchange());
        System.out.println("Trade CCY: " + searchRequest.getTradeCCY());
        System.out.println("Settlement CCY: " + searchRequest.getSettlementCCY());

        // Use the instrumentService to search based on provided fields in the request body
        Iterable<Instrument> instruments = instrumentService.findInstruments(
                searchRequest.getInstrumentGroup(),
                searchRequest.getInstrument(),
                searchRequest.getDepartment(),
                searchRequest.getRiskCountry(),
                searchRequest.getExchange(),
                searchRequest.getTradeCCY(),
                searchRequest.getSettlementCCY()
        );

        return new ResponseEntity<>(instruments, HttpStatus.OK);
    }

    @GetMapping(path = "/instruments/group/{instrumentGroup}")
    public ResponseEntity<Iterable<Instrument>> getInstrumentsByGroup(@PathVariable String instrumentGroup) {
        System.out.println(instrumentGroup);
        return new ResponseEntity<Iterable<Instrument>>(instrumentService.findInstrumentsByInstrumentGroup(instrumentGroup), HttpStatus.OK);
    }

    //Create new instrument
    @PostMapping(path = "/instruments", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Instrument> addInstrument(@RequestBody Instrument newInstrument) {
        Instrument instrument = instrumentService.addInstrument(newInstrument);
        return new ResponseEntity<>(instrument, HttpStatus.CREATED);
    }

    //get instrument by list of ids
    @PostMapping(path = "/instruments/ids", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Iterable<Instrument>> getInstrumentsByIds(@RequestBody List<String> instrumentIds) {
        Iterable<Instrument> instruments = instrumentService.findInstrumentsByMultipleIds(instrumentIds);
        return new ResponseEntity<>(instruments, HttpStatus.OK);
    }
}

