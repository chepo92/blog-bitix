String numericString = switch(integer) { 
   case 0 -> "zero"; 
   case 1, 3, 5, 7, 9 -> "odd"; 
   case 2, 4, 6, 8, 10 -> "even"; 
   default -> "N/A"; 
};