...

import org.apache.tapestry5.ioc.annotations.Inject;
import org.apache.tapestry5.Link;

public class Component {
    ...

    @Inject
    private ComponentResources resources;

    ...

    public void method() {
        ...
        Link actionLink = resources.createEventLink(EventConstants.ACTION, contextArray);
        Link eventLink = resources.createEventLink("event", contextArray);
        ...
    }
}