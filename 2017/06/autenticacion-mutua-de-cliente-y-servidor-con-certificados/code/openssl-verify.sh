$ openssl verify -CAfile ca.crt server.crt
server.crt: OK
$ openssl verify -CAfile ca.crt client.crt
client.crt: OK