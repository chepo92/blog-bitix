---
pid: 442
type: "post"
title: "Rotar los archivos de trazas con log4j por fecha o tamaño"
url: "/2019/11/rotar-los-archivos-de-trazas-con-log4j-por-fecha-o-tamano/"
date: 2019-11-15T17:00:00+01:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo"]
summary: "La librería log4j 2 es configurable para que si se guardan las trazas en un archivo estos se roten en una fecha indicada en una expresión _cron_, cuando lleguen a un cierto tamaño o cuando se inicie la aplicación. El rotado además de para archivar las trazas de la aplicación y clasificarlas por fecha sirve para evitar que lleguen a consumir todo el espacio de almacenamiento disponible."
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Una tendencia en el uso de aplicaciones basadas en contenedores o microservicios es que estos sus mensajes de trazas o _logs_ los emitan a la salida estándar del proceso, esto tiene la ventaja de que la aplicación no ha de conocer ni impone ninguna limitación si posteriormente se utiliza alguna herramienta para agregar esos _logs_. Una combinación es utilizar ELK ([Elasticsearch][elasticsearch] para indexar el texto, [Logstash][logstash] para guardar los _logs_, [Kibana][kibana] como interfaz de consulta) pero en un futuro podría cambiarse por otra y la aplicación que emita sus _logs_ en la salida estándar no requeriría ninguna modificación.

Otra posibilidad adicional o como sustituta es guardar los _log_ en un archivo en el sistema de archivos. Sin embargo, hay que estimar la cantidad de información que puede llegar emitir la aplicación para aprovisionar en la máquina espacio suficiente para darles cabida. Para limitar el espacio que pueden llegar a ocupar los _logs_ se pueden rotar los archivos cuando lleguen a cierto tamaño o por fecha. De no imponer un cierto límite a los archivos de _log_ estos pueden llegar a consumir todo el espacio de almacenamiento disponible y ocasionar una caída del servicio de la aplicación.

En la librería [log4j][log4j] para realizar _logging_ en Java la política y estrategia de rotación se define con el [_Appender_ de tipo _RollingFileAppender_](https://logging.apache.org/log4j/2.x/manual/appenders.html#RollingFileAppender). Las políticas de rotado definen cuando se realiza el rotado, por fecha, por tamaño o al inicio de la aplicación. La estrategia define cómo se realiza el rotado y que nombre se le da a los archivos rotados, cuantos rotados de archivos se conservan y si los archivos rotados se archivan comprimidos.

En la configuración de _RollingFileAppender_ los parámetros de configuración _fileName_ y _filePattern_ indican en que archivo se generan los _logs_ y que nombre se les da a los archivos rotados y si se comprimen. La política _CronTriggeringPolicy_ permite definir con una expresión _cron_ en que momento y fecha periódica se realiza el rotado, la política _SizeBasedTriggeringPolicy_ rota los archivos cuando lleguen a cierto tamaño especificado por parámetro de configuración en KB, MB o GB. Con la estrategia _DefaultRolloverStrategy_ por defecto se configura cuantos archivos de _log_ se quieren conservar como máximo, una vez llegado al límite el más antiguo se elimina limitando de esta forma el espacio ocupado por los _logs_ de la aplicación.

En el siguiente ejemplo se muestra el archivo de configuración de log4j que emite las trazas a la consola y a un archivo en los que cada día o cuando lleguen a 500 MB son rotados. Al especificar en el parámetro _filePattern_ la extensión _gz_ los archivos rotados se comprimen para que ocupen menos espacio. Como se define en _DefaultRolloverStrategy_ se conservan como máximo 10 archivos rotados, por tanto ocupando un máximo de 5 GiB.

{{< code file="log4j2.yaml" language="YAML" options="" >}}

Rotar los _logs_ es una buena idea ya que en algunas aplicaciones Java si la aplicación por alguna circunstancia emite a los archivos de _log_ un _stacktrace_ de forma continuada generando una considerable cantidad de información en poco tiempo, si se guarda en el almacenamiento acaba por consumir todo el espacio disponible por muy previsor que se haya sido al aprovisionar el tamaño del espacio de almacenamiento, la aplicación terminará por dejar de prestar su servicio y alguien un sábado a las 3:00 de la noche es posible que deba levantarse de la cama porque ha llegado alguna alerta de monitorización si se es afortunado de disponer de uno para reaccionar cuanto antes y antes de que la aplicación deje de funcionar o peor recibe una llamada de teléfono cuando la aplicación ya se ha dejado de funcionar.

{{% /post %}}
