package io.github.picodotdev.blogbitix;

public class Bar {

   private String thing;

   public void Bar(String thing) {
       this.thing = thing;
   }

   public String getOtherThing(Bar other) {
       return other.thing;
   }

   public static void main(String[] args) {
       Bar bar1 = new Bar("one");
       Bar bar2 = new Bar("two");

       String thing = bar1.getOtherThing(bar2);

       System.out.println(thing);
   }
}