import spock.lang.Specification

class Calculator {
    int add(int a, int b) {
        return a + b
    }
}

class CalculatorSpock extends Specification {
    def "calculate sum"() {
        given:
        def calculator = new Calculator()

        expect:
        def result = calculator.add(a, b)

        then:
        expected == result

        where:
        a |  b | expected
        1 |  3 | 4
        2 | -1 | 1
        0 |  6 | 6
    }
}