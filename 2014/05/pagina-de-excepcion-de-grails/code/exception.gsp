<%@ page import="java.text.SimpleDateFormat" %>
<%
	SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss Z")
%>
<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main" />
    <title>Excepción</title>
	<g:if env="development"><link rel="stylesheet" href="${resource(dir: 'css', file: 'errors.css')}" type="text/css"></g:if>
</head>
<body>
	<div>
		<div>
			<h1>Detalles del error</h1>	
			<g:renderException exception="${exception}"/>
			
			<pre><g:each in="${exception.stackTraceLines}">${it.encodeAsHTML()}</g:each></pre>
	
			<div>
				<div>
					<h2>Parámetros</h2>
					<g:if test="params">
						<g:set var="paramsKeys" value="${params.keySet()}"/>
						<% paramsKeys.removeAll(['action', 'controller']) %>
						<ul style="list-style-type: none;">
							<g:each in="${paramsKeys}" var="param">
								<g:if test="${params.list(param).size() == 1}">
									<li class="list-group-item"><b>${param}</b>: ${params.get(param)}</li>
								</g:if>
								<g:else>
									<li class="list-group-item"><b>${param}</b>: ${params.list(param)}</li>
								</g:else>
							</g:each>
						</ul>
					</g:if>
				</div>	
				<div>
					<h2>Cabeceras</h2>
					<g:if test="request.headerNames ">
						<g:set var="headers" value="${request.headerNames}"/>
						<% 
							headers = Collections.list(headers)
							headers.removeAll(['cookie'])
						%>
						<ul style="list-style-type: none;">
							<g:each in="${headers}" var="header">
								<li class="list-group-item"><b>${header}</b>: ${request.getHeader(header)}</li>
							</g:each>
						</ul>
					</g:if>
				</div>
				<div>
					<h2>Cookies</h2>
					<g:if test="request.cookies">
						<g:set var="cookies" value="${request.cookies}"/>
						<ul style="list-style-type: none;">
							<g:each in="${cookies}" var="cookie">
								<li class="list-group-item"><b>${cookie.name}</b>: ${cookie.value}</li>
							</g:each>
						</ul>
					</g:if>
				</div>
			</div>
			<div>
				<div>
					<h2>Sesión</h2>
					<ul style="list-style-type: none;">
						<li class="list-group-item"><b>Fecha creación</b>: ${sdf.format(new Date(session.getCreationTime()))}</li>
					</ul> 
					<g:if test="reqeust.getSession(false)">
						<g:set var="sessionKeys" value="${session.getAttributeNames()}"/>
						<ul style="list-style-type: none;">
							<g:each in="${sessionKeys}" var="s">
								<li class="list-group-item"><b>${s}</b>: ${session.getAttribute(s)}</li>
							</g:each>
						</ul>
					</g:if>
					<g:else>
						No hay sesión
					</g:else>
				</div>
			</div>
		</div>
	</div>
</body>
</html>