...

public class Page {

    @Inject
    private PageRenderLinkSource pageLinkSource;

    @Inject
    private AnotherPage anotherPage;

    ...

    public AnotherPage void onActionFromDelete(Long id) {
        Link anotherPageLink = pageLinkSource.createPageRenderLink(AnotherPage.class);

        ComponentResources anotherPageResources = anotherPage.getRootComponent().getComponentResources();
        Link actionLink = anotherPageResources.createEventLink("delete");

        ...

        return AnotherPage.class;
    }
}