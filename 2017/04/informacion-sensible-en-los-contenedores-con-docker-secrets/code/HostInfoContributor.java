package io.github.picodotdev.blogbitix.dockerswarm;

...

@Component
public class HostInfoContributor implements InfoContributor {

    @Override
    public void contribute(Info.Builder builder) {
        Map<String, Object> details = new HashMap<>();
        try {
            ...

            File[] secrets = FileSystems.getDefault().getPath("/run/secrets/").toFile().listFiles();
            for(File file : secrets) {
                try {
                    String content = Files.lines(file.toPath()).collect(Collectors.joining("\n"));
                    details.put(file.getName().toString(), content);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        builder.withDetails(details);
    }
}
