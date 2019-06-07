import spock.lang.Specification

class StringLengthCalculator {
    int length(String string) {
        return string.length()
    }
}

class StringLengthCalculatorSpock extends Specification {
    def "calculate string length"() {
        given:
        def calculator = new StringLengthCalculator()

        expect:
        def result = calculator.length(a)

        then:
        expected == result

        where:
        a         | expected
        ""        | 0
        "java"    | 4
        "groovy"  | 5
        "go"      | 2
    }
}

