$ docker run --name mysql -d -p 3306:3306 --volumes-from mysql-data picodotdev/mysql:1.0 /sbin/my_init
3f5774999a7850ff4c8c0512ff066daf67a6e19499113ee9f04dc2511972a163
$ docker stop 3f5774999