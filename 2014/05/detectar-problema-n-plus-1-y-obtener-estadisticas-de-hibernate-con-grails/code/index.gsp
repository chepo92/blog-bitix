<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="io.github.picodotdev.grails.log.HibernateLogger" %>
<%
	SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss Z")
%>
<!DOCTYPE html>
<html>
<head>
<title>Estadísticas de Hibernate</title>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js" type="text/javascript"></script>
<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet"/>
</head>
<body>
	<g:set var="o" value="${null}" />

	<div class="container-fluid">
		<h1>Estadísticas de Hibernate</h1>
	
		<g:if test="${estadisticas.statisticsEnabled}">
			<g:link action="disableStatistics" class="btn btn-primary">Deshabilitar estadísticas</g:link>
		</g:if>
		<g:else>
			<g:link action="enableStatistics" class="btn btn-primary">Habilitar estadísticas</g:link>
		</g:else>
		<g:if test="${estadisticas.statisticsEnabled}">
			<g:link action="clearEstadisticas" class="btn btn-primary">Reiniciarlizar estadísticas</g:link>
		</g:if>
		<g:link action="clearMensajesHibernate" class="btn btn-primary">Reiniciarlizar mensajes de Hibernate</g:link>
		<g:link action="logSummary" class="btn btn-primary">Informe resumen</g:link>

		<h2>Estadísticas</h2>
		<g:if test="${!estadisticas.statisticsEnabled}">
			Las estadísticas de Hibernate no están habilitadas.
		</g:if>
		<g:else>
			<div class="row">
				<div class="col-md-4">
					<h3>Conexiones, sesiones y transacciones</h3>
					<ul class="list-group">
						<li class="list-group-item">StartTime  <span class="badge">${sdf.format(new Date(estadisticas.startTime))}</span></li>
						<li	class="list-group-item" title="Get the global number of connections asked by the sessions (the actual number of connections used may be much smaller depending whether you use a connection pool or not)">ConnectCount <span class="badge">${estadisticas.connectCount}</span></li>
						<li class="list-group-item" title="The number of prepared statements that were released">CloseStatementCount <span class="badge">${estadisticas.closeStatementCount}</span></li>
						<li class="list-group-item" title="Global number of sessions opened">SessionOpenCount <span class="badge">${estadisticas.sessionOpenCount}</span></li>
						<li class="list-group-item" title="Global number of sessions closed">SessionCloseCount <span class="badge">${estadisticas.sessionCloseCount}</span></li>
						<li class="list-group-item" title="The number of transactions we know to have been successful">SuccessfulTransactionCount <span class="badge">${estadisticas.successfulTransactionCount}</span></li>
						<li class="list-group-item" title="The number of transactions we know to have completed">TransactionCount <span class="badge">${estadisticas.transactionCount}</span></li>
					</ul>
				</div>
				<div class="col-md-4">
					<h3>Sentencias</h3>
					<ul class="list-group">
						<li class="list-group-item" title="Get global number of executed queries">QueryExecutionCount <span class="badge">${estadisticas.queryExecutionCount}</span></li>
						<li class="list-group-item" title="The number of prepared statements that were acquired">PrepareStatementCount <span class="badge">${estadisticas.prepareStatementCount}</span></li>
						<li class="list-group-item" title="Get all executed query strings">Queries: ${estadisticas.queries.join(', ')}</li>
						<li class="list-group-item" title="Get the query string for the slowest query">QueryExecutionMaxTimeQueryString <span class="badge">${estadisticas.queryExecutionMaxTimeQueryString}</span></li>
					</ul>
				</div>
				<div class="col-md-4">
					<h3>Entidades</h3>
					<ul class="list-group">
						<li class="list-group-item" title="Get global number of entity fetchs">EntityFetchCount <span class="badge">${estadisticas.entityFetchCount}</span></li>
						<li class="list-group-item" title="Get global number of entity loads">EntityLoadCount <span class="badge">${estadisticas.entityLoadCount}</span></li>
						<li class="list-group-item" title="Get global number of entity inserts">EntityInsertCount <span class="badge">${estadisticas.entityInsertCount}</span></li>
						<li class="list-group-item" title="Get global number of entity updates">EntityUpdateCount <span class="badge">${estadisticas.entityUpdateCount}</span></li>
						<li class="list-group-item" title="Get global number of entity deletes">EntityDeleteCount <span class="badge">${estadisticas.entityDeleteCount}</span></li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<h3>Colecciones</h3>
					<ul class="list-group">
						<li class="list-group-item"	title="Global number of collections fetched">CollectionFetchCount <span class="badge">${estadisticas.collectionFetchCount}</span></li>
						<li class="list-group-item"	title="Global number of collections loaded">CollectionLoadCount <span class="badge">${estadisticas.collectionLoadCount}</span></li>
						<li class="list-group-item" title="Global number of collections recreated">CollectionRecreateCount <span class="badge">${estadisticas.collectionRecreateCount}</span></li>
						<li class="list-group-item"	title="Global number of collections updated">CollectionUpdateCount <span class="badge">${estadisticas.collectionUpdateCount}</span></li>
						<li class="list-group-item"	title="Global number of collections removed">CollectionRemoveCount <span class="badge">${estadisticas.collectionRemoveCount}</span></li>
					</ul>
				</div>
				<div class="row">
					<div class="col-md-4">
						<h3>Cache</h3>
						<ul class="list-group">
							<li class="list-group-item"	title="Get the global number of flush executed by sessions (either implicit or explicit)">FlushCount <span class="badge">${estadisticas.flushCount}</span></li>
							<li class="list-group-item"	title="The number of StaleObjectStateExceptions that occurred">OptimisticFailureCount <span class="badge">${estadisticas.optimisticFailureCount}</span></li>
							<li class="list-group-item"	title="Get the global number of cached queries successfully retrieved from cache">QueryCacheHitCount <span class="badge">${estadisticas.queryCacheHitCount}</span></li>
							<li class="list-group-item"	title="Get the global number of cached queries *not* found in cache">QueryCacheMissCount <span class="badge">${estadisticas.queryCacheMissCount}</span></li>
							<li class="list-group-item"	title="Get the global number of cacheable queries put in cache">QueryCachePutCount <span class="badge">${estadisticas.queryCachePutCount}</span></li>
							<li class="list-group-item"	title="Get the time in milliseconds of the slowest query">QueryExecutionMaxTime	<span class="badge">${estadisticas.queryExecutionMaxTime}</span></li>
							<li class="list-group-item"	title="Global number of cacheable entities/collections successfully retrieved from the cache">SecondLevelCacheHitCount <span class="badge">${estadisticas.secondLevelCacheHitCount}</span></li>
							<li class="list-group-item"	title="Global number of cacheable entities/collections not found in the cache and loaded from the database">SecondLevelCacheMissCount <span class="badge">${estadisticas.secondLevelCacheMissCount}</span></li>
							<li class="list-group-item"	title="Global number of cacheable entities/collections put in the cache">SecondLevelCachePutCount <span class="badge">${estadisticas.secondLevelCachePutCount}</span></li>
						</ul>
					</div>
				</div>
			</div>
	
			<h3>Detalles entidades</h3>
			<div class="row">
				<div class="col-md-12">
					<% o = estadisticas.entityNames.sort() %> 
					<g:each in="${o}" var="n" status="i">
						<g:set var="entityStatistics" value="${estadisticas.getEntityStatistics(n)}" />
			
						<g:if test="${(i % 3) == 0}">
							<div class="row">
						</g:if>
			
						<div class="col-md-4">					
							<ul class="list-group">
								<li class="list-group-item"><b>${n}</b></li>
								<li class="list-group-item">DeleteCount <span class="badge">${entityStatistics.deleteCount}</span></li>
								<li class="list-group-item">FetchCount <span class="badge">${entityStatistics.fetchCount}</span></li>
								<li class="list-group-item">InsertCount <span class="badge">${entityStatistics.insertCount}</span></li>
								<li class="list-group-item">LoadCount <span class="badge">${entityStatistics.loadCount}</span></li>
								<li class="list-group-item">OptimisticFailureCount <span class="badge">${entityStatistics.optimisticFailureCount}</span></li>
								<li class="list-group-item">UpdateCount <span class="badge">${entityStatistics.updateCount}</span></li>
							</ul>
						</div>
			
						<g:if test="${(i % 3) == 2 || o.length == (i + 1) }">
							</div>
						</g:if>
					</g:each>
				</div>
			</div>
				
			<h3>Detalles colecciones</h3>
			<div class="row">
				<div class="col-md-12">
					<% o = estadisticas.collectionRoleNames.sort() %>
					<g:each in="${o}" var="n" status="i">
						<g:set var="collectionStatistics" value="${estadisticas.getCollectionStatistics(n)}" />
			
						<g:if test="${(i % 3) == 0}">
							<div class="row">
						</g:if>
			
						<div class="col-md-4">
							<ul class="list-group">
								<li class="list-group-item"><b>${n}</b></li>
								<li class="list-group-item">FetchCount <span class="badge">${collectionStatistics.fetchCount}</span></li>
								<li class="list-group-item">LoadCount <span class="badge">${collectionStatistics.loadCount}</span></li>
								<li class="list-group-item">RecreateCount <span class="badge">${collectionStatistics.recreateCount}</span></li>
								<li class="list-group-item">RemoveCount <span class="badge">${collectionStatistics.removeCount}</span></li>
								<li class="list-group-item">UpdateCount <span class="badge">${collectionStatistics.updateCount}</span></li>
							</ul>
						</div>
			
						<g:if test="${(i % 3) == 2 || o.length == (i + 1) }">
							</div>
						</g:if>
					</g:each>
				</div>
			</div>
	
			<h3>Detalles cache segundo nivel</h3>
			<div class="row">
				<div class="col-md-12">
					<% o = estadisticas.secondLevelCacheRegionNames.sort() %>
					<g:each	in="${o}" var="n" status="i">
						<g:set var="secondLevelCacheStatistics"	value="${estadisticas.getSecondLevelCacheStatistics(n)}" />
								
						<g:if test="${(i % 3) == 0}">
							<div class="row">
						</g:if>
								
						<g:if test="${secondLevelCacheStatistics}">
							<ul>
								<li class="list-group-item"><b>${n}</b></li>
								<li class="list-group-item">ElementCountInMemory <span class="badge">${secondLevelCacheStatistics.elementCountInMemory}</span></li>
								<li>ElementCountOnDisk <span class="badge">${secondLevelCacheStatistics.elementCountOnDisk}</span></li>
								<li>Entries <span class="badge">${secondLevelCacheStatistics.entries}</span></li>
								<li>HitCount <span class="badge">${secondLevelCacheStatistics.hitCount}</span></li>
								<li>MissCount <span class="badge">${secondLevelCacheStatistics.missCount}</span></li>
								<li>PutCount <span class="badge">${secondLevelCacheStatistics.putCount}</span></li>
								<li>izeInMemory <span class="badge">${secondLevelCacheStatistics.sizeInMemory}</span></li>
							</ul>
						</g:if>
								
						<g:if test="${(i % 3) == 2 || o.length == (i + 1) }">
							</div>
						</g:if>
					</g:each>
				</div>
			</div>
		</g:else>

		<h3>Mensajes de Hibernate</h3>
		<div class="btn-group">
			<button id="hql" type="button" class="btn btn-default active">HQL (${HibernateLogger.get().findAll({ it.type == HibernateLogger.Type.HQL }).size()})</button>
			<button id="param" type="button" class="btn btn-default active">PARAM (${HibernateLogger.get().findAll({ it.type == HibernateLogger.Type.PARAM }).size()})</button>
			<button id="sql" type="button" class="btn btn-default active">SQL (${HibernateLogger.get().findAll({ it.type == HibernateLogger.Type.SQL }).size()})</button>
			<button id="exception" type="button" class="btn btn-default active">EXCEPTION (${HibernateLogger.get().findAll({ it.type == HibernateLogger.Type.EXCEPTION }).size()})</button>
			<button id="text" type="button" class="btn btn-default active">TEXT (${HibernateLogger.get().findAll({ it.type == HibernateLogger.Type.TEXT }).size()})</button>
		</div>
		<div class="row">
			<div class="col-md-12">
				<%
					o = HibernateLogger.get()
				%>
				<table id="logs" class="table table-striped">
					<tr>
						<th class="col-md-2">Fecha</th>
						<th>Tipo</th>
						<th>Tiempo</th>
						<th>Mensaje</th>
					</tr>
					<g:each	in="${o}" var="n" status="i">
						<g:if test="${(n.type == HibernateLogger.Type.HQL && n.hql) || (n.type == HibernateLogger.Type.PARAM && n.param) || ((n.type == HibernateLogger.Type.SQL) && n.prepared && n.sql) || ((n.type == HibernateLogger.Type.EXCEPTION) && n.exception.messsage) || ((n.type == HibernateLogger.Type.TEXT) && n.text)}">
							<tr class="${n.type}">
								<td>${sdf.format(n.date)}</td>
								<td>${n.type}</td>
								<g:if test="${n.type == HibernateLogger.Type.HQL && n.hql}">
									<td></td>
									<td>${n.hql}</td>
								</g:if>
								<g:if test="${n.type == HibernateLogger.Type.PARAM && n.param}">
									<td></td>
									<td>${n.param}</td>
								</g:if>
								<g:if test="${n.type == HibernateLogger.Type.SQL && n.prepared && n.sql}">
									<td>${(n.elapsed > 0)?n.elapsed:''}</td>
									<td>${n.prepared}<br/><br/>${n.sql}</td>
								</g:if>
								<g:if test="${n.type == HibernateLogger.Type.EXCEPTION && n.exception.messsage}">
									<td colspan="2">${n.exception.messsage}</th>
								</g:if>
								<g:if test="${n.type == HibernateLogger.Type.TEXT && n.text}">
									<td colspan="2">${n.text}</th>
								</g:if>
							</tr>
						</g:if>
					</g:each>
				</table>
			</div>
		</div>
	</div>
	
	<r:script>
		$(document).ready(function() {
			$('#hql').click(function() {
				$(this).toggleClass('active');
				var b = $(this).hasClass('active');
				if (b) {
					$('#logs tr.HQL').show();
				} else {
					$('#logs tr.HQL').hide();
				}
			});
			
			$('#param').click(function() {
				$(this).toggleClass('active');
				var b = $(this).hasClass('active');
				if (b) {
					$('#logs tr.PARAM').show();
				} else {
					$('#logs tr.PARAM').hide();
				}
			});
			
			$('#sql').click(function() {
				$(this).toggleClass('active');
				var b = $(this).hasClass('active');
				if (b) {
					$('#logs tr.SQL').show();
				} else {
					$('#logs tr.SQL').hide();
				}
			});
			
			$('#exception').click(function() {
				$(this).toggleClass('active');
				var b = $(this).hasClass('active');
				if (b) {
					$('#logs tr.EXCEPTION').show();
				} else {
					$('#logs tr.EXCEPTION').hide();
				}
			});
			
			$('#text').click(function() {
				$(this).toggleClass('active');
				var b = $(this).hasClass('active');
				if (b) {
					$('#logs tr.TEXT').show();
				} else {
					$('#logs tr.TEXT').hide();
				}
			});
		});
	</r:script>
</body>
</html>