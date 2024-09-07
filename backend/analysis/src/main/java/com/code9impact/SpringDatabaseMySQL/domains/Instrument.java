package com.code9impact.SpringDatabaseMySQL.domains;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="ApprovedInstruments")
public class Instrument {
    @Id
    private Integer instrumentId;

    @Column(name = "InstrumentGroup")
    private String instrumentGroup;

    @Column(name = "Instrument")
    private String instrument;

    @Column(name = "Department")
    private String department;

    @Column(name = "RiskCountry")
    private String riskCountry;

    @Column(name = "Exchange")
    private String exchange;

    @Column(name = "TradeCCY")
    private String tradeCCY;

    @Column(name = "SettlementCCY")
    private String exchangeCCY;


}
