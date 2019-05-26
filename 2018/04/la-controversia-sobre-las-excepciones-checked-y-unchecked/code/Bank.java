public class Bank {

  public void transfer(BigDecimal source, BigDecimal target, BigDecimal amount) throws InvalidAmountException, InsufficientFoundsException {
    if (amount < 0) {
      throw new InvalidAmountException();
    }
    if (source.getAmount() < amount) {
      throw new InsufficientFoundsException();
    }
    target.substract(amount);
    source.add(amount);
  }
}