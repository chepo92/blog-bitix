package io.github.picodotdev.blogbitix.entitiesid.domain.product;

...

@SpringBootTest
@ContextConfiguration(initializers = { DefaultPostgresContainer.Initializer.class })
public class ProductRepositoryTest {

    @Autowired
    private ProductRepository productRepository;

    @Test
    void testRepositoryGenerateId() {
        // given
        ProductId id = productRepository.generateId();
        Product product = new Product(id, "Raspberry Pi", LocalDate.now(), new BigDecimal("80.0"), 10);

        // and
        productRepository.save(product);

        // then
        assertEquals(product, productRepository.findById(id).get());
    }
}