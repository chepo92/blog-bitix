package io.github.picodotdev.blogbitix.sitemconverter;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.overzealous.remark.Remark;
import com.overzealous.remark.Options;

public class Main {

    public static void main(String[] args) throws Exception {
        Stream<Path> files = Files.walk(Paths.get("../picodotdev.github.io/"), 5);
        files.filter(path -> path.getFileName().toFile().getName().endsWith(".html") && path.getFileName()).forEach(path -> {
            try {
                System.out.println(path.toString());

                // Obtener el HTML de una página
                String html = Files.readString​(path);

                // Contenido HTML
                System.out.println(html);

                // Parsear el contenido HTML con jsoup
                Document document = Jsoup.parse(html);

                // Obtener los elementos de contenido de la página con selectores
                Elements article = document.select("article");

                // Opciones para convertir a markdown
                Options options = Options.markdown();
                options.preserveRelativeLinks = true;
                options.inlineLinks = true;
                String baseUri = "https://picodotdev.github.io/blog-bitix/";

                // Convertir a markdown
                String markdown = new Remark(options).convertFragment(article.html(), baseUri);

                // Contenido markdown
                System.out.println(markdown);
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
    }
}