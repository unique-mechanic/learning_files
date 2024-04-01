/*We can use a condition to select items that have a property within a range, like movies with a rating between 9 and 10.

When writing the condition, we start with the column whose values we're checking, like rating here.

*/

SELECT * FROM movies
WHERE rating BETWEEN 9 AND 10;

/*
We set the start of the range, like 9, and the end of the range, like 10, separated by the keyword AND.*/
SELECT *
FROM movies
WHERE rating BETWEEN 9 AND 10;

/*Filters using Pattern:
We can use conditions to select items where a property follows a pattern, like writers with a first_name starting with a.
*/

SELECT *
FROM writers
WHERE first_name LIKE 'a%'; /*this can be only used for text values */

/*Code the pattern 'chocolate%' to get the items that have an aroma starting with chocolate.*/

SELECT * 
FROM coffee
WHERE aroma LIKE 'chocolate%' ;

/*Code a pattern that doesn't match any of the aroma values.*/    

SELECT * 
FROM coffee
WHERE aroma LIKE 'walnut'; /*this will exactly look for the word walnut, as it doesn't have % at the end */

/*Code a condition that matches any aroma values, by using only the wildcard as a pattern '%'. */
SELECT * 
FROM coffee
WHERE 
aroma LIKE '%'
;

/*Where we place the wildcard matters. Click on each button to see the difference between placing % at the beginning, end, or both.*/




/*Between the parentheses, code the options 'French', and 'Italian', separated by a comma ,.*/
SELECT * 
FROM restaurants
WHERE cuisine IN ('French', 'Spanish');

/*Code three options for the name column: 'Naan', followed by 'Les Amis', and then 'Giggetto'.*/

SELECT * 
FROM restaurants
WHERE name IN ('Naan', 'Les Amis', 'Giggetto');

/*AND Condition 

With AND we can chain any kind of conditions, like selecting students majoring in 'Biology' that are not in their first year.*/

SELECT *
FROM students
WHERE major = 'Biology'
AND year <> 1;

/*We can also use AND with the <, >, <=, >= operators, like selecting items having a year >= 2 and year <= 4 */

SELECT *
FROM students
WHERE year >= 2
AND year <= 4;

/*A condition like year >= 2 AND year <= 4 is equivalent to BETWEEN 2 AND 4.

Due to >= and <=, it selects values between 2 and 4 for the same column, year. */

SELECT *
FROM students
WHERE year BETWEEN 2 AND 4 ;

/*Q. How many conditions can we chain with AND?

ANS: As many as we want */

/*Add a third condition with AND followed by ID < 3 to the following query

SELECT * 
FROM inventory
WHERE year < 1970
AND manufacturer = 'Ford' */

SELECT * 
FROM inventory
WHERE year < 1970
AND manufacturer = 'Ford'
AND ID < 3;

/*We can also use AND to chain conditions with BETWEEN, IN, and LIKE. */

SELECT *
FROM students
WHERE major = 'Biology'
AND year BETWEEN 2 AND 4;

/*------------- OR Condition -------------------------------*/

/*We can use OR to chain different filtering options, like selecting students who are majoring in Biology or are in their first year. */

/*Make sure the query also selects 2, Bentley, 2019  by coding OR followed by the condition year = 2019. */

SELECt * 
FROM inventory
WHERE manufacturer = 'Jaguar'
OR year = 2019;

-------------------------NOT CONDITION------------------------

/*To get items that don't satisfy a condition, we code NOT between the column name and the condition's operator.*/

SELECT *
FROM students
WHERE name 
NOT LIKE 'a%' ;

/*Coding NOT IN ('History', 'Physics') gives us all items with a major other than 'History' or 'Physics'. */

SELECT *
FROM students
WHERE major NOT IN ('History', 'Physics');





