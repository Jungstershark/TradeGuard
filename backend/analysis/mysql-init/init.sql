-- Create table for ApprovedInstruments with auto-generated primary key using UUID
CREATE TABLE IF NOT EXISTS ApprovedInstruments (
                                                   id CHAR(16) PRIMARY KEY,
    InstrumentGroup VARCHAR(255),
    Instrument VARCHAR(255),
    Department VARCHAR(255),
    RiskCountry VARCHAR(255),
    Exchange VARCHAR(255),
    TradeCCY VARCHAR(255),
    SettlementCCY VARCHAR(255)
    );


-- Load data from ApprovedInstruments.csv, auto-generating the primary key
LOAD DATA INFILE '/docker-entrypoint-initdb.d/assets/ApprovedInstruments.csv'
INTO TABLE ApprovedInstruments
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(InstrumentGroup, Instrument, Department, RiskCountry, Exchange, TradeCCY, SettlementCCY)
SET id = LEFT(UUID(), 16);
