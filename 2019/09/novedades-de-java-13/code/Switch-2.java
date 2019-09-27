String numericString = switch (integer) { 
   case 0 -> {
       String value = calculateZero();
       yield value;
   } ; 
   case 1, 3, 5, 7, 9 -> {
       String value = calculateOdd();
       yield value;
   };
   case 2, 4, 6, 8, 10 -> {
       String value = calculateEven();
       yield value;
   };
   default -> {
       String value = calculateDefault();
       yield value;
   };
};