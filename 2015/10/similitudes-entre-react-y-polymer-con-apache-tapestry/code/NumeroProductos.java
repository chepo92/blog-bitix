package es.com.blogspot.elblogdepicodev.plugintapestry.components;

import org.apache.tapestry5.annotations.Property;
import org.apache.tapestry5.ioc.annotations.Inject;

import es.com.blogspot.elblogdepicodev.plugintapestry.services.dao.ProductoDAO;

public class NumeroProductos {

    @Inject
    ProductoDAO dao;

    @Property
    Long numero;

    void beginRender() {
        numero = dao.countAll();
    }
}