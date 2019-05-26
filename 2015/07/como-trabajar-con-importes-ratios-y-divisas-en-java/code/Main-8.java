// filter
List<MonetaryAmount> onlyDollars = amounts.stream()
	.filter(MonetaryFunctions.isCurrency(dollar))
	.collect(Collectors.toList());
		
System.out.printf("Solo USD: %s\n", onlyDollars);
		
List<MonetaryAmount> euroAndDollar = amounts.stream()
	.filter(MonetaryFunctions.isCurrency(euro, dollar))
	.collect(Collectors.toList());

// grouping
Map<CurrencyUnit, List<MonetaryAmount>> groupedByCurrency = amounts.stream()
				.collect(MonetaryFunctions.groupByCurrencyUnit());
		
System.out.printf("Agrupación por divisa: %s\n", groupedByCurrency);

// Agrupación por divisa: {EUR=[EUR 2], GBP=[GBP 13.37], USD=[USD 7, USD 18, USD 42]}

