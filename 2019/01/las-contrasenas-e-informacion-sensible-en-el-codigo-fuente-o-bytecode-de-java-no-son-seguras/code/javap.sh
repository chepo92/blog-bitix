[picodotdev@archlinux Descargas]$ javap -c Main.class
Compiled from "Main.java"
public class Main {
  public Main();
    Code:
       0: aload_0
       1: invokespecial #1                  // Method java/lang/Object."<init>":()V
       4: return

  public static void main(java.lang.String[]);
    Code:
       0: ldc           #2                  // String Mz6K3P9rDZ7G6wH
       2: astore_1
       3: getstatic     #3                  // Field java/lang/System.out:Ljava/io/PrintStream;
       6: ldc           #4                  // String Hello World!
       8: invokevirtual #5                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V
      11: return
}