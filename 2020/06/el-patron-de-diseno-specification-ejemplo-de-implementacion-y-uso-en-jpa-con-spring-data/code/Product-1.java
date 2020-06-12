package io.github.picodotdev.blogbitix.patronspecification.domain.product;

...

@Entity
@Table(name = "Product")
public class Product implements Specificable<Product> {

    ...

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private LocalDate date;
    private BigDecimal price;
    private Integer units;

    public Product() {
    }

    public Product(String name, LocalDate date, BigDecimal price, Integer units) {
        this.name = name;
        this.date = date;
        this.price = price;
        this.units = units;
    }

    ...

    public boolean isCheap() {
        return ...;
    }

    public boolean isLongTerm() {
        return ...;
    }

    public boolean isOverstock() {
        return ...;
    }
}