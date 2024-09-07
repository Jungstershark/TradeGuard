package com.code9impact.execution.controllers;

import com.code9impact.execution.domains.LimitObject;
import com.code9impact.execution.services.LimitService;
import org.springframework.boot.actuate.autoconfigure.observation.ObservationProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class LimitController {
    private final LimitService limitService;

    public LimitController(LimitService limitService) {
        this.limitService = limitService;
    }

    @GetMapping(path = "/limits")
    public ResponseEntity<Iterable<LimitObject>> getLimits() {
        return new ResponseEntity<>(limitService.getAllLimits(), HttpStatus.OK); // Use limitService instance
    }

    @GetMapping(path = "/limits/{id}")
    public ResponseEntity<LimitObject> getLimit(@PathVariable String id) { // Use String for the id
        Optional<LimitObject> limitObject = limitService.getLimitBy(id);
        if (limitObject.isPresent()) {
            return new ResponseEntity<>(limitObject.get(), HttpStatus.OK); // Unwrap the Optional
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(path = "/limits/filter")
    @ResponseBody
    public ResponseEntity<List<LimitObject>> filterLimits(
            @RequestParam(required = false) Optional<String> instrgrp,  // Optional query parameter
            @RequestParam(required = false) Optional<Long> limithigher  // Optional query parameter
    ) {
        // Filter by both instrgrp and limithigher if both are provided
        if (instrgrp.isPresent() && limithigher.isPresent()) {
            return new ResponseEntity<>(limitService.getLimitsInstrGrpAvailLimit(instrgrp.get(), limithigher.get()), HttpStatus.OK);
        }

        // Filter by only instrgrp if provided
        if (instrgrp.isPresent()) {
            return new ResponseEntity<>(limitService.getLimitsByInstrGrp(instrgrp.get()), HttpStatus.OK);
        }

        // Filter by only limithigher if provided
        if (limithigher.isPresent()) {
            return new ResponseEntity<>(limitService.getLimitsByAvailLimit(limithigher.get()), HttpStatus.OK);
        }

        // Return all limits if no query parameters are provided
        return new ResponseEntity<>((List<LimitObject>) limitService.getAllLimits(), HttpStatus.OK);
    }
}

//    submit trade order form
//            Realtime data
//                    instrument group, limit higher than amount given