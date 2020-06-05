$ sdk

Usage: sdk <command> [candidate] [version]
      sdk offline <enable|disable>

  commands:
      install   or i    <candidate> [version] [local-path]
      uninstall or rm   <candidate> <version>
      list      or ls   [candidate]
      use       or u    <candidate> <version>
      default   or d    <candidate> [version]
      current   or c    [candidate]
      upgrade   or ug   [candidate]
      version   or v
      broadcast or b
      help      or h
      offline           [enable|disable]
      selfupdate        [force]
      update
      flush             <broadcast|archives|temp>

  candidate  :  the SDK to install: groovy, scala, grails, gradle, kotlin, etc.
                use list command for comprehensive list of candidates
                eg: $ sdk list
  version    :  where optional, defaults to latest stable if not provided
                eg: $ sdk install groovy
  local-path :  optional path to an existing local installation
                eg: $ sdk install groovy 2.4.13-local /opt/groovy-2.4.13