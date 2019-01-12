$ openssl rsa -aes256 -in localhost.key -out localhost-encrypted.key
$ openssl rsa -in localhost-encrypted.key -out localhost.key