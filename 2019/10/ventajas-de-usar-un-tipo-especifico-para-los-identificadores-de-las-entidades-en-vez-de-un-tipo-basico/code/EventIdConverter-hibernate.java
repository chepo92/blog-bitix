package io.github.picodotdev.infrastructure.datasource.hibernate.converter;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

import io.github.picodotdev.domain.event.EventId;

@Converter
public class EventIdConverter implements AttributeConverter<EventId, Long> {

    @Override
    public Long convertToDatabaseColumn(EventId id) {
        return id.getValue();
    }

    @Override
    public eventId convertToEntityAttribute(Long value) {
        return new EventId(value);
    }
}