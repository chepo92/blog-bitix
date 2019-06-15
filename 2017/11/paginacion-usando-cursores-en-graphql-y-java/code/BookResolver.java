package io.github.picodotdev.blogbitix.graphql.resolver;

...

public class BookResolver implements GraphQLResolver<Book> {

    private LibraryRepository libraryRespository;

    public BookResolver(LibraryRepository libraryRespository) {
        this.libraryRespository = libraryRespository;
    }

    public String getIsbn(Book book) throws InterruptedException {
        System.out.printf("Getting ISBN %d...", book.getId());
        Thread.sleep(3000);
        System.out.printf("ok%n");
        return UUID.randomUUID().toString();
    }

    ...

    public CommentsConnection getComments(Book book, String after, Long limit) {
        Long idAfter = null;
        Long limitPlusOne = null;

        if (after != null) {
            idAfter = CommentEdge.fromGlobalId(after);
        }
        if (limit != null && limit < Long.MAX_VALUE) {
            limitPlusOne = limit + 1;
        }

        List<Comment> commentsPlusOne = libraryRespository.findComments(book.getId(), idAfter, limitPlusOne);
        Stream<Comment> stream = commentsPlusOne.stream();
        if (limit != null) {
            stream = stream.limit(limit);
        }
        List<Comment> comments = stream.collect(Collectors.toList());

        Comment firstComment = (!comments.isEmpty()) ? comments.get(0) : null;
        Comment lastComment = (!comments.isEmpty()) ? comments.get(comments.size() - 1) : null;

        String startCursor = (firstComment != null) ? CommentEdge.toGlobalId(firstComment) : null;
        String endCursor = (lastComment != null) ? CommentEdge.toGlobalId(lastComment) : null;

        boolean hasNextPage = commentsPlusOne.size() > comments.size();

        return new CommentsConnection(comments, new PageInfo(startCursor, endCursor, hasNextPage));
    }

    ...
}
