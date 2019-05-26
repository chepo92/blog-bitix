package io.github.picodotdev.blogbitix.java;

import java.util.EnumMap;
import java.util.Map;

public class ValidatorFactory {

    public enum ValidatorType {
        INT, LOOKUP, DATE, STRING_PATTERN
    }

    private static Map<ValidatorType, Validator> validators;

    static {
        validators = new EnumMap<>(ValidatorType.class);
        validators.put(ValidatorType.INT, new IntValidator());
        validators.put(ValidatorType.LOOKUP, new LookupValueValidator());
        validators.put(ValidatorType.DATE, new DateValidator());
        validators.put(ValidatorType.STRING_PATTERN, new StringPatternValidator());
    }

    public static Validator newInstance(ValidatorType type) {
        return validators.get(type);
    }
}