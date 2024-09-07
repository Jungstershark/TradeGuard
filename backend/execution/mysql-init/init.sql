-- Create table for AvailableLimits
CREATE TABLE IF NOT EXISTS AvailableLimits (
    id CHAR(16) PRIMARY KEY,
    InstrumentGroup VARCHAR(100),
    Counterparty VARCHAR(255),
    Currency CHAR(3),
    AvailableLimit BIGINT,
    DataDate DATE
    );


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
