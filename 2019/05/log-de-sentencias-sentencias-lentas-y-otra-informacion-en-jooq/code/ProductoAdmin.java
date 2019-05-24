package io.github.picodotdev.plugintapestry.pages.admin;

...
public class ProductoAdmin {

    ...

	public boolean hasProductos() {
		return source.getAvailableRows() > 0;
	}

    ...

	private void setModo(Modo modo, Producto producto) {
		switch (modo) {
            ...
			case LISTA:
				this.producto = null;
				this.source = new JooqGridDataSource(context, Producto.class) {

					private int count = -1;
					private List list = null;

					@Override
					public int getAvailableRows() {
						if (count == -1) {
							count = (int) dao.countAll();
						}
						return count;
					}

					@Override
					public List find(Pagination pagination) {
						if (list == null) {
							list = dao.findAll(pagination);
						}
						return list;
					}
				};
				break;

		}
		this.modo = modo;
	}
}