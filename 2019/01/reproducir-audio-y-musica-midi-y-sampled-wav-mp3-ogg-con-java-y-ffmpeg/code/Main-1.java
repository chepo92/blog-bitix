package io.github.picodotdev.blogbitix.javasound;

...

public class Main {

    public static void main(String[] args) throws Exception {
        printSupportedFileTypes();

        ...
    }

    private static void printSupportedFileTypes() {
        String audioFileTypes = Arrays.stream(AudioSystem.getAudioFileTypes()).map(it -> it.getExtension()).collect(Collectors.joining(", "));
        String midiFileTypes = Arrays.stream(MidiSystem.getMidiFileTypes()).mapToObj(it -> String.valueOf(it)).collect(Collectors.joining(", "));

        System.out.printf("Audio file types: %s%n", audioFileTypes);
        System.out.printf("Midi file types: %s%n", midiFileTypes);
        System.out.printf("Mixers info: %s%n", Arrays.stream(AudioSystem.getMixerInfo()).map(it -> it.toString()).collect(Collectors.joining(", ")));
    }

    ...
}
