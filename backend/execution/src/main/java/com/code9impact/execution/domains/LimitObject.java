package com.code9impact.execution.domains;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name = "AvailableLimits")  // This tells JPA to use the 'AvailableLimits' table
public class LimitObject {

    @Id
    @Column(length = 16)
    private String id;

    @Column(name = "instrument_group")  // Explicitly map to the database column name
    private String instrumentGroup;

    @Column(name = "counterparty")  // Explicitly map to the database column name
    private String counterparty;

    @Column(name = "currency")  // Explicitly map to the database column name
    private String currency;

    @Column(name = "available_limit")  // Explicitly map to the database column name
    private long availableLimit;

    @Column(name = "data_date")  // Explicitly map to the database column name
    private LocalDate dataDate;

    public LimitObject(String id, String instrumentGroup, String counterparty, String currency, long availableLimit, LocalDate dataDate) {
        this.id = id;
        this.instrumentGroup = instrumentGroup;
        this.counterparty = counterparty;
        this.currency = currency;
        this.availableLimit = availableLimit;
        this.dataDate = dataDate;
    }

    public LimitObject() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getInstrumentGroup() {
        return instrumentGroup;
    }

    public void setInstrumentGroup(String instrumentGroup) {
        this.instrumentGroup = instrumentGroup;
    }

    public String getCounterparty() {
        return counterparty;
    }

    public void setCounterparty(String counterparty) {
        this.counterparty = counterparty;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public long getAvailableLimit() {
        return availableLimit;
    }

    public void setAvailableLimit(long availableLimit) {
        this.availableLimit = availableLimit;
    }

    public LocalDate getDataDate() {
        return dataDate;
    }

    public void setDataDate(LocalDate dataDate) {
        this.dataDate = dataDate;
    }
}
