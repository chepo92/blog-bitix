package io.github.picodotdev.blogbitix.entitiesid.domain.product;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Product")
public class Product {

    @Id
    @EmbeddedId
    private ProductId id;

    private String name;
    private LocalDate date;
    private BigDecimal price;
    private Integer units;

    public Product() {
    }

    public Product(ProductId id, String name, LocalDate date, BigDecimal price, Integer units) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.price = price;
        this.units = units;
    }

    ...

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null)
            return false;
        if (!(o instanceof Product))
            return false;

        Product that = (Product) o;
        return Objects.equals(this.id, that.id);
    }
}