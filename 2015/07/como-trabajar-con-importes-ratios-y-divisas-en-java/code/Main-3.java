// aritmetic
MonetaryAmount seventeenEuros = fiveEuro.add(twelveEuro);
MonetaryAmount sevenEuros = twelveEuro.subtract(fiveEuro);
MonetaryAmount tenEuro = fiveEuro.multiply(2);
MonetaryAmount twoPointFiveEuro = fiveEuro.divide(2);
		
System.out.printf("5 EUR + 12 EUR: %s\n", seventeenEuros);
System.out.printf("12 EUR - 5 EUR: %s\n", sevenEuros);
System.out.printf("5 EUR * 2: %s\n", tenEuro);
System.out.printf("5 EUR / 2: %s\n", twoPointFiveEuro);

// 5 EUR + 12 EUR: EUR 17
// 12 EUR - 5 EUR: EUR 7
// 5 EUR * 2: EUR 10
// 5 EUR / 2: EUR 2.5
		 
// negative
MonetaryAmount minusSevenEuro = fiveEuro.subtract(twelveEuro);
		
System.out.println("negative");
System.out.printf("5 EUR - 12 EUR: %s\n", minusSevenEuro);

// 5 EUR - 12 EUR: EUR -7