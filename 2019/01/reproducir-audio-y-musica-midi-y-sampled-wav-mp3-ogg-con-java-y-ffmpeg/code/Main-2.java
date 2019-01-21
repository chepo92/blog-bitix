package io.github.picodotdev.blogbitix.javasound;

...

public class Main {

    public static void main(String[] args) throws Exception {
        printSupportedFileTypes();

        String format = args[0];
        switch (format) {
            case "midi":
                playMidi();
                break;
            case "wav":
                playWav();
                break;
            case "mp3":
                playMp3();
                break;
            case "ogg":
                playOgg();
                break;
        }
    }

    ...

    private static void playMidi() throws Exception {
        InputStream is = Main.class.getResourceAsStream("/midi.mid");

        Sequencer sequencer = MidiSystem.getSequencer();
        sequencer.open();
        sequencer.setSequence(is);

        System.out.printf("Midi duration: %d seconds%n", sequencer.getMicrosecondLength() / 1000000);

        sequencer.start();

        do  {
            Thread.sleep(100);
        } while (sequencer.isRunning());

        sequencer.close();
        is.close();
    }

    ...
}
