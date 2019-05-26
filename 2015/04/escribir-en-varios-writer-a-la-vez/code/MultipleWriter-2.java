package io.github.picodotdev.writer;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;

class MultipleWriter extends Writer {

    private Writer[] writers;

    MultipleWriter(Writer... writers) {
        this.writers = writers;
    }
   
    public Writer append(final char c) throws IOException {
        doWriters(writer -> {
            writer.append(c);                
        });
        return this;
    }
   
    public Writer append(final CharSequence csq) throws IOException {
        doWriters(writer -> {
            writer.append(csq);
        });
        return this;
    }
   
    public Writer append(final CharSequence csq, final int start, final int end) throws IOException {
        doWriters(writer -> {
            writer.append(csq, start, end);
        });
        return this;
    }
   
    public void close() throws IOException {
        doWriters(writer -> {
            writer.close();
        });
    }
   
    public void flush() throws IOException {
        doWriters(writer -> {
            writer.flush();
        });
    }
   
    public void write(final char[] cbuf) throws IOException {
        doWriters(writer -> {
            writer.write(cbuf);
        });
    }
   
    public void write(final char[] cbuf, final int off, final int len) throws IOException {
        doWriters(writer -> {
            writer.write(cbuf, off, len);
        });
    }
   
    public void write(final int c) throws IOException {
        doWriters(writer -> {
            writer.write(c);
        });
    }
   
    public void write(final String str) throws IOException {
        doWriters(writer -> {
            writer.write(str);
        });
    }
   
    public void write(final String str, final int off, final int len) throws IOException {
        doWriters(writer -> {
            writer.write(str, off, len);
        });
    }
   
    private void doWriters(Command command) throws IOException {
        for (Writer w : writers) {
            command.process(w);
        }
    }

    private interface Command {
        public void process(Writer writer) throws IOException;
    }    
}