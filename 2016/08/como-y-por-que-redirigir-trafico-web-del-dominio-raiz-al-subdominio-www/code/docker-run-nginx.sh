$ docker run --rm -p 80:80 -v `pwd`/nginx.conf:/etc/nginx/conf.d/default.conf:ro nginx:alpine
