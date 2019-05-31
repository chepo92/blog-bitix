import org.jooq.DSLContext;
...
private DSLContext context;
...
context.selectFrom(Tables.PRODUCTO)
    .orderBy(PRODUCTO.CANTIDAD, PRODUCTO.ID)
    .seek(3l, 2l)
    .limit(10)
    .fetchInto(Producto.class);