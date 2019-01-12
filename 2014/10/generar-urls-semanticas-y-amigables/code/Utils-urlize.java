package info.blogstack.misc;

...

public class Utils {

	...

	public static Object[] getContext(Post post) {
		String f = post.getSource().getAlias();
		String y = String.valueOf(post.getConsolidatedPublishDate().getYear());
		String m = StringUtils.leftPad(String.valueOf(post.getConsolidatedPublishDate().getMonthOfYear()), 2, "0");
		String e = Utils.urlize(post.getTitle());
		return new Object[] { f, y, m, e };
	}

	public static Object[] getContext(Label label) {
		String l = Utils.urlize(label.getName());
		return new Object[] { l };
	}

	public static String urlize(String text) {
		return Utils.transliterate(text.toLowerCase()).replaceAll("[^a-z1-9-]", "-").replaceAll("-+", "-").replaceAll("^-+", "").replaceAll("-+$", "");
	}
	
	public static String transliterate(String s) {
		try {
			Process p = Runtime.getRuntime().exec("iconv -f UTF-8 -t ASCII//TRANSLIT");
			Writer w = new OutputStreamWriter(p.getOutputStream());
			Reader r = new InputStreamReader(p.getInputStream());
			IOUtils.copy(new StringReader(s), w);
			w.close();

			Writer sw = new StringWriter();
			IOUtils.copy(r, sw);
			r.close();

			return sw.toString();
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	...
}