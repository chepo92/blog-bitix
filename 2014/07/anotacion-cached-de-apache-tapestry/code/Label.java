package io.github.picodotdev.tapestry.components;

...

public class Label {

    @Parameter
    private Label label;

    @Parameter
    private Integer page;

    @Inject
    private MainService service;

    void setupRender() {
        page = (page == null) ? 0 : page;
    }

    /**
     * Método que devuelve los articulos publicados o actualizados más recientemente de una etiqueta.
     */
    @Cached(watch = "label")
    public List<Post> getPosts() {
        List<Sort> sorts = new ArrayList<>();
        sorts.add(new Sort("date", Direction.DESCENDING));
        Pagination pagination = new Pagination(Globals.NUMBER_POSTS_PAGE * page, Globals.NUMBER_POSTS_PAGE * (page + 1), sorts);
        return service.getPostDAO().findAllByLabel(label, pagination);
    }

    @Cached(watch = "label")
    public Long getPostsCount() {
        return service.getPostDAO().countBy(label);
    }
}