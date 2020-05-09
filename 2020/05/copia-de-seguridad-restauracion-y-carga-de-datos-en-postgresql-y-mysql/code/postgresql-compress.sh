$ pg_dump database | gzip > database-backup.sql.gz

$ gunzip < database-backup.sql.gz | psql -d database