// exchange rates
ExchangeRateProvider exchangeRateProviderECB = MonetaryConversions.getExchangeRateProvider("ECB");
ExchangeRateProvider exchangeRateProviderOER = MonetaryConversions.getExchangeRateProvider("OER");
ExchangeRate exchangeRateECB = exchangeRateProviderECB.getExchangeRate("USD", "EUR");
ExchangeRate exchangeRateOER = exchangeRateProviderOER.getExchangeRate("USD", "EUR");

System.out.println();
System.out.println("exchange rates");
System.out.printf("Ratio de conversión de USD a EUR (ECB, European Central Bank): %f\n", exchangeRateECB.getFactor().doubleValue());
System.out.printf("Ratio de conversión de USD a EUR (OER, Open Exchange Rates): %f\n", exchangeRateOER.getFactor().doubleValue());

// conversion
CurrencyConversion toEuroECB = MonetaryConversions.getConversion("EUR", "ECB");
CurrencyConversion toEuroOER = MonetaryConversions.getConversion("EUR", "OER");
MonetaryAmount tenDollarToEuroECB = tenDollar.with(toEuroECB);
MonetaryAmount tenDollarToEuroOER = tenDollar.with(toEuroOER);

System.out.println();
System.out.println("conversion");
System.out.printf("10 USD son %s EUR (ECB)\n", tenDollarToEuroECB);
System.out.printf("10 USD son %s EUR (OER)\n", tenDollarToEuroOER);

// exchange rates
// Ratio de conversión de USD a EUR (ECB, European Central Bank): 0,887469
// Ratio de conversión de USD a EUR (OER, Open Exchange Rates): 0,882016

// conversion
// 10 USD son EUR 8.874689385871494 EUR (ECB)
// 10 USD son EUR 8.82016 EUR (OER)