public String getContentExcerpt() {
	// Obtener el documento que representa al contenido del que extraer el extracto
	Document document = Jsoup.parse(getContent());
	final StringBuffer excerpt = new StringBuffer();
	final List<Node> nodes = new ArrayList<>();
	// Recorrer los nodos del documento
	document.traverse(new NodeVisitor() {
		@Override
		public void tail(Node node, int depth) {
		}

		@Override
		public void head(Node node, int depth) {
			if (excerpt.length() > Globals.POST_EXCERPT_LENGHT) {
				// Se ha llegado al límite de caracteres del extracto, recoger los nodos posteriores
				nodes.add(node);
			}
			if (node instanceof TextNode) {
				// Añadir los caracteres al extracto, para contar el número de caracteres recorridos
				TextNode textNode = (TextNode) node;
				excerpt.append(textNode.text());
			}
		}
	});
	// Eliminar los nodos posteriores del extracto
	for (Node node : nodes) {
		node.remove();
	}
	// Obtener el extracto del documento
	return document.body().html();
}