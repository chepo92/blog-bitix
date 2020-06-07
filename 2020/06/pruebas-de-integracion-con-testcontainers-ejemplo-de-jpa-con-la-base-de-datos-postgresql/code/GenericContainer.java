@Container
public GenericContainer redis = new GenericContainer<>("redis:5.0.3-alpine").withExposedPorts(6379);

String host = redis.getHost();
Integer port = redis.getFirstMappedPort();

Jedis jedis = new Jedis(host, port);
jedis.set("foo", "bar");