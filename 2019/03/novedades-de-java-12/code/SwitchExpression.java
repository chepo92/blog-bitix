switch (day) {
    case MONDAY, FRIDAY, SUNDAY -> System.out.println(6);
    case TUESDAY                -> System.out.println(7);
    case THURSDAY, SATURDAY     -> System.out.println(8);
    case WEDNESDAY              -> System.out.println(9);
}

String numericString = switch (integer) {  
    case 0 -> "zero";  
    case 1, 3, 5, 7, 9 -> "odd";  
    case 2, 4, 6, 8, 10 -> "even";  
    default -> "N/A";  
};