$ curl -v --cacert ca.crt --cert client.crt --key client.key "https://localhost/"
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
< HTTP/1.1 200 OK
< Server: nginx/1.13.0
< Date: Fri, 16 Jun 2017 22:30:06 GMT
< Content-Type: text/html
< Content-Length: 612
< Last-Modified: Tue, 25 Apr 2017 17:23:03 GMT
< Connection: keep-alive
< ETag: "58ff85f7-264"
< Accept-Ranges: bytes
<
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
* Connection #0 to host localhost left intact