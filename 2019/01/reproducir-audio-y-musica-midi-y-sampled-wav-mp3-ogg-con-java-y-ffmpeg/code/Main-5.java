package io.github.picodotdev.blogbitix.javasound;

...

public class Main {

    ...

    private static void playOgg() throws Exception {
        ProcessBuilder builder = new ProcessBuilder().command("ffmpeg", "-i", "src/main/resources/ogg.ogg", "-acodec", "pcm_s16le", "-ar", "44100", "-ac", "2", "-f", "wav", "pipe:1");
        Process process = builder.start();

        InputStream is = process.getInputStream();
        AudioInputStream ais = AudioSystem.getAudioInputStream(is);
        AudioFormat af = ais.getFormat();
        byte[] bytes = is.readAllBytes();

        Clip clip = AudioSystem.getClip();
        clip.open(af, bytes, 0, bytes.length);

        System.out.printf("Audio format: %s%n", ais.getFormat());
        System.out.printf("Sampled duration: %d seconds%n", clip.getMicrosecondLength() / 1000000);

        clip.start();

        do  {
            Thread.sleep(100);
        } while (clip.isRunning());

        clip.close();
        ais.close();
    }
}
