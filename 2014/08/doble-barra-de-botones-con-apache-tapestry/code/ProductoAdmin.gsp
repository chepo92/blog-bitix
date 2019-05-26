...

<g:set var="botonesEdicionBlock">
	<div class="btn-toolbar">
		<input type="submit" class="btn btn-primary" value="${message(code: 'guardar')}" role="button"/>
		<g:if test="${producto.id}">
			<g:link action="eliminar" params="${[id: producto.id]}" role="button" class="btn btn-danger" style="color: white;">Eliminar</a>
		</t:if>
		<input type="submit" class="btn btn-danger" value="{message(code: 'guardar')}" role="button"/>
	</div>
</g:set>

<g:form ...>
	...

	${botonesEdicionBlock}

	<div style="margin-top: 10px;">
		...
	</div>

	${botonesEdicionBlock}
</g:form>