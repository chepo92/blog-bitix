public class PhoneNumber {

    private Integer lineNumber;
    private Integer prefix;
    private Integer areaCode;

    ...

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof PhoneNumber))
            return false;

        PhoneNumber that = (PhoneNumber)o;
        return super.equals(that)
            && this.lineNumber == that.lineNumber
            && this.prefix == that.prefix
            && this.areaCode == that.areaCode;
    }
}