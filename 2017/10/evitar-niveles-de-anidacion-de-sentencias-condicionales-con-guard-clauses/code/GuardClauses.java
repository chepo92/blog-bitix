...

public BigDecimal getValue(Car car) {
    if (car.isNew()) return car.getNewValue();
    if (!car.isOlderThanYears(1) && car.hasLessKilimetersThan(10000)) return car.getAlmostNewValue();
    if (!car.isOlderThanYears(5)) return car.getSemiNewValue();
    return car.getOldValue();
}; 

...