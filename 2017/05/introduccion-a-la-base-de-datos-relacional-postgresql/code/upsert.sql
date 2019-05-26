companies=#

INSERT INTO company (name, foundation, address, employees) VALUES ('Canonical', '2004-03-05', 'London, United Kingdom', '700') ON CONFLICT (name) DO UPDATE
SET foundation = EXCLUDED.foundation, address = EXCLUDED.address, employees = EXCLUDED.employees;

SELECT * FROM company;
 id |                        name                        | foundation |        address         | employees 
----+----------------------------------------------------+------------+------------------------+-----------
  2 | Canonical                                          | 2004-03-05 | London, United Kingdom |       700
(1 row)

INSERT INTO company (name, foundation, address, employees) VALUES ('Canonical', '2004-03-05', 'London, United Kingdom', '750') ON CONFLICT (name) DO UPDATE
SET foundation = EXCLUDED.foundation, address = EXCLUDED.address, employees = EXCLUDED.employees;

SELECT * FROM company;
 id |                        name                        | foundation |        address         | employees 
----+----------------------------------------------------+------------+------------------------+-----------
  2 | Canonical                                          | 2004-03-05 | London, United Kingdom |       750
(1 row)
