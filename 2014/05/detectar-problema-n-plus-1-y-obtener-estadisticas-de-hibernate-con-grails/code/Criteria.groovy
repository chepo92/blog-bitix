Criteria criteria = session.createCriteria(Autor.class);
criteria.setFetchMode("libros", FetchMode.EAGER);