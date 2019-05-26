public class PhoneNumber {

    ...

    @Override
    public int hashCode() {
        return new HashCodeBuilder(17, 31).
            append(areaCode).
            append(prefix).
            append(lineNumber).
            toHashCode();
    }
}