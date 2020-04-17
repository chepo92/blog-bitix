$ ./gradlew run --args='--required --values a1 b2 c3 d4 --help'

> Task :run
Main: required=true, optional=false, values=a1,b2,c3,d4, help=true

Usage: <main class> [options]
  Options:
    --help, -h
      Help parameter
      Default: false
    --optional, -o
      Optional parameter
      Default: false
  * --required, -r
      Required parameter
      Default: false
    --values, -v
      Values parameter
      Default: []


BUILD SUCCESSFUL in 596ms
2 actionable tasks: 2 executed

$ ./gradlew run --args='-r -v a1 b2 c3 d4 -h'

> Task :run
Main: required=true, optional=false, values=a1,b2,c3,d4, help=true

Usage: <main class> [options]
  Options:
    --help, -h
      Help parameter
      Default: false
    --optional, -o
      Optional parameter
      Default: false
  * --required, -r
      Required parameter
      Default: false
    --values, -v
      Values parameter
      Default: []


BUILD SUCCESSFUL in 531ms
2 actionable tasks: 1 executed, 1 up-to-date