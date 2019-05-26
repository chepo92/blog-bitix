// Java 9
Class.forName("org.postgresql.Driver");
Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost/database", "user", "password");
PreparedStatement statement = connection.prepareStatement("select * from user");
ResultSet resultSet = statement.executeQuery();

// Java 10
Class.forName("org.postgresql.Driver");
var connection = DriverManager.getConnection("jdbc:postgresql://localhost/database", "user", "password");
var statement = connection.prepareStatement("select * from user");
var resultSet = statement.executeQuery();