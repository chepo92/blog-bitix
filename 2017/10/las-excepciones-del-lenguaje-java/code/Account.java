public class Account {

    private BigDecimal amount;

    public Account(BigDecimal amount) {
        checkIsPositiveAmount(amount);

        this.amount = amount;
    }

    public void transfer(Account account, BigDecimal amount) throws InvalidOperationException {
        checkIsPositiveAmount(amount);
        
        if (this.amount.compareTo(amount) == -1) {
            throw new InvalidOperationException("No enough amount to do transfer");
        }

        substract(amount);
        account.add(amount);
    }

    public BigDecimal getAmount() {
        return this.amount;
    }

    public void add(BigDecimal amount) {
        checkIsPositiveAmount(amount);

        this.amount = this.amount.add(amount);
    }

    public void substract(BigDecimal amount) {
        checkIsPositiveAmount(amount);

        this.amount = this.amount.subtract​(amount);
    }

    private void checkIsPositiveAmount(BigDecimal amount) {
        if (amount.signum() == -1) {
            throw new InvalidAmountException("Negative amount is invalid");
        }
    }
}