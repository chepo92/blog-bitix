package io.github.picodotdev.blogbitix.javasound;

...

public class Main {

    ...

    private static void playWav() throws Exception {
        InputStream is = Main.class.getResourceAsStream("/wav.wav");
        AudioInputStream ais = AudioSystem.getAudioInputStream(is);

        Clip clip = AudioSystem.getClip();
        clip.open(ais);

        System.out.printf("Audio format: %s%n", ais.getFormat());
        System.out.printf("Sampled duration: %d seconds%n", clip.getMicrosecondLength() / 1000000);

        clip.start();

        do  {
            Thread.sleep(100);
        } while (clip.isRunning());

        clip.close();
        ais.close();
    }

    ...
}
