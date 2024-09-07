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

-- Create table for AvailableLimits
CREATE TABLE IF NOT EXISTS AvailableLimits (
    id CHAR(16) PRIMARY KEY,
    InstrumentGroup VARCHAR(100),
    Counterparty VARCHAR(255),
    Currency CHAR(3),
    AvailableLimit BIGINT,
    DataDate DATE
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

-- Load data from AvailableLimits.csv
LOAD DATA INFILE '/docker-entrypoint-initdb.d/assets/AvailableLimits.csv'
INTO TABLE AvailableLimits
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(InstrumentGroup, Counterparty, Currency, @AvailableLimit, @DataDate)
SET id = LEFT(UUID(), 16),
    AvailableLimit = REPLACE(@AvailableLimit, ',', ''),
    DataDate = STR_TO_DATE(@DataDate, '%m/%d/%Y');
