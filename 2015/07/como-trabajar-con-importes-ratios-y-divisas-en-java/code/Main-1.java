// getting CurrencyUnit by currency code and locale
CurrencyUnit euro = Monetary.getCurrency("EUR");		
CurrencyUnit dollar = Monetary.getCurrency(Locale.US);

// getting MonetaryAmount by currency code and CurrencyUnit, without using Money (implementation class)
MonetaryAmount fiveEuro = Money.of(5, euro);
MonetaryAmount twelveEuro = Money.of(new BigDecimal("12"), euro);
MonetaryAmount tenDollar = Money.of(10, "USD");
MonetaryAmount tenPound = Monetary.getDefaultAmountFactory().setNumber(10).setCurrency("GBP").create();

System.out.println("getting MonetaryAmount by currency code and CurrencyUnit, without using Money (implementation class)");
System.out.printf("5 EUR: %s\n", fiveEuro);
System.out.printf("12 EUR: %s\n", twelveEuro);
System.out.printf("10 USD: %s\n", tenDollar);
System.out.printf("10 GBP: %s\n", tenPound);

// 5 EUR: EUR 5
// 12 EUR: EUR 12
// 10 USD: USD 10
// 10 GBP: GBP 10