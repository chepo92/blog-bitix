$ groovy MutualCertAuth.groovy # with code change .trustStoreFile("ca-unknown.jks")
Caught: javax.ws.rs.ProcessingException: javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
javax.ws.rs.ProcessingException: javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
	at org.glassfish.jersey.client.internal.HttpUrlConnector.apply(HttpUrlConnector.java:287)
	at org.glassfish.jersey.client.ClientRuntime.invoke(ClientRuntime.java:252)
	at org.glassfish.jersey.client.JerseyInvocation$1.call(JerseyInvocation.java:684)
	at org.glassfish.jersey.client.JerseyInvocation$1.call(JerseyInvocation.java:681)
	at org.glassfish.jersey.internal.Errors.process(Errors.java:315)
	at org.glassfish.jersey.internal.Errors.process(Errors.java:297)
	at org.glassfish.jersey.internal.Errors.process(Errors.java:228)
	at org.glassfish.jersey.process.internal.RequestScope.runInScope(RequestScope.java:444)
	at org.glassfish.jersey.client.JerseyInvocation.invoke(JerseyInvocation.java:681)
	at org.glassfish.jersey.client.JerseyInvocation$Builder.method(JerseyInvocation.java:411)
	at org.glassfish.jersey.client.JerseyInvocation$Builder.get(JerseyInvocation.java:311)
	at Main.get(MutualCertAuth.groovy:19)
	at Main$get.call(Unknown Source)
	at MutualCertAuth.run(MutualCertAuth.groovy:43)
Caused by: javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
	at org.glassfish.jersey.client.internal.HttpUrlConnector._apply(HttpUrlConnector.java:399)
	at org.glassfish.jersey.client.internal.HttpUrlConnector.apply(HttpUrlConnector.java:285)
	... 13 more
Caused by: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
	... 15 more
Caused by: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
	... 15 more

$ groovy MutualCertAuth.groovy # with code change .keyStoreFile("client-unknown.jks")
400
<html>
<head><title>400 No required SSL certificate was sent</title></head>
<body bgcolor="white">
<center><h1>400 Bad Request</h1></center>
<center>No required SSL certificate was sent</center>
<hr><center>nginx/1.13.0</center>
</body>
</html>