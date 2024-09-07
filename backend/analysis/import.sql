-- Create the users table
CREATE TABLE IF NOT EXISTS users (
                                     id SERIAL PRIMARY KEY,
                                     username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
    );

-- Insert users into the users table with plaintext passwords
INSERT INTO users (username, password) VALUES
                                           ('user1', 'password1'),
                                           ('user2', 'password2'),
                                           ('user3', 'password3'),
                                           ('user4', 'password4'),
                                           ('user5', 'password5');
