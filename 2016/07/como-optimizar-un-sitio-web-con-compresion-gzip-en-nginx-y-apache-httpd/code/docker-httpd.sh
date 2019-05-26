$ docker run --rm --name apache -p 80:80 -v `pwd`/httpd.conf:/usr/local/apache2/conf/httpd.conf:ro -v /home/picodotdev/Software/personal/git/blog-bitix/public:/usr/local/apache2/htdocs:ro httpd
