import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}

public class CalculatorTest {

    @ParameterizedTest
    @DisplayName("calculate sum")
    void lengthOfStrings(int a, int b, int expected) throws Exception {
        // given
        Calculator calculator = new Calculator();

        // when
        int result = calculator.add(a, b);

        // then
        Assertions.assertEquals(expected, result);
    }

    static Stream<Arguments> lengthOfStrings() {
        return Stream.of(
            Arguments.arguments(1, 3, 4),
            Arguments.arguments(2, -1, 1),
            Arguments.arguments(0, 6, 6),
        );
    }
}
