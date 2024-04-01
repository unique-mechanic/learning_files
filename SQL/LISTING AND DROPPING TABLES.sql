/*

Imagine you're an event manager and you're keeping track of everything you need to plan successful events.

You want to take a look at all the tables you have, and decide if there are any old ones you can delete.

A schema stores a lot of information about a database. Let's specify that we only want the tables.

We use sqliteschema command

*/

SELECT * FROM sqlite_schema
WHERE type = "table";

/* From the above command, we are getting only the table type entities from sqlite_schema command

To make a list of tables, we only need the name column. So let's SELECT for it! */
SELECT name FROM sqlite_schema
WHERE type = "table";

/*Now that we have the list of tables, let's delete the entire past_events table with the DROP TABLE query.*/

DROP TABLE past_events;

SELECT name FROM sqlite_schema
WHERE type = "table";



