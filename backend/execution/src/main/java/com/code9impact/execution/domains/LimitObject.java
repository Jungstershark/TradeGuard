package com.code9impact.execution.domains;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "available_limits")  // This tells JPA to use the 'AvailableLimits' table
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
    private Long availableLimit;

    @Column(name = "data_date")  // Explicitly map to the database column name
    private LocalDate dataDate;


    @PrePersist
    public void generateUUID() {
        if (this.id == null) {
            this.id = UUID.randomUUID().toString().replace("-", "").substring(0, 16);
        }
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

    public Long getAvailableLimit() {
        return availableLimit;
    }

    public void setAvailableLimit(Long availableLimit) {
        this.availableLimit = availableLimit;
    }

    public LocalDate getDataDate() {
        return dataDate;
    }

    public void setDataDate(LocalDate dataDate) {
        this.dataDate = dataDate;
    }
}
