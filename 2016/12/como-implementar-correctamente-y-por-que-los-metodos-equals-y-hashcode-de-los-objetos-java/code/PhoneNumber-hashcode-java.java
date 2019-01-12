public class PhoneNumber {

    ...

    @Override
    public int hashCode() {
        return Objects.hash(areaCode, prefix, lineNumber);
    }
}