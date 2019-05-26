Range<String> range = Stream
    .of(1, 8, 2, 5)
    .collect(Collectors.teeing(
        // the collectors produce Optional<Integer>
        Collectors.minBy(Integer::compareTo),
        Collectors.maxBy(Integer::compareTo),
        // I wrote a static factory method that creates
        // a range from two Optional<Integer>
        Range::ofOptional))
    .orElseThrow(() -> new IllegalStateException(
        "Non-empty stream was empty."));