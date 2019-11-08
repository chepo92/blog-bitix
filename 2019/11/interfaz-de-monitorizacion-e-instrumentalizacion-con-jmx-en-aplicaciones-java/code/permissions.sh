Error: Se debe restringir el acceso de lectura al archivo de contraseñas: jmxremote.password
jdk.internal.agent.AgentConfigurationError
    at jdk.management.agent/sun.management.jmxremote.ConnectorBootstrap.checkPasswordFile(ConnectorBootstrap.java:590)
    at jdk.management.agent/sun.management.jmxremote.ConnectorBootstrap.startRemoteConnectorServer(ConnectorBootstrap.java:436)
    at jdk.management.agent/jdk.internal.agent.Agent.startAgent(Agent.java:447)
    at jdk.management.agent/jdk.internal.agent.Agent.startAgent(Agent.java:599)

$ chmod 600 jmxremote.password jmxremote.access jmxremote-ssl.properties