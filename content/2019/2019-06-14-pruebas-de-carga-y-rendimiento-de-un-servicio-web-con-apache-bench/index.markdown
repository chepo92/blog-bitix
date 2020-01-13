---
pid: 411
type: "post"
title: "Pruebas de carga y rendimiento de un servicio web con Apache Bench"
url: "/2019/06/pruebas-de-carga-y-rendimiento-de-un-servicio-web-con-apache-bench/"
date: 2019-06-14T17:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:apache.svg"
tags: ["planeta-codigo", "software", "web"]
summary: "En algunos que un servicio devuelva los datos esperados no es suficiente, otros requisitos no funcionales o de términos de servicio son que sus tiempos de respuesta sean menores al especificado en sus requisitos, que sea capaz de soportar cierto número de peticiones concurrentes o de atender un número de peticiones por minuto. Para asegurar que el servicio es capaz de cumplir estos requisitos funcionales hay que utilizar herramientas que permitan evaluar su desempeño, una de ellas muy fácil de utilizar y que proporciona valiosa información es Apache Bench."
---

{{% post %}}

{{< logotype image1="apache.svg" title1="Apache" width1="200" >}}

Para hacer pruebas de carga o medir el rendimiento de cualquier servicio que funcione mediante el protocolo HTTP hay multitud de herramientas. Una de las más sencillas de utilizar y con un informe con información interesante es [Apache Bench][apache-bench] o simplemente _ab_. Este comando se puede utilizar con simplemente tres parámetros el _endpoint_ a probar, el número de peticiones en total a realizar (_-n_) y cuantas peticiones concurrentes al mismo tiempo (_-c_). Otos parámetros son los datos POST a enviar, cabeceras (_-H_) y _cookies_ (_-C_) de las peticiones, tiempos de _timeout_ (_-s_) o cerficado de cliente (_-E_) entre algunos otros. En vez limitar las pruebas a un número de peticiones las pruebas se pueden limitar a un tiempo determinado por ejemplo 60 segundos (_-t_).

Es una herramienta que se utiliza para medir el rendimiento de el servidor Apache pero utilizable para cualquier otro servicio por ejemplo una web o una API REST o [GraphQL][graphql]. Está disponible por supuesto para [GNU][gnu]/[Linux][linux] pero también para [macOS][macos] y para [Windows][windows].

Si quisiese medir el rendimiento en mi blog alojado en [GitHub Pages][github-pages] podría hacerlo lanzando 1000 peticiones para que sea una muestra suficientemente amplia con 20 usuarios de forma concurrente que son los que en los momentos de más tráfico tiene mi blog. Mi conexión de internet es un ADSL que no llega a 1 MB/s de subida por lo que la conexión en cierta medida limite el test.

{{< code file="ab.sh" language="bash" options="" >}}

El informe de resultado que ofrece _ab_ al finalizar la prueba incluye el tiempo dedicado en la conexión, en el procesado, esperando y en total con los valores para cada uno de ellos con mínimo y máximo, de media y la mediana. El tiempo total empleado por la prueba, el protocolo SSL/TLS usado, los bytes devueltos en la petición, el número de peticiones servidas por segundo, el tiempo de media empleado de media por cada petición y de media teniendo en cuenta la concurrencia, la tasa de transferencia en la respuesta y finalmente el tiempo de respuesta según percentil que van que desde el 50 al 100, es decir, que el 50% de las peticiones se han respondido en el tiempo en milisegundos indicado. Si las hubiera también muestra las peticiones fallidas y las que han devuelto un código de respuesta distinto de 200.

{{< code file="ab.out" language="plaintext" options="" >}}

Esta herramienta puede ser utilizada para par medir el rendimiento de cualquier servicio web. Un blog de [Wordpress][wordpress], una página de una organización, un _endpoint_ de un servicio REST o GraphQL, etc... Es muy sencilla de utilizar y genera un informe corto pero con interesante información sobre el rendimiento. Si se hacen cambios se puede medir el antes y el después y comparar los resultados para observar de que modo han afectado al redimiento si de forma positiva o negativa y en que grado.

{{% /post %}}
