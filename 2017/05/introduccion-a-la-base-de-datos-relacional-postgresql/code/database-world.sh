bash-4.3# wget http://pgfoundry.org/frs/download.php/527/world-1.0.tar.gz
bash-4.3# tar -zxvf world-1.0.tar.gz

bash-4.3# psql -U admin
admin=# create database world;
admin=# \q

bash-4.3# psql -U admin world < dbsamples-0.1/world/world.sql

bash-4.3# psql -U admin
admin=# \l
                                 List of databases
   Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges   
-----------+----------+----------+------------+------------+-----------------------
 admin     | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
 companies | admin    | UTF8     | en_US.utf8 | en_US.utf8 | 
 postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
 template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
           |          |          |            |            | postgres=CTc/postgres
 template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
           |          |          |            |            | postgres=CTc/postgres
 world     | admin    | UTF8     | en_US.utf8 | en_US.utf8 | 
(6 rows)

admin=# \connect world
You are now connected to database "world" as user "admin".
world=# \dt
            List of relations
 Schema |      Name       | Type  | Owner 
--------+-----------------+-------+-------
 public | city            | table | admin
 public | country         | table | admin
 public | countrylanguage | table | admin
(3 rows)
world=# \d+ city
                              Table "public.city"
   Column    |     Type     | Modifiers | Storage  | Stats target | Description 
-------------+--------------+-----------+----------+--------------+-------------
 id          | integer      | not null  | plain    |              | 
 name        | text         | not null  | extended |              | 
 countrycode | character(3) | not null  | extended |              | 
 district    | text         | not null  | extended |              | 
 population  | integer      | not null  | plain    |              | 
Indexes:
    "city_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "country" CONSTRAINT "country_capital_fkey" FOREIGN KEY (capital) REFERENCES city(id)

world=# \d+ country
                               Table "public.country"
     Column     |     Type      | Modifiers | Storage  | Stats target | Description 
----------------+---------------+-----------+----------+--------------+-------------
 code           | character(3)  | not null  | extended |              | 
 name           | text          | not null  | extended |              | 
 continent      | text          | not null  | extended |              | 
 region         | text          | not null  | extended |              | 
 surfacearea    | real          | not null  | plain    |              | 
 indepyear      | smallint      |           | plain    |              | 
 population     | integer       | not null  | plain    |              | 
 lifeexpectancy | real          |           | plain    |              | 
 gnp            | numeric(10,2) |           | main     |              | 
 gnpold         | numeric(10,2) |           | main     |              | 
 localname      | text          | not null  | extended |              | 
 governmentform | text          | not null  | extended |              | 
 headofstate    | text          |           | extended |              | 
 capital        | integer       |           | plain    |              | 
 code2          | character(2)  | not null  | extended |              | 
Indexes:
    "country_pkey" PRIMARY KEY, btree (code)
Check constraints:
    "country_continent_check" CHECK (continent = 'Asia'::text OR continent = 'Europe'::text OR continent = 'North America'::text OR continent = 'Africa'::text OR continent = 'Oceania'::text OR continent = 'Antarctica'::text OR continent = 'South America'::text)
Foreign-key constraints:
    "country_capital_fkey" FOREIGN KEY (capital) REFERENCES city(id)
Referenced by:
    TABLE "countrylanguage" CONSTRAINT "countrylanguage_countrycode_fkey" FOREIGN KEY (countrycode) REFERENCES country(code)
    
world=# \d+ countrylanguage
                         Table "public.countrylanguage"
   Column    |     Type     | Modifiers | Storage  | Stats target | Description 
-------------+--------------+-----------+----------+--------------+-------------
 countrycode | character(3) | not null  | extended |              | 
 language    | text         | not null  | extended |              | 
 isofficial  | boolean      | not null  | plain    |              | 
 percentage  | real         | not null  | plain    |              | 
Indexes:
    "countrylanguage_pkey" PRIMARY KEY, btree (countrycode, language)
Foreign-key constraints:
    "countrylanguage_countrycode_fkey" FOREIGN KEY (countrycode) REFERENCES country(code)
    