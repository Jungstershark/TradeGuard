package com.code9impact.execution.controllers;

import com.code9impact.execution.domains.LimitObject;
import com.code9impact.execution.domains.UpdateLimitRequest;
import com.code9impact.execution.services.LimitService;
import org.springframework.boot.actuate.autoconfigure.observation.ObservationProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
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

    @PutMapping(path = "/limits/update")
    public ResponseEntity<String> updateAvailableLimit(@RequestBody UpdateLimitRequest request) {
        Optional<LimitObject> limitObject = limitService.getLimitBy(request.getId());

        if (limitObject.isPresent()) {
            LimitObject limit = limitObject.get();

            // Check if the amount to be subtracted is greater than the current available limit
            if (request.getAmount() > limit.getAvailableLimit()) {
                return new ResponseEntity<>("The requested amount exceeds the available limit.", HttpStatus.BAD_REQUEST);
            }

            // Subtract the amount and update the limit
            boolean isUpdated = limitService.updateAvailableLimit(request.getId(), request.getAmount());

            if (isUpdated) {
                return new ResponseEntity<>("Limit updated successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Failed to update the limit", HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            // Return 404 if the id is not found
            return new ResponseEntity<>("Limit with the provided id not found", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(path = "/limits")
    public ResponseEntity<Object> createLimit(@RequestBody LimitObject limitObject) {
        // Validate the input data
        if (limitObject.getInstrumentGroup() == null || limitObject.getInstrumentGroup().isEmpty()) {
            return new ResponseEntity<>("Instrument Group is required", HttpStatus.BAD_REQUEST);
        }

        if (limitObject.getCounterparty() == null || limitObject.getCounterparty().isEmpty()) {
            return new ResponseEntity<>("Counterparty is required", HttpStatus.BAD_REQUEST);
        }

        if (limitObject.getCurrency() == null || limitObject.getCurrency().length() != 3) {
            return new ResponseEntity<>("Valid currency code (3 characters) is required", HttpStatus.BAD_REQUEST);
        }

        if (limitObject.getAvailableLimit() == null || limitObject.getAvailableLimit() < 0) {
            return new ResponseEntity<>("Available limit must be a positive number", HttpStatus.BAD_REQUEST);
        }

        try {
            // Call the service to save the limit object
            LimitObject savedLimit = limitService.createLimit(limitObject);

            // Return the created object along with the HTTP 201 Created status
            return new ResponseEntity<>(savedLimit, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            // Handle duplicate limit error
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        } catch (Exception e) {
            // Handle unexpected errors
            return new ResponseEntity<>("An error occurred while creating the limit object", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // DELETE endpoint to delete a limit based on id
    @DeleteMapping(path = "/limits/{id}")
    public ResponseEntity<String> deleteLimit(@PathVariable String id) {
        boolean isDeleted = limitService.deleteLimitById(id);

        if (isDeleted) {
            return new ResponseEntity<>("Limit deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Limit with provided id not found", HttpStatus.NOT_FOUND);
        }
    }


//    submit trade order form
//            Realtime data
//                    instrument group, limit higher than amount given
//                    instrument group limit,

    @GetMapping(path = "/limits/stream")
    public SseEmitter streamEvents() {
        SseEmitter emitter = new SseEmitter(0L);
        ExecutorService sseExecutor = Executors.newSingleThreadExecutor();

        sseExecutor.execute(() -> {
            try {
                int keepAliveSeconds = 300;
                for (int i = 0; i < keepAliveSeconds; i++) {
                    emitter.send(limitService.getAllLimits()); // Use limitService instance
                    Thread.sleep(1000);  // Simulating delay
                }
                emitter.complete();
            } catch (IOException | InterruptedException e) {
                emitter.completeWithError(e);
            }
        });

        sseExecutor.shutdown();
        return emitter;
    }
}