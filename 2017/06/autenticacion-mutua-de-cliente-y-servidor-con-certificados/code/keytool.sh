$ keytool -importcert -keystore ca.jks -trustcacerts -alias ca -file ca.crt
$ openssl pkcs12 -export -out client.p12 -inkey client.key -in client.crt
$ keytool -importkeystore -destkeystore client.jks -srckeystore client.p12 -srcstoretype pkcs12

$ keytool -importcert -keystore ca-unknown.jks -trustcacerts -alias ca -file ca-unknown.crt
$ openssl pkcs12 -export -out client-unknown.p12 -inkey client-unknown.key -in client-unknown.crt
$ keytool -importkeystore -destkeystore client-unknown.jks -srckeystore client-unknown.p12 -srcstoretype pkcs12