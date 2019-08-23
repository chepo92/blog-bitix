package io.github.picodotdev.blogbitix.springcloudvault;

...

@SpringBootApplication
public class Main implements CommandLineRunner {

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    @Override
    public void run(String... args) {
        System.out.printf("Username: %s%n", username);
        System.out.printf("Password: %s%n", password);

        try (Connection connection = DriverManager.getConnection("jdbc:postgresql://127.0.0.1:5432/app", username, password)) {
            if (connection != null) {
                System.out.println("Connected to the database!");
            } else {
                System.out.println("Failed to make connection!");
            }
        } catch (SQLException e) {
            System.err.format("SQL State: %s\n%s", e.getSQLState(), e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Main.class, args);
    }
}
