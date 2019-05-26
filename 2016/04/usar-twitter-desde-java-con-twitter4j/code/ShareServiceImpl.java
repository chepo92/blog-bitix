public class ShareServiceImpl implements ShareService {
  ...

	public ShareServiceImpl(MainService service) {
		this.service = service;

		ConfigurationBuilder cb = new ConfigurationBuilder().setOAuthConsumerKey((String) service.getConfiguration().get().get("twitter.consumerKey"))
				.setOAuthConsumerSecret((String) service.getConfiguration().get().get("twitter.consumerSecret"))
				.setOAuthAccessToken((String) service.getConfiguration().get().get("twitter.accessToken"))
				.setOAuthAccessTokenSecret((String) service.getConfiguration().get().get("twitter.accessTokenSecret"));
		TwitterFactory tf = new TwitterFactory(cb.build());
		twitter = tf.getInstance();
	}
	
	private void twitter(PostRecord post, String message) throws TwitterException {
		logger.info("Tweetting {} as «{}»", post.getId(), message);

		twitter.updateStatus(message);
	}
	
	...
}