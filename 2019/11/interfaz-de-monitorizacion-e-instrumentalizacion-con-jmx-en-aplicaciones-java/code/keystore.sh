$ keytool -genkey -keyalg RSA -keystore keystore.jks -keysize 8192
$ keytool -export -keystore keystore.jks -file certificate.cer -storepass password
$ keytool -import -file certificate.cer -keystore trustore.jks -storepass password -noprompt