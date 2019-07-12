package io.github.picodotdev.blogbitix.graphql.dataloader;

import io.github.picodotdev.blogbitix.graphql.type.Book;
import org.dataloader.BatchLoaderEnvironment;
import org.dataloader.MappedBatchLoaderWithContext;
import org.springframework.stereotype.Component;

...

@Component
public class IsbnDataLoader implements MappedBatchLoaderWithContext<Book, String> {

   public IsbnDataLoader() {
   }

   @Override
   public CompletionStage<Map<Book, String>> load(Set<Book> books, BatchLoaderEnvironment environment) {
       Map<Book, String> isbns = books.stream().collect(Collectors.toMap(
           Function.identity(),
           Book::getIsbn
       ));
       return CompletableFuture.supplyAsync(() -> isbns);
   }
}
