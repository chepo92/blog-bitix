package io.github.picodotdev.domain.event;

...

@Entity
public class Event {

    @Id
    @GeneratedValue
    @Convert(converter = EventIdConverter.class)
    private EventId id;

    ...
}
