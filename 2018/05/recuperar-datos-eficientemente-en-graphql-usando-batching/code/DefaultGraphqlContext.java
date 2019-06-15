package io.github.picodotdev.blogbitix.graphql.misc;

...

public class DefaultGraphQLContext extends GraphQLContext {

    private graphql.GraphQLContext data;

    public DefaultGraphQLContext(graphql.GraphQLContext data, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
        super(httpServletRequest, httpServletResponse, null, null, null);
        this.data = data;
    }

    public DefaultGraphQLContext(graphql.GraphQLContext data, Session session, HandshakeRequest handshakeRequest) {
        super(null, null, session, handshakeRequest, null);
        this.data = data;
    }

    public DefaultGraphQLContext(graphql.GraphQLContext data) {
        super(null, null, null, null, null);
        this.data = data;
    }

    public graphql.GraphQLContext getData() {
        return data;
    }
}