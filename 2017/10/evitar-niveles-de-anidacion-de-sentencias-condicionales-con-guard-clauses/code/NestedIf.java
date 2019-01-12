...

public BigDecimal getValue(Car car) {
   BigDecimal result;
   if (car.isNew()) {
       result = car.getNewValue();
   } else {
       if (!car.isOlderThanYears(1) && car.hasLessKilimetersThan(10000))
          result = car.getAlmostNewValue();
       else {
           if (!car.isOlderThanYears(5))
              result = car.getSemiNewValue();
           else 
              result = car.getOldValue();    
       }
   }
   return result;
};

...