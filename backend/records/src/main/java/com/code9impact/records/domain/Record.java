package com.code9impact.records.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "records")
public class Record {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generate ID
    @Column(name = "record_id")
    private Long recordId;

    @Column
    private String instrumentId;

    @Column
    private String instrumentGroup;

    @Column
    private String instrument;

    @Column
    private String department;

    @Column
    private String riskCountry;

    @Column
    private String exchange;

    @Column
    private String tradeCCY;

    @Column
    private String settlementCCY;

    @Enumerated(EnumType.STRING)
    private Status status;


}
