//
Resource resource = Resource.valueOf("script.coffee", ResourceType.JS);
Reader reader = new FileReader("path/to/script.coffee");
Writer writer = new FileWriter("path/to/script.js");

// Transforming a CoffeeScript file into a JavaScript file
new CoffeeScriptProcessor().process(resource, reader, writer);

// Using UglifyJs
new UglifyJsProcessor().process(resource, reader, writer);

//
Resource resource = Resource.valueOf("style.css", ResourceType.CSS);
Reader lessReader = new FileReader("path/to/style.less");
Reader sassReader = new FileReader("path/to/style.sass");
Writer writer = new FileWriter("path/to/style.css");

// Using Less
new LessCssProcessor().process(resource, lessReader, writer);

// Using Sass
new SassCssProcessor().process(resource, sassReader, writer);