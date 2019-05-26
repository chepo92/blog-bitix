$ openssl verify -CAfile ca.crt server-unknown.crt
C = ES, ST = Spain, O = Unknown, CN = localhost
error 20 at 0 depth lookup: unable to get local issuer certificate
error server-unknown.crt: verification failed
$ openssl verify -CAfile ca.crt client-unknown.crt
C = ES, ST = Spain, O = Unknown Client
error 20 at 0 depth lookup: unable to get local issuer certificate
error client-unknown.crt: verification failed