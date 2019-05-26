public CommentsConnection getComments(Book book, String after, Long limit) {
    ...
}

@Batched
public List<List<Comment>> getComments(List<Book>, String after, Long start) {
    ...
}