/*
Let's say you're a small business owner. Lately, your business is picking up! You need a way to keep track of discounts.

You need a column in the table for this purpose, so in this case, you need to change the structure of the entire table.


orders - table name

order_no	order_status	place_of_order
101	        Delivered	        Amazon
512	        Delivered	        Amazon
432	        Shipped	            Redbubble
984	        Processing	        Store
566	        Delivered	        Store

For this we can use "ALTER TABLE" command which is a two part command

*/

ALTER TABLE orders 
ADD discount int; 
 
SELECT * FROM orders;

/*
We can also delete existing columns with the DROP COLUMN command, followed by the name of the column to remove, place_of_order.

Remember to always use ALTER TABLE before!

*/

ALTER TABLE orders
DROP COLUMN place_of_order;

SELECT * FROM orders;

/*
You can rename a column with the RENAME TO command. 
Add the original name of the column after RENAME, and add the new name after the TO.

*/

ALTER TABLE orders
RENAME order_amt to bill;

SELECT * FROM orders;

/**/






