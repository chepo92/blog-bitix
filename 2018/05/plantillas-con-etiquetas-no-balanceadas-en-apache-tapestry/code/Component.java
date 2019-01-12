public Component {

   ...

    public boolean isOpen() {
        return (i % 3 == 0);
    }

    public boolean isClose() {
        return (i + 1 % 3 == 0 || isLast());
    }

    public boolean isLast() {
        return elements.indexOf(element) == elements.size() - 1;
    }

    @Cached
    public Map getTags() {
        Map<String, String> m = new HashMap<>();
        m.put("open", "<div class=\"row\"><div class=\"col-xs-12 col-md-4\">");
        m.put("close", "</div></div>");        
        return m;
    }
}