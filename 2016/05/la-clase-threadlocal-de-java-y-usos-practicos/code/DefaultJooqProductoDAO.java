package io.github.picodotdev.plugintapestry.services.dao;

...

public class DefaultJooqProductoDAO implements GenericDAO<Producto>, JooqProductoDAO {

    ...

    @Override
    @Transactional(readOnly = true)
    public Producto findById(Long id) {
        // ThreadLocal example
        System.out.printf("Host (from service): %s%n", Globals.HOST.get());

        return context.selectFrom(PRODUCTO).where(PRODUCTO.ID.eq(id)).fetchOneInto(Producto.class);
    }
    
    ...
}