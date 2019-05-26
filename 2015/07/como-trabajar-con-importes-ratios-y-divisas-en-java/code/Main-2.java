// getting currency, the numeric amount and precision
MonetaryAmount amount = Money.of(123.45, euro);		
		
System.out.printf("123.45 EUR (currency): %s\n", amount.getCurrency());
System.out.printf("123.45 EUR (long): %s\n", amount.getNumber().longValue());
System.out.printf("123.45 EUR (number): %s\n", amount.getNumber());
System.out.printf("123.45 EUR (fractionNumerator): %s\n", amount.getNumber().getAmountFractionNumerator());
System.out.printf("123.45 EUR (fractionDenominator): %s\n", amount.getNumber().getAmountFractionDenominator());
System.out.printf("123.45 EUR (amount, BigDecimal): %s\n", amount.getNumber().numberValue(BigDecimal.class));

// 123.45 EUR (currency): EUR
// 123.45 EUR (long): 123
// 123.45 EUR (number): 123.45
// 123.45 EUR (fractionNumerator): 45
// 123.45 EUR (fractionDenominator): 100
// 123.45 EUR (amount, BigDecimal): 123.45