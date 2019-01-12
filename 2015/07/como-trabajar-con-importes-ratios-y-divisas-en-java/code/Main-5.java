// formating
MonetaryAmountFormat spainFormat = MonetaryFormats.getAmountFormat(new Locale("es", "ES"));
MonetaryAmountFormat usFormat = MonetaryFormats.getAmountFormat(new Locale("en", "US"));
MonetaryAmount fiveThousandEuro = Money.of(5000, euro);
		
System.out.println("formating");
System.out.printf("Formato de 5000 EUR localizado en España: %s\n", spainFormat.format(fiveThousandEuro));
System.out.printf("Formato de 5000 EUR localizado en Estados Unidos: %s\n", usFormat.format(fiveThousandEuro));

// Formato de 5000 EUR localizado en España: 5.000,00 EUR
// Formato de 5000 EUR localizado en Estados Unidos: EUR5,000.00