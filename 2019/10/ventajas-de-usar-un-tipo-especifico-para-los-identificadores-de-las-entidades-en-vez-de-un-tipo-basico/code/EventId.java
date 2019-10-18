package io.github.picodotdev.domain.event;

import io.github.picodotdev.domain.misc.LongId;

import java.util.Objects;

public class EventId extends LongId {

    public EventId(Long id) {
        super(id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) { return true; }
        if (!(o instanceof EventId)) { return false; }
        return Objects.equals(getId(), ((EventId) o).getId());
    }
}