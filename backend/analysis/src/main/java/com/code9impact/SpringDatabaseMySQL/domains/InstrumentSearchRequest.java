package com.code9impact.SpringDatabaseMySQL.domains;

import lombok.Data;

@Data
public class InstrumentSearchRequest {
    private String instrumentGroup;
    private String instrument;
    private String department;
    private String riskCountry;
    private String exchange;
    private String tradeCCY;
    private String settlementCCY;

    // Getters and setters for all fields

    public String getInstrumentGroup() {
        return instrumentGroup;
    }

    public void setInstrumentGroup(String instrumentGroup) {
        this.instrumentGroup = instrumentGroup;
    }

    public String getInstrument() {
        return instrument;
    }

    public void setInstrument(String instrument) {
        this.instrument = instrument;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getRiskCountry() {
        return riskCountry;
    }

    public void setRiskCountry(String riskCountry) {
        this.riskCountry = riskCountry;
    }

    public String getExchange() {
        return exchange;
    }

    public void setExchange(String exchange) {
        this.exchange = exchange;
    }

    public String getTradeCCY() {
        return tradeCCY;
    }

    public void setTradeCCY(String tradeCCY) {
        this.tradeCCY = tradeCCY;
    }

    public String getSettlementCCY() {
        return settlementCCY;
    }

    public void setSettlementCCY(String settlementCCY) {
        this.settlementCCY = settlementCCY;
    }
}