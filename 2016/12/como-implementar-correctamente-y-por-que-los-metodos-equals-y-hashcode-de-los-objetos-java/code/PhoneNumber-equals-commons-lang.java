public class PhoneNumber {

    private Integer lineNumber;
    private Integer prefix;
    private Integer areaCode;

    ...

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof PhoneNumber))
            return false;

        PhoneNumber that = (PhoneNumber) o;
        return new EqualsBuilder()
            .appendSuper(super.equals(that))
            .append(this.lineNumber, that.lineNumber)
            .append(this.prefix, that.prefix)
            .append(this.areaCode, that.areaCode)
            .isEquals();
    }
}