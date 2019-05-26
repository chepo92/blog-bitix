$ docker run --rm -p 80:80 -v `pwd`/httpd.conf:/usr/local/apache2/conf/httpd.conf:ro httpd:alpine
