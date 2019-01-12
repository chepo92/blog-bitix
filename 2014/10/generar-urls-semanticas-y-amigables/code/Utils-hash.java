package info.blogstack.misc;

...

public class Utils {

	public static String getHash(Post post) {
		return Utils.getHash(Utils.getContext(post));
	}

	public static String getHash(Object[] context) {
		try {
			String[] s = new String[context.length];
			for (int i = 0; i < s.length; ++i) {
				s[i] = "%s";
			}
			String ss = String.format(StringUtils.join(s, "/"), context);
			byte[] h = MessageDigest.getInstance("MD5").digest(ss.getBytes());
			return Base64.encodeBase64String(h);
		} catch (NoSuchAlgorithmException e) {
			throw new RuntimeException(e);
		}
	}

	...

	public static Object[] getContext(Post post) {
		String f = post.getSource().getAlias();
		String y = String.valueOf(post.getConsolidatedPublishDate().getYear());
		String m = StringUtils.leftPad(String.valueOf(post.getConsolidatedPublishDate().getMonthOfYear()), 2, "0");
		String e = Utils.urlize(post.getTitle());
		return new Object[] { f, y, m, e };
	}

	...
}