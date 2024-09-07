package com.code9impact.SpringDatabaseMySQL.domains;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "approved_instruments")
public class Instrument {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String instrumentId;

    @Column(name = "instrument_group")
    private String instrumentGroup;

    @Column(name = "instrument")
    private String instrument;

    @Column(name = "department")
    private String department;

    @Column(name = "risk_country")
    private String riskCountry;

    @Column(name = "exchange")
    private String exchange;

    @Column(name = "tradeccy")
    private String tradeCCY;

    @Column(name = "settlementccy")
    private String settlementCCY;


}
