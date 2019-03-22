NumberFormat followers = NumberFormat.getCompactNumberInstance(Locale.US, NumberFormat.Style.SHORT);
followers.setMaximumFractionDigits(1);
System.out.println(followers.format(5412) + " followers");

// Resultado: 5.4K followers

NumberFormat number = NumberFormat.getCompactNumberInstance(Locale.US, NumberFormat.Style.SHORT);
System.out.println(number.format(1000)); 

// Resultado: 1K
