/*Joining tables means matching each row of the first table to a row in the second table based on a common property.*/

SELECT * FROM student /*student has id, name*/
JOIN enrolled  /*enrolled has id and class*/
ON student.id = enrolled.id; /*The keyword ON introduces a condition that decides whether a row from student should match a row from enrolled. */


/*Select joined rows from the artist and album tables by adding JOIN album.*/

SELECT *
FROM artist
JOIN album
ON artist.artist_id = album.artist_id;

/*JOIN is short for INNER JOIN
With INNER JOIN, rows without a matching value in the common column don't appear in the results.*/

SELECT * FROM student
INNER JOIN enrolled
ON student.id = enrolled.id;

/* What happens when a row from one table matches multiple rows in the other?

The row will appear multiple times in the result table, once for each match */

-------------
/* Joining two columns with comparable data 

Like the one below, joining id and student id */

SELECT * FROM student
INNER JOIN enrolled
ON student.id = enrolled.student_id;

/*We can simplify the result table by selecting only some columns, like student.name and then enrolled.class.*/

SELECT student.name , enrolled.class
FROM student
INNER JOIN enrolled
ON student.id = enrolled.student_id;

/*We can use aliasing to rename selected columns. Change student.name with AS and the alias student.*/

SELECT student.name AS student, enrolled.class
FROM student
INNER JOIN enrolled
ON student.id = enrolled.student_id;

/*We can also alias tables inside the query to avoid repeatedly writing long table names. Rename student to s and enrolled to e.*/

SELECT *
FROM student AS s
INNER JOIN enrolled AS 
ON student.id = enrolled.student_id;

/*If we alias tables, we must use these aliases everywhere in the query. Code s for student and e for enrolled in the condition.*/
SELECT *
FROM student AS s
INNER JOIN enrolled AS e
ON s.id = e.student_id;

/*We also have to use the table aliases when selecting specific columns, like with s.name to access the name column from student.*/
SELECT s.name , e.class
FROM student AS s
INNER JOIN enrolled AS e
ON s.id = e.student_id;

/*More LEFT JOIN */

/* A user posted their trip pictures and received a few comments.
 Select all items and join the user_id and comments tables 
 based on the common property id, with user_id.id = comments.id. */

SELECT *
FROM user_id
INNER JOIN comments
ON user_id.id = comments.id;

/* Show the details of the passengers who have boarded the flight by joining the flight_book and 
passenger_boarding tables based on the common property booking_id.*/

SELECT *
FROM flight_book
INNER JOIN passenger_boarding
ON flight_book.booking_id = passenger_boarding.booking_id;

/*Display the flights by joining airports and flights tables based on the common property city.*/

SELECT *
FROM airports 
INNER JOIN flights
ON airports.city = flights.city;

/*Join the stock and shipping tables based on the common property name.*/

SELECT *
FROM stock
INNER JOIN shipping
ON stock.name = shipping.name;


/*Display the blocked friends of a user by joining the friends and block_list tables based on the common property id. 
Notice that the rows that do not have a match won't appear in the joined table*/

SELECT *
FROM friends
INNER JOIN block_list
ON friends.id = block_list.id;


/* Check who gets what prize by joining the points and prizes tables based on the common property score. You'll notice a double match for player with score 8, 
since there are two prizes listed for that score.*/

