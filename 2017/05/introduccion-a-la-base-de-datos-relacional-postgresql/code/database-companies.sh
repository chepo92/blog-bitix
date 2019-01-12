bash-4.3# psql -U admin

admin=# create database companies;

admin=# \connect companies
companies=#

create table company(
   ID             BIGSERIAL PRIMARY KEY NOT NULL,
   NAME           CHAR(50) UNIQUE NOT NULL,
   FOUNDATION     DATE NOT NULL,
   ADDRESS        TEXT,
   EMPLOYEES      INTEGER
);