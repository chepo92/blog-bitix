package io.github.picodotdev.plugintapestry.services;

public class AppModule {
    ...
    
    public static void contributeClasspathAssetAliasManager(MappedConfiguration configuration) {
        configuration.add("webjars", "META-INF/resources/webjars");
    }

    ...
}