package java.awt;

import java.awt.peer.CanvasPeer;

public class Main {

   public static void main(String[] args) {
      System.out.println("Hello World!");
   }
}

---

int level = 0;  // indentation level
int size = 0;   // size of table

a += c + d;
a = (a + b) / (c * d);

---

function(longExpression1, longExpression2, longExpression3,
         longExpression4, longExpression5);


longName1 = longName2 * (longName3 + longName4 - longName5)
            + 4 * longname6;


void someMethod(int anArg, Object anotherArg, String yetAnotherArg,
        Object andStillAnother) {
   ...
}

---

if ((condition1 && condition2)
       || (condition3 && condition4)
       || !(condition5 && condition6)) {
   doSomething();
}

if (condition) {
   statements;
} else if (condition) {
   statements;
} else if (condition) {
   statements;
}

for (initialization; condition; update) {
   statements;
}

while (condition) {
   statements;
}

switch (condition) {
    case ABC:
        statements;
        /* falls through */
    case DEF:
        statements;
        break;
    case XYZ:
        statements;
        break;
    default:
        statements;
        break;
}