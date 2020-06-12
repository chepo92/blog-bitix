package io.github.picodotdev.blogbitix.patronspecification.domain.product;

import io.github.picodotdev.blogbitix.patronspecification.specification.Specificable;
import io.github.picodotdev.blogbitix.patronspecification.specification.Specification;

...

@Entity
@Table(name = "Product")
public class Product implements Specificable<Product> {

    ...

    @Override
    public boolean satisfies(Specification<Product> specification) {
        return specification.isSatisfied(this);
    }

    ...
}