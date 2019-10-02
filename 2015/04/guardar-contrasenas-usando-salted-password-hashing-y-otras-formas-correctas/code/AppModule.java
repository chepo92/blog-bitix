...
public static void contributeWebSecurityManager(Configuration<Realm> configuration) {
    // Realm básico
    //ExtendedPropertiesRealm realm = new ExtendedPropertiesRealm("classpath:shiro-users.properties");

    // Realm con «salted password hashing» y «salt»
    Realm realm = new es.com.blogspot.elblogdepicodev.plugintapestry.misc.Realm();

    configuration.add(realm);
}
...