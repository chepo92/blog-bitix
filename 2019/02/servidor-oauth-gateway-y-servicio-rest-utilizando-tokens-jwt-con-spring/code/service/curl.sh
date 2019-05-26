$ curl -v http://localhost:8090/service/
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 8090 (#0)
> GET /service/ HTTP/1.1
> Host: localhost:8090
> User-Agent: curl/7.63.0
> Accept: */*
>
< HTTP/1.1 401 Unauthorized
< transfer-encoding: chunked
< Cache-Control: no-store
< Pragma: no-cache
< WWW-Authenticate: Bearer realm="service", error="unauthorized", error_description="Full authentication is required to access this resource"
< X-Content-Type-Options: nosniff
< X-XSS-Protection: 1; mode=block
< X-Frame-Options: DENY
< Content-Type: application/json;charset=UTF-8
< Date: Fri, 08 Feb 2019 18:58:03 GMT
<
* Connection #0 to host localhost left intact
{"error":"unauthorized","error_description":"Full authentication is required to access this resource"}

$ curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsic2VydmljZSJdLCJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTU0OTY5MjQ1OCwiYXV0aG9yaXRpZXMiOlsiQ0xJRU5UIl0sImp0aSI6IjEzYjM1M2Q2LTQwODUtNDdiMS1hYzkyLTRiZDJhNDg3MzFhOCIsImNsaWVudF9pZCI6ImNsaWVudCJ9.CueMcwrD7pTp3pj37_BzzcUODG7PcjCacSa14-l5_Hw" http://localhost:8090/service/
Hello world (http://localhost:8080/)

$ curl -X POST -u "client:1234567890" -d "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsic2VydmljZSJdLCJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTU0OTY5MjQ1OCwiYXV0aG9yaXRpZXMiOlsiRFVNTVkiXSwianRpIjoiMTNiMzUzZDYtNDA4NS00N2IxLWFjOTItNGJkMmE0ODczMWE4IiwiY2xpZW50X2lkIjoiY2xpZW50In0.RaeQYdukn8Xr8S9ld5Vy2UnYboUjPyMkutNgyfVN-Bc" http://localhost:8095/oauth/check_token
{"aud":["service"],"scope":["read"],"active":true,"exp":1549692458,"authorities":["DUMMY"],"jti":"13b353d6-4085-47b1-ac92-4bd2a48731a8","client_id":"client"}
$ curl -v -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsic2VydmljZSJdLCJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTU0OTY5MjQ1OCwiYXV0aG9yaXRpZXMiOlsiRFVNTVkiXSwianRpIjoiMTNiMzUzZDYtNDA4NS00N2IxLWFjOTItNGJkMmE0ODczMWE4IiwiY2xpZW50X2lkIjoiY2xpZW50In0.RaeQYdukn8Xr8S9ld5Vy2UnYboUjPyMkutNgyfVN-Bc" http://localhost:8090/service/
{"error":"access_denied","error_description":"Access is denied"}
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 8090 (#0)
> GET /service/ HTTP/1.1
> Host: localhost:8090
> User-Agent: curl/7.63.0
> Accept: */*
> Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsic2VydmljZSJdLCJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTU0OTY5MjQ1OCwiYXV0aG9yaXRpZXMiOlsiRFVNTVkiXSwianRpIjoiMTNiMzUzZDYtNDA4NS00N2IxLWFjOTItNGJkMmE0ODczMWE4IiwiY2xpZW50X2lkIjoiY2x
pZW50In0.RaeQYdukn8Xr8S9ld5Vy2UnYboUjPyMkutNgyfVN-Bc
>
< HTTP/1.1 403 Forbidden
< transfer-encoding: chunked
< Cache-Control: no-store
< Pragma: no-cache
< X-Content-Type-Options: nosniff
< X-XSS-Protection: 1; mode=block
< X-Frame-Options: DENY
< Content-Type: application/json;charset=UTF-8
< Date: Fri, 08 Feb 2019 19:02:14 GMT
<
* Connection #0 to host localhost left intact
{"error":"access_denied","error_description":"Access is denied"}
