---
pid: 83
type: "post"
title: "Patrón múltiples vistas de un mismo dato en Tapestry"
url: "/2015/05/patron-multiples-vistas-de-un-mismo-dato-en-tapestry/"
date: 2015-06-06T10:30:00+02:00
updated: 2015-12-11T23:00:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:apache-tapestry-icon-light.svg"
tags: ["java", "planeta-codigo", "programacion", "tapestry"]
summary: "Un proyecto grande contendrá muchos archivos de código fuente, poseer gran cantidad de archivos puede ser una molestia al trabajar con ellos al tener que buscarlos o abrilos. En el caso de las aplicaciones web puede darse el caso de que un mismo dato tenga un archivo diferente por cada forma de visualizarlo, para reducir el número de archivos en estos casos uso el siguiente patrón cuando trabajo con Apache Tapestry con el soporte que ofrece pero que puede ser igualmente aplicado de forma similar a otros _frameworks_."
---

{{% post %}}

{{< logotype image="apache-tapestry-icon-light.svg" >}}

Al desarrollar una aplicación web puede que necesitemos mostrar un mismo dato de diferentes formas. Una posibilidad es crear una vista por cada forma diferente que se haya de mostrar el dato. Sin embargo, de esta forma tendremos que crear un archivo diferente por cada forma a visualizar, si esto mismo nos ocurre en múltiples datos nos encontraremos en la situación de que el número de archivos del proyecto crecerá suponiendo una pequeña molestia tener que trabajar con tantos, también y peor aún es que múltiples archivos relacionados no lo estarán salvo que les demos una nomenclatura similar para mantenerlos ordenados por nombre y sean fáciles de encontrar si queremos abrir varios.

Tener tantos archivos puede ser una molestia que denomino de _microgestión_, esto es, tener muchos archivos pequeñitos. Para evitar _microgestionar_ podemos tener una única vista que con un parámetro determine la forma de representar el dato, mientras que el contenido del archivo tenga alta cohesión me parece adecuado e incluso mejor ya que las diferentes vistas muy posiblemente serán parecidas con lo que quizá dupliquemos algo de código que será mejor tenerlo en un mismo archivo que en varios diferentes.

En este artículo comentaré una forma de como realizar esto usando el _framework_ [Apache Tapestry][tapestry] con las posibilidad que ofrece que a mi me ha resultado muy práctica, algo similar podría usarse en otros _frameworks_.

En Tapestry en una vista se pueden tener múltiples [componentes Block](http://tapestry.apache.org/5.3/apidocs/org/apache/tapestry5/Block.html) cuya misión es agrupar otros componentes que como resultado de procesarse producirán el html. Por otra parte está el [componente Delegate](http://tapestry.apache.org/5.3/apidocs/org/apache/tapestry5/corelib/components/Delegate.html) que indicándole en el parámetro _to_ un componente _Block_ lo procesa emitiendo el contenido html que generen los componentes que contenga. Teniendo en el código Java asociado al componente que mostrará el dato de diferentes formas un método que con cierta lógica devuelva un componente _Block_ a visualizar podemos conseguir el objetivo.

En la siguiente vista de un artículo usada en el [agregador de bitácoras Blog Stack][blogstack] se ve que en el archivo _tml_ de la vista hay varios componentes _Block_ y un componente _Delegate_ tal y como he comentado que se puede hacer. El componente bloque _excerptBlock_ es muy similar al componente _fullBlock_ diferenciándose en que el primero emite un extracto del contenido del artículo con _${contentExcerpt} [...]_ y el segundo el artículo completo con _\<t:outputraw value="content"/\>_.

{{< code file="PostComponent.tml" language="html" options="" >}}

En la clase Java asociada al componente está el método _getBlock_ que determina el bloque a mostrar. En este caso la lógica es muy sencilla, en base a un parámetro que recibe el componente (_mode_) indicando la vista del dato que se quiere se devuelve el componente _Block_ adecuado. Las referencias a los componentes _Block_ presentes en la vista se puede inyectar usando la anotación _@Inject_ junto con _@Component_ usando el mismo identificativo en la vista y en el nombre de la propiedad para la referencia del componente.

{{< code file="PostComponent.java" language="java" options="" >}}

{{< plugintapestry >}}

{{< reference >}}
* [Artículos sobre Tapestry en Blog Bitix][blogbitix-tag-tapestry]
* [Artículos sobre Tapestry en El blog de pico.dev][elblogdepicodev-label-tapestry]
{{< /reference >}}

{{% /post %}}
