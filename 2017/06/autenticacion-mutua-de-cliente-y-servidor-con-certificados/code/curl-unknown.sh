$ curl -v --cacert ca.crt "https://localhost/"
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
*   CAfile: ca.crt
  CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Server hello (2):
* TLSv1.0 (IN), TLS handshake, Certificate (11):
* TLSv1.0 (IN), TLS handshake, Server key exchange (12):
* TLSv1.0 (IN), TLS handshake, Request CERT (13):
* TLSv1.0 (IN), TLS handshake, Server finished (14):
* TLSv1.0 (OUT), TLS handshake, Certificate (11):
* TLSv1.0 (OUT), TLS handshake, Client key exchange (16):
* TLSv1.0 (OUT), TLS change cipher, Client hello (1):
* TLSv1.0 (OUT), TLS handshake, Finished (20):
* TLSv1.0 (IN), TLS handshake, Finished (20):
* SSL connection using TLSv1.0 / ECDHE-RSA-AES256-SHA
* ALPN, server accepted to use http/1.1
* Server certificate:
*  subject: C=ES; ST=Spain; O=Blog Bitix; CN=localhost
*  start date: Jun 16 22:16:18 2017 GMT
*  expire date: Jun 15 22:16:18 2022 GMT
*  common name: localhost (matched)
*  issuer: C=ES; ST=Spain; O=Blog Bitix Certiticate Authority
*  SSL certificate verify ok.
> GET / HTTP/1.1
> Host: localhost
> User-Agent: curl/7.54.1
> Accept: */*
>
< HTTP/1.1 400 Bad Request
< Server: nginx/1.13.0
< Date: Fri, 16 Jun 2017 22:30:49 GMT
< Content-Type: text/html
< Content-Length: 253
< Connection: close
<
<html>
<head><title>400 No required SSL certificate was sent</title></head>
<body bgcolor="white">
<center><h1>400 Bad Request</h1></center>
<center>No required SSL certificate was sent</center>
<hr><center>nginx/1.13.0</center>
</body>
</html>
* Closing connection 0
* TLSv1.0 (OUT), TLS alert, Client hello (1):

$ curl -v --cacert ca.crt --cert client-unknown.crt --key client-unknown.key "https://localhost/"
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
*   CAfile: ca.crt
  CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Server hello (2):
* TLSv1.0 (IN), TLS handshake, Certificate (11):
* TLSv1.0 (IN), TLS handshake, Server key exchange (12):
* TLSv1.0 (IN), TLS handshake, Request CERT (13):
* TLSv1.0 (IN), TLS handshake, Server finished (14):
* TLSv1.0 (OUT), TLS handshake, Certificate (11):
* TLSv1.0 (OUT), TLS handshake, Client key exchange (16):
* TLSv1.0 (OUT), TLS handshake, CERT verify (15):
* TLSv1.0 (OUT), TLS change cipher, Client hello (1):
* TLSv1.0 (OUT), TLS handshake, Finished (20):
* TLSv1.0 (IN), TLS handshake, Finished (20):
* SSL connection using TLSv1.0 / ECDHE-RSA-AES256-SHA
* ALPN, server accepted to use http/1.1
* Server certificate:
*  subject: C=ES; ST=Spain; O=Blog Bitix; CN=localhost
*  start date: Jun 16 22:16:18 2017 GMT
*  expire date: Jun 15 22:16:18 2022 GMT
*  common name: localhost (matched)
*  issuer: C=ES; ST=Spain; O=Blog Bitix Certiticate Authority
*  SSL certificate verify ok.
> GET / HTTP/1.1
> Host: localhost
> User-Agent: curl/7.54.1
> Accept: */*
>
< HTTP/1.1 400 Bad Request
< Server: nginx/1.13.0
< Date: Fri, 16 Jun 2017 22:32:55 GMT
< Content-Type: text/html
< Content-Length: 231
< Connection: close
<
<html>
<head><title>400 The SSL certificate error</title></head>
<body bgcolor="white">
<center><h1>400 Bad Request</h1></center>
<center>The SSL certificate error</center>
<hr><center>nginx/1.13.0</center>
</body>
</html>
* Closing connection 0
* TLSv1.0 (OUT), TLS alert, Client hello (1):

$ curl -v --cacert ca-unknown.crt --cert client.crt --key client.key "https://localhost/"
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 443 (#0)
* ALPN, offering h2
* ALPN, offering http/1.1
* Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
* successfully set certificate verify locations:
*   CAfile: ca-unknown.crt
  CApath: none
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS handshake, Server hello (2):
* TLSv1.0 (IN), TLS handshake, Certificate (11):
* TLSv1.0 (OUT), TLS alert, Server hello (2):
* SSL certificate problem: unable to get local issuer certificate
* stopped the pause stream!
* Closing connection 0
curl: (60) SSL certificate problem: unable to get local issuer certificate
More details here: https://curl.haxx.se/docs/sslcerts.html

curl performs SSL certificate verification by default, using a "bundle"
 of Certificate Authority (CA) public keys (CA certs). If the default
 bundle file isn't adequate, you can specify an alternate file
 using the --cacert option.
If this HTTPS server uses a certificate signed by a CA represented in
 the bundle, the certificate verification probably failed due to a
 problem with the certificate (it might be expired, or the name might
 not match the domain name in the URL).
If you'd like to turn off curl's verification of the certificate, use
 the -k (or --insecure) option.
HTTPS-proxy has similar options --proxy-cacert and --proxy-insecure.