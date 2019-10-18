package io.github.picodotdev.infrastructure.datasource.jooq.converter;

import io.github.picodotdev.domain.event.EventId;

public class EventIdConverter extends implements Converter<Long, EventId> {

    @Override
    public Long to(final EventId id) {
        return id.getValue());
    }

    @Override
    public Class<Long> fromType() {
        return Long.class;
    }

    @Override
    public EventId from(Long value) {
        return new EventId(value;
    }

    @Override
    public Class<EventId> toType() {
        return EventId.class;
    }
}