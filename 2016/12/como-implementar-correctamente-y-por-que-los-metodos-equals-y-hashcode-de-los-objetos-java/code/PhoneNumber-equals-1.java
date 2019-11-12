public class PhoneNumber {

    private Integer lineNumber;
    private Integer prefix;
    private Integer areaCode;

    ...

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (getClass() != o.getClass())
            return false;

        PhoneNumber that = (PhoneNumber) o;
        return super.equals(that)
            && Objects.equals(this.lineNumber, that.lineNumber)
            && Objects.equals(this.prefix, that.prefix)
            && Objects.equals(this.areaCode, that.areaCode);
    }
}