package ...;

public class PhoneNumber {

    private Integer lineNumber;
    private Integer prefix;
    private Integer areaCode;

    public Integer getLineNumber() {
        return lineNumber;
    }

    public Integer getPrefix() {
        return prefix;
    }

    public Integer getAreaCode() {
        return areaCode;
    }
 
    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null)
            return false;
        if (getClass() != o.getClass())
            return false;

        PhoneNumber that = (PhoneNumber) o;
        return super.equals(that)
            && Objects.equals(this.lineNumber, that.lineNumber)
            && Objects.equals(this.prefix, that.prefix)
            && Objects.equals(this.areaCode, that.areaCode);
    }
}