<%@ page import="org.owasp.encoder.Encoder" %>

<%-- HTML Content context --%>
<body>
    <%= Encode.forHtml(text) %>
</body>

<%-- HTML Attribute context --%>
<input type="text" name="address" value="<%= Encode.forHtmlAttribute(address) %>" />

<%-- HTML Textarea context --%>
<textarea name="text"><%= Encode.forHtmlContent(textAreaContent %></textarea>

<%-- Javascript Block context --%>
<script type="text/javascript">
    var msg = "<%= Encode.forJavaScriptBlock(message) %>";
    alert(msg);
</script>

<%-- Javascript Variable context --%>
<button onclick="alert('<%= Encode.forJavaScriptAttribute(alertMsg) %>');">Action</button>