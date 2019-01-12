// rounding
MonetaryAmount euros = Money.of(12.34567, "EUR");
MonetaryAmount roundedEuros = euros.with(Monetary.getDefaultRounding());
		
System.out.println();
System.out.println("rounding");
System.out.printf("12.34567 EUR redondeados: %s\n", roundedEuros);

// 12.34567 EUR redondeados: EUR 12.35