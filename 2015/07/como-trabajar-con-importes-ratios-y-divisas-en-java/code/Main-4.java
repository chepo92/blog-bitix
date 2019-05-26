// comparing
System.out.printf("7€ < 10€: %s\n", sevenEuros.isLessThan(tenEuro));
System.out.printf("7€ > 10€: %s\n", sevenEuros.isGreaterThan(tenEuro));
System.out.printf("10 > 7€: %s\n", tenEuro.isGreaterThan(sevenEuros));

// 7€ < 10€: true
// 7€ > 10€: false
// 10 > 7€: true