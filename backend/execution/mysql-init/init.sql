-- Create table for AvailableLimits
CREATE TABLE IF NOT EXISTS available_limits (
    id CHAR(16) PRIMARY KEY,
    instrument_group VARCHAR(100),
    counterparty VARCHAR(255),
    currency CHAR(3),
    available_limit BIGINT,
    data_date DATE
    );


-- Load data from AvailableLimits.csv
LOAD DATA INFILE '/docker-entrypoint-initdb.d/assets/AvailableLimits.csv'
INTO TABLE available_limits
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(instrument_group, counterparty, currency, @available_limit, @data_date)
SET id = LEFT(REPLACE(UUID(), '-', ''), 16),
-- SET id = LEFT(UUID(), 16),
    available_limit = REPLACE(@AvailableLimit, ',', ''),
    data_date = STR_TO_DATE(@DataDate, '%m/%d/%Y');
