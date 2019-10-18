package io.github.picodotdev.domain.misc;

public abstract class LongId implements EntityId {

    private Long value;

    public LongId(Long value) {
        this.value = value;
    }

    public Long getValue() {
        return value;
    }
}