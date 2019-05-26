$ docker run --rm --name nginx -p 80:80 -v `pwd`/nginx.conf:/etc/nginx/conf.d/default.conf:ro -v /home/picodotdev/Software/personal/git/blog-bitix/public:/usr/share/nginx/html:ro nginx
