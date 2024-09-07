-- Create table for ApprovedInstruments with auto-generated primary key using UUID
CREATE TABLE IF NOT EXISTS approved_instruments (
    instrument_id CHAR(16) PRIMARY KEY,
    instrument_group VARCHAR(255),
    instrument VARCHAR(255),
    department VARCHAR(255),
    risk_country VARCHAR(255),
    exchange VARCHAR(255),
    tradeccy VARCHAR(255),
    settlementccy VARCHAR(255)
    );


-- Load data from ApprovedInstruments.csv, auto-generating the primary key
LOAD DATA INFILE '/docker-entrypoint-initdb.d/assets/ApprovedInstruments.csv'
INTO TABLE approved_instruments
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(instrument_group, instrument, department, risk_country, exchange, tradeccy, settlementccy)
SET instrument_id = LEFT(UUID(), 16);
