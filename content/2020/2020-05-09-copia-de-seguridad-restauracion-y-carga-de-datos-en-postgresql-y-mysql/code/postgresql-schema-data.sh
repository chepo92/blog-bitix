$ pg_dump -Fc --schema-only database > database-ddl.dump
$ pg_dump -Fc --data-only database > database-data.dump

$ psql -d database -f database-ddl.sql
$ psql -d database -f database-data.sql