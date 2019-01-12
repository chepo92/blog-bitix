package io.github.picodotdev.blogbitix.kata01;

import io.github.picodotdev.blogbitix.kata01.Main.OfferPricing;
import io.github.picodotdev.blogbitix.kata01.Main.Product;
import io.github.picodotdev.blogbitix.kata01.Main.SimplePricing;
import io.github.picodotdev.blogbitix.kata01.Main.WeightPricing;

import java.math.BigDecimal;

import org.junit.Assert;
import org.junit.Test;

public class MainTest {

	@Test
	public void simplePricing() {
		Product p1 = new Product(new SimplePricing(new BigDecimal("2")));
		Assert.assertEquals(new BigDecimal("6"), p1.calculate(new BigDecimal("3")));
	} 
	
	@Test
	public void weightPricing() {
		Product p2 = new Product(new WeightPricing(new BigDecimal("1.35")));
		Assert.assertEquals(new BigDecimal("4.05"), p2.calculate(new BigDecimal("3")));
	}

	@Test
	public void offerPricing() {
		Product p3 = new Product(new OfferPricing(new SimplePricing(new BigDecimal("1")), new BigDecimal("3"), new BigDecimal("50")));
		Assert.assertEquals(new BigDecimal("4.5"), p3.calculate(new BigDecimal("5")));
	}
}