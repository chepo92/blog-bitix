public class PlugInStack implements JavaScriptStack {

  ...

  @Override
  public List<Asset> getJavaScriptLibraries() {
    List<Asset> r = new ArrayList<>();
    r.add(assetSource.getClasspathAsset("META-INF/assets/tapestry5/bootstrap/js/dropdown.js"));
    r.add(new UrlAsset("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/js/bootstrap-select.min.js", null));
    return r;
  }
	
  ...

  @Override
  public List<StylesheetLink> getStylesheets() {
    List<StylesheetLink> r = new ArrayList<>();
    r.add(new StylesheetLink("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/css/bootstrap-select.min.css"));
    r.add(new StylesheetLink(assetSource.getContextAsset("css/app.css", null)));
    return r;
  }

  ...
}