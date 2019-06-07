import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.provider.Arguments;

public class StringLengthCalculator {
    public int length(String string) {
        return string.length()
    }
}

public class StringLengthCalculatorTest {

    @ParameterizedTest
    @DisplayName("calculate string length")
    @ValueSource(strings = { "", "java", "groovy", "go" })
    void lengthOfStrings(String a) throws Exception {
        // given
        StringLengthCalculator calculator = new StringLengthCalculator();

        // expect
        int result = calculator.length(a);

        // then
        Assertions.assertEquals(expected, result);
    }
}