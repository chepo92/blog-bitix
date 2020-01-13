---
pid: 258
type: "post"
title: "Los tipos de referencias débiles soft, weak y phantom en Java"
url: "/2017/09/los-tipos-de-referencias-debiles-soft-weak-y-phantom-en-java/"
aliases: ["/2017/09/los-tipos-de-referencias-debiles-soft-weak-y-phantom-a-objetos-en-java/"]
date: 2017-09-10T11:00:00+02:00
updated: 2017-09-30T10:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

{{< logotype image1="java.svg" >}}

Cuando un objeto ya no es alcanzable a través de ninguna referencia directa o cadena de referencias fuertes el objeto es seleccionable para reclamar su memoria y el recolector de basura o _garbage collector_ de Java lo hace cuando estima oportuno, liberándonos a los programadores de esta tarea, simplificando el código y evitando fugas de memoria. El lenguaje Java le debe al recolector de basura entre otras varias cosas una buena parte de su éxito.

En Java en realidad hay 4 tipos de referencias a objetos, además de las fuertes hay otras 3 más débiles que no impiden al recolector de basura reclamar el objeto referenciado. Es raro tener la necesidad de usar otra que no sean las fuertes o _strong_ pero es interesante conocerlas por si en algún caso nos resultase de utilidad. Los otros 3 tipos de referencias denominadas débiles son [SoftReference](javadoc8:java/lang/ref/SoftReference.html), [WeakReference](javadoc8:java/lang/ref/WeakReference.html) y [PhantomReference](javadoc8:java/lang/ref/PhantomReference.html) que extienden de [Reference](javadoc8:java/lang/ref/Reference.html). Usar una de estas otras 3 referencias es muy simple basta usar el constructor de cada tipo de referencia.

Después de la llamada de varias veces al recolector de basura en este caso de forma explícita con el método [System.gc()](javadoc8:java/lang/System.html#gc--) las referencias son encoladas.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

El objeto de una referencia _soft_ es recolectable a discreción del recolector de basura ante necesidades de memoria, el objeto de una referencias _weak_ es recolectable si solo es alcanzable por referencias _weak_ y las referencias _phantom_ son una mejor y más flexible alternativa al mecanismo de finalización de los objetos.

Algunos usos prácticos de las referencias _soft_ y _weak_ son como caches de datos posiblemente usando la clase [WeakHashMap](javadoc8:java/util/WeakHashMap.html), en el caso de las referencias _phantom_ como mecanismo alternativo a la finalización de objetos incorporada en los objetos desde la versión inicial de Java.

El mecanismo de finalización de los objetos Java con el método [finalize](javadoc8:java/lang/Object.html#finalize--) que puede ser implementado por cualquier clase presenta los siguientes problemas:

* La llamada al método _finalize_ es impredecible ya que depende de cuando del recolector de basura reclame el objeto.
* No hay garantía de que el método _finalize_ sea llamado ya que puede perdurar durante toda la vida de la JVM.
* Una referencia fuerte al objeto puede ser revivida en el método _finalize_ si se implementa de forma inadecuada.

En los constructores de las referencias débiles se puede indicar un [ReferenceQueue](javadoc8:java/lang/ref/ReferenceQueue.html) en el que se encolará la referencia cuando el objeto al que referencia cambia su alcanzabilidad. Este mecanismo de notificación es utilizado con las referencias _phantom_ para proporcionar el mecanismo de finalización alternativo. En la [documentación javadoc](https://docs.oracle.com/javase/8/docs/) con la descripción del paquete de las referencias se comenta este [proceso de notificación](javadoc8:java/lang/ref/package-summary.html). Las referencias son encoladas cuando el recolector de basura determina que son solo alcanzables por referencias _soft_, _weak_ o _phantom_. 

En el artículo [Replacing Finalizers With Phantom References](http://resources.ej-technologies.com/jprofiler/help/doc/helptopics/cpu/finalizers.html) se explica junto con su código como implementar el mecanismo alternativo al método _finalize_. La librería [Guava] proporciona las clases [FinalizablePhantomReference](https://google.github.io/guava/releases/23.0/api/docs/com/google/common/base/FinalizablePhantomReference.html) y [FinalizableReferenceQueue](https://google.github.io/guava/releases/23.0/api/docs/com/google/common/base/FinalizableReferenceQueue.html) con una forma un poco más sencilla de usar las referencias _phantom_, en esa documentación también hay un ejemplo de código con su uso para liberar un recurso (_ServerSocket_) asociado a un objeto (_MyServer_).

{{< code file="MyServer.java" language="java" options="" >}}

Las referencias débiles añaden una indirección a la referencia que contienen, usando el método [get()](javadoc8:java/lang/ref/Reference.html#get--) se accede al objeto referenciado pero hay que tener en en cuenta que el método _get_ puede devolver un _null_ ya que no impiden al recolector de basura reclamar el objeto referenciado, en el caso de las _PhantomReferences_ el método _get_ siempre devuelve _null_ para evitar que la referencia a un objeto sea revivida.

Otro artículo que recomiendo leer es [Weak, Soft, and Phantom References in Java (and Why They Matter)](https://dzone.com/articles/weak-soft-and-phantom-references-in-java-and-why-they-matter), explica el concepto de estas referencias con un símil más fácil de comprender de un restaurante y sus clientes que dependiendo de su comportamiento se asemeja a estas referencias y el por que de los recolectores de basura, que no es algo novedoso de Java sino que ya fué utilizado en 1959 con el lenguaje Lisp.

{{< sourcecode git="blog-ejemplos/tree/master/JavaReference" command="./gradlew run" >}}

{{< reference >}}
* [Weak, Soft, and Phantom References in Java (and Why They Matter)](https://dzone.com/articles/weak-soft-and-phantom-references-in-java-and-why-they-matter)
* [Tipos de referencias en Java](http://www.guajava.net/tipos-de-referencias-en-java/)
* [Difference between WeakReference vs SoftReference vs PhantomReference vs Strong reference in Java](https://javarevisited.blogspot.com.es/2014/03/difference-between-weakreference-vs-softreference-phantom-strong-reference-java.html)
* [Understanding Weak References](https://community.oracle.com/blogs/enicholas/2006/05/04/understanding-weak-references)
* [Finalization and Phantom References](https://dzone.com/articles/finalization-and-phantom)
* [Java Reference Objects](http://www.kdgregory.com/index.php?page=java.refobj)
* [WeakReference string didn't garbage collected? How?](https://stackoverflow.com/questions/14494875/weakreference-string-didnt-garbage-collected-how)
* [Understanding Phantom reference vs weak reference with respect to Reference queue](https://stackoverflow.com/questions/26211657/understanding-phantom-reference-vs-weak-reference-with-respect-to-reference-queu)
{{< /reference >}}

{{% /post %}}
