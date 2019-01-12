$ cat localhost.key localhost.crt > localhost.pem
$ openssl x509 -in localhost.crt -out localhost.pem
$ openssl x509 -inform der -in localhost.cer -out localhost.pem