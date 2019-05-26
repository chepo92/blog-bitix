$ openssl genrsa -out ca-unknown.key 8192
$ openssl rsa -in ca-unknown.key -pubout > ca-unknown.pub
$ openssl genrsa -out server-unknown.key 8192
$ openssl rsa -in server-unknown.key -pubout > server-unknown.pub
$ openssl genrsa -out client-unknown.key 8192
$ openssl rsa -in ca-unknown.key -pubout > client-unknown.pub