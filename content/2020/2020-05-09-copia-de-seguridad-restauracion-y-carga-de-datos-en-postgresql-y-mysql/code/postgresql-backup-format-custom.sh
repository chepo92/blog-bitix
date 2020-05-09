$ pg_dump -Fc database > db.dump

$ pg_restore -d database db.dump
$ pg_restore -U $username --dbname=$dbname --table=$tablename