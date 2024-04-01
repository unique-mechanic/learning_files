CREATE TABLE Directory (
 floor INTEGER,
 company TEXT
);

INSERT INTO Directory (floor, company) VALUES (1, 'Acme Inc.');
INSERT INTO Directory (floor, company) VALUES (2, 'Homeflix');

/* Write comments here*/


/* another sample query*/

CREATE TABLE Birthdays (
 name TEXT,
birthday TEXT
);

/* To delete all values from a table */
DELETE FROM toys; 
 
SELECT * FROM toys;

/*----------to update a row-------------------------*/
UPDATE Reservations SET time = '18:30' WHERE name = 'Powers';

SELECT * FROM Reservations;

/*another sample update query to update an entire column with same value */

UPDATE Songs SET certifications = 'Silver' ;

SELECT * FROM Songs;

/* to update values for two different values*/
UPDATE Flights SET mealservice = 1 WHERE number = 'PA67' OR number = 'PA76'

SELECT * FROM Flights;

/*DELETE rows based on a certain condition*/
DELETE FROM games WHERE no_of_players > 8;

SELECT * FROM games;

/*Another update statement*/
UPDATE Songs SET certifications = "Gold" WHERE streams >= 85;
SELECT * FROM Songs;