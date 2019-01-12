package io.github.picodotdev.plugintapestry.services;

...

public class AppModule {

    ...
    
    @Core
    @Contribute(JavaScriptStack.class)
    public static void contributeJavaScriptStack(OrderedConfiguration<StackExtension> configuration) {
        configuration.override("requirejs", StackExtension.library("classpath:/META-INF/resources/webjars/requirejs/2.3.5/require.js"));
        configuration.override("jquery-library", StackExtension.library("classpath:/META-INF/resources/webjars/jquery/3.3.1-1/jquery.min.js"));
        configuration.override("underscore-library", StackExtension.library("classpath:/META-INF/resources/webjars/underscore/1.9.0/underscore-min.js"));
    }
    
    ...
}