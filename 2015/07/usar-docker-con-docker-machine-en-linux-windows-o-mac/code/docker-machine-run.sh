$ docker-machine env dev
$ eval "$(docker-machine env dev)"
$ docker run busybox echo "hello world"
$ eval "$(docker-machine env --unset)"