package com.code9impact.execution.domains;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDate;

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

}
