$ mysqldump database | gzip > database.sql.gz
$ gunzip < database.sql.gz | mysql database