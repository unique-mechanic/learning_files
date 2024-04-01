/*

Day 1: Basic SQL Concepts and Intermediate Topics
1. Recap Basic SQL Concepts
SQL Syntax:

SQL (Structured Query Language) is used to interact with relational databases.
Common SQL statements include SELECT, INSERT, UPDATE, DELETE.
Structure of a SQL Query:

*/

SELECT column1, column2, ...
FROM table_name
WHERE condition;

/*
Basic SQL Functions:

COUNT(): Counts the number of rows returned by a query.
SUM(): Calculates the sum of a numeric column.
AVG(): Calculates the average of a numeric column.
2. Intermediate SQL Concepts
JOINs:

Used to retrieve data from multiple tables based on a related column between them.
Types of JOINs: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN.
JOIN Syntax:

*/
SELECT columns
FROM table1
JOIN table2 ON table1.column = table2.column;
Subqueries:

/*
A query nested within another query.
Can be correlated (dependent on outer query) or non-correlated (independent).
Subquery Syntax:

*/
SELECT columns
FROM table
WHERE column IN (SELECT column FROM another_table WHERE condition);

/*
Common Table Expressions (CTEs):

Temporary result sets that can be referenced within another query.
Improve readability and maintainability of complex queries.

CTE Syntax:
*/

WITH cte_name AS (
    SELECT columns
    FROM table
    WHERE condition
)
SELECT * FROM cte_name;

/*
These notes cover the basics of SQL syntax, functions, as well as intermediate concepts like JOINs, subqueries, and CTEs. 
Tomorrow, we'll delve deeper into data manipulation and query optimization. 
Let me know if you need further clarification on any topic!*/

