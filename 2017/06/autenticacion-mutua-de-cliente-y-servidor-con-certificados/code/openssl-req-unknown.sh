$ openssl req -new -x509 -days 1825 -key ca-unknown.key -out ca-unknown.crt
$ openssl req -new -key server-unknown.key -out server-unknown.csr
$ openssl req -new -key client-unknown.key -out client-unknown.csr
$ openssl x509 -req -days 1825 -in server-unknown.csr -CA ca-unknown.crt -CAkey ca-unknown.key -set_serial 01 -out server-unknown.crt
$ openssl x509 -req -days 1825 -in client-unknown.csr -CA ca-unknown.crt -CAkey ca-unknown.key -set_serial 02 -out client-unknown.crt