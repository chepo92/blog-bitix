@Override
public File generatePage(String page, Object[] context, Map<String, String> params) throws IOException {
	File file = new File(to, getToPage(page, context, params).getPath());
	logger.info("Generating page «{}» ({}, {})...", page, file, params.toString());

	file.getParentFile().mkdirs();

	Writer w = new FileWriter(file);
	render(page, context, params, Globals.LOCALE, w);
	w.close();

	return file;
}

private void render(String page, Object[] context, Map<String, String> params, Locale locale, Writer writer) throws IOException {
	TypeCoercer coercer = Globals.registry.getService(TypeCoercer.class);
	OfflineComponentRenderer renderer = Globals.registry.getService("BlogStackOfflineComponentRenderer", OfflineComponentRenderer.class);

	EventContext activationContext = new ArrayEventContext(coercer, context);
	PageRenderRequestParameters requestParams = new PageRenderRequestParameters(page, activationContext, false);
	DefaultOfflineRequestContext requestContext = new DefaultOfflineRequestContext();
	for (Map.Entry<String, String> param : params.entrySet()) {
		requestContext.setParameter(param.getKey(), param.getValue());
	}
	requestContext.setLocale(locale);

	renderer.renderPage(writer, requestContext, requestParams);
}