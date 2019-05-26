RegistryBuilder builder = new RegistryBuilder();
builder.add(TapestryModule.class, HibernateCoreModule.class, HibernateModule.class, BeanValidatorModule.class, TapestryOfflineModule.class, GeneratorModule.class);
builder.add(new SpringModuleDef("applicationContext.xml"));

Registry registry = builder.build();
registry.performRegistryStartup();