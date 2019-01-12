// exchange rates		
ExchangeRateProvider exchangeRateProvider = MonetaryConversions.getExchangeRateProvider("ECB");
ExchangeRate exchangeRate = exchangeRateProvider.getExchangeRate("USD", "EUR");
		
System.out.printf("Ratio de conversión de USD a EUR: %f\n", exchangeRate.getFactor().doubleValue());

// Ratio de conversión de USD a EUR: 0,921489
		
// conversion
CurrencyConversion toEuro = MonetaryConversions.getConversion("EUR");		
MonetaryAmount tenDollarToEuro = tenDollar.with(toEuro);

System.out.printf("10 USD son %s EUR\n", tenDollarToEuro);

// 10 USD son EUR 9.214891264283081 EUR