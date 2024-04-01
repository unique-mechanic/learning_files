/* SELECT Distinct count */

SELECT COUNT(DISTINCT name)
FROM team;

/*Select all rows in the column name*/
SELECT COUNT(name)
FROM team;

/*What does SUM do? => It gives us the sum of a column's values

TO SUM up the values => follow syntax below*/
SELECT SUM(price)
FROM wishlist;

/*To display the total as different column name*/
SELECT SUM(price) AS total_price
FROM wishlist;

/*We could use COUNT(grade) and a condition like grade = 'A'. 
But this would only count students that got the grade A.*/

SELECT COUNT(grade)
FROM test
WHERE grade = 'A';

/*To count how many students got each grade, we use GROUP BY. This groups our results by the different grade values.*/

SELECT grade, COUNT(*)
FROM test
GROUP BY grade;

/*To count the number of users having the country "England" */
SELECT COUNT(country)
FROM user
WHERE country = 'England';

/*Since each item describes a student and their grade, we're counting students. Rename COUNT(*) to students.*/
SELECT grade, COUNT(*) AS students
FROM test
GROUP BY grade;

/*If we're not interested in all groups and we'd like to filter some out, we can use HAVING.*/
SELECT grade, COUNT(*) AS students
FROM test
GROUP BY grade
HAVING COUNT(*) > 1;

/*In this query, we're counting how many students got each grade, but we omit the results for the grade 'A'.*/
SELECT grade, COUNT(*) AS students
FROM test
GROUP BY grade
HAVING grade <> 'A';

/*We can use any selected property to build the condition in HAVING, like using grade or students here.*/
SELECT grade, COUNT(*) AS students
FROM test
GROUP BY grade
HAVING students <> 2;




