---
pid: 164
type: "post"
title: "No, un tag JSP o un tag de Grails no es equivalente a un componente de Tapestry"
url: "/2016/07/no-un-tag-jsp-o-un-tag-de-grails-no-es-equivalente-a-un-componente-de-tapestry/"
date: 2016-07-25T12:00:00+02:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:apache-tapestry-5.png"
tags: ["java", "opinion", "planeta-codigo", "tapestry", "programacion"]
summary: "Alguna vez que he dado una presentación sobre Apache Tapestry después de la misma me comentaron que eso mismo que explicaba se podía hacer con el _framework_ que esa persona usaba. En un proyecto la tecnología no es es lo más importante pero es una herramienta que puede facilitar en gran medida el desarrollo. Respecto a los componentes de Tapestry alguien puede pensar que son iguales a los _tag_ que existen en las tecnologías de presentación como JSP o Grails. En este artículo comentaré algunas diferencias importantes que los hace más y muy interesantes junto con otras características de _framework_."
---

{{% post %}}

{{< logotype image1="apache-tapestry-5.png" image2="java.svg" >}}

Viendo el panel [Kanban](https://es.wikipedia.org/wiki/Kanban_(desarrollo)) de la herramienta de peticiones [JIRA][jira] que usamos para registrar y priorizar las siguiente tareas en la empresa que trabajo hay unas cuantas que consisten en dado un listado de compras poder realizar operaciones sobre múltiples filas sin salir de la pantalla del listado. La necesidad es evitar que los usuarios de la aplicación hagan las acciones de forma individual de forma repetitiva, evitarles esto harán que sean más productivos y podrán desarrollar su trabajo mejor y más rápido. Así de sencillo, aparentemente.

Esta necesidad que en la realidad será implementada con [Grails][grails] quería compararla con una implementación equivalente usando [Apache Tapestry][tapestry] porque como en muchas otras necesidades intuyo que con Tapestry implementarlas es significativamente más sencillo y con un resultado de implementación como en este caso con el que quedo más a gusto.

### La necesidad

Definiendo más la necesidad hasta ahora cada fila del listado tiene un conjunto de botones para realizar acciones individuales y ahora se quiere al final del listado otro conjunto de botones para realizar acciones sobre las compras que se seleccionen de forma múltiple. Para seleccionar las compras se usará un _checkbox_ colocado al inicio de cada fila. Para algunas acciones el usuario ha de introducir información adicional cosa que hará con un diálogo modal que ya existe pero que hasta ahora solo permitía hacer la acción de forma individual. Las mismas acciones se realizarán en varias páginas de la aplicación (después de la acción se deberá volver a la página en la que se estaba), solo se podrán hacer las acciones múltiples si en todas las compras seleccionadas es posible realizar esa acción y el contenido de los diálogos solicitando información adicional podrán depender de las compras seleccionadas. Las acciones en el ejemplo serán habilitar o deshabilitar. Determinar las acciones posibles de una compra es compleja y saber si una acción es posible no depende solo de información en la propia compra sino de otras entidades del sistema, en el ejemplo no será así pero se tendrá en cuenta en la implementación.

Esta sería una imagen del prototipo de los botones para hacer acciones múltiples, seleccionar compras y el diálogo modal para introducir información adicional.

{{< image
    gallery="true"
    image1="image:listado.png" optionsthumb1="300x200" title1="Listado de productos"
    image2="image:modal.png" optionsthumb2="300x200" title2="Modal solicitando información adicional"
    caption="Listado y modal de la necesidad expuesta" >}}

En la necesidad real las filas son compras pero en el ejemplo usaré la entidad _Product_. Las acciones en el ejemplo serán habilitar para la que no será necesaria información adicional, la otra acción será deshabilitar para la que se necesitará introducir una razón con un modal.

### Las posibilidades

Para implementar técnicamente el que solo se puedan hacer las acciones múltiples según los productos seleccionadas se habilitarán o deshabilitarán los botones con JavaScript sin peticiones AJAX adicionales al servidor para ello toda la información necesaria deberá estar en el cliente. En este caso bastará habilitar o deshabilitar cada botón según si esa acción es posible en todas los productos seleccionadas pero eso podría no bastar ya que se podría requerir que productos fuesen del mismo vendedor. En el ejemplo con un atributo en un elemento HTML de la fila que contenga las acciones posibles separadas por comas bastará. De esta forma no habrá que hacer consultas adicionales al servidor mediante peticiones AJAX en cada nueva selección.

Sin embargo, como el contenido de los diálogos depende del producto o productos seleccionadas se hará una petición AJAX para obtener su contenido. De esta forma el contenido de los diálogos no tendrá que estar precargado (el número de acciones podría ser una decena) en el cliente ni generarlo con JavaScript en cliente que sería algo más complicado que usar la propia tecnología para generar contenido que está presente en el servidor y posiblemente más propenso a errores por usar JavaScript.

### La implementación con Apache Tapestry

Definida la necesidad y unas pocas notas voy a poner el código de como con Apache Tapestry implementar la solución. La página del listado será la siguiente. En el _checkbox_ de selección se añade el atributo _data-product-actions_ con las acciones posibles que se obtienen del servicio _AppService_ con el método _getAvaliableActions_. El componente de Tapestry _actions_ generará el código de los botones tanto para los individuales en su uso _\<t:actions\>_ con el parámetro _product_ como múltiples en su uso con el parámetro _type_.

{{< code file="Index.java" language="java" options="" >}}
{{< code file="Index.tml" language="html" options="" >}}

El código para mostrar las acciones con botones para un determinado producto o para los productos es el siguiente. El mismo componente se encargará de realizar en el servidor la acción habilitar que no necesita modal. Con un poco de [JavaScript][javascript], [jQuery][jquery] y [Underscore][underscorejs] se habilitarán o deshabilitarán los botones y se mostrará el diálogo para la acción deshabilitar.

{{< code file="Actions.java" language="java" options="" >}}
{{< code file="Actions.tml" language="html" options="" >}}
{{< code file="actions.js" language="JavaScript" options="" >}}

El código del modal para deshabilitar sería el siguiente. En el método _show_ recibe los _ids_ de los productos a deshabilitar y recupera del servidor el contenido de diálogo con una petición AJAX. El componente del modal se encargará de hacer el deshabilitado de los productos y la recarga de la página si finaliza correctamente o de mostar los errores de validación que se produzcan si no se ha introducido el motivo.

{{< code file="DisableProductsModal.java" language="java" options="" >}}
{{< code file="DisableProductsModal.tml" language="html" options="" >}}
{{< code file="modals.js" language="JavaScript" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/TapestryMultipleActions" command="./gradlew run" >}}

### Algunas diferencias con Servlets/JSP y Grails

La tecnología de presentación de páginas web Java con _Java Server Pages_ o JSP permiten encapsular con un _tag_ la generación de un trozo de HTML no en el propio JSP sino en ese _tag_ que en código Java pudiendo incluir la llamada a un JSP. Los _tags_ y librerías de _tags_ son una forma de reutilizar esas partes de generación de código en el mismo proyecto y entre proyectos. Los _tags_ además son una forma de abstraernos del funcionamiento interno del _tag_ haciendo que solo necesitemos conocer sus parámetros.

Si usamos JSP usar librerías de _tags_ es una buena idea, sin embargo, tiene algunas limitaciones como que requieren un archivo descriptor en formato XML que las defina y aunque pudiendo saber que parámetros definen y cuáles son requeridos no define el tipo de los parámetros que requiere. Los archivos XML en la época actual han caído en desuso porque son propensos a errores, errores que no son detectados hasta tiempo de ejecución, de los peores tipos de errores. Por otro lado, que los _tags_ no especifiquen el tipo de parámetro que requiere cada uno hace que debamos inspeccionar el código fuente del _tag_ con lo que la ventaja de abstraerse del funcionamiento no es del todo completa. Si por algún cambio el tipo de parámetro cambia hay que adaptar todos los usos del _tag_, si alguno no se hace nuevamente se producirán errores en tiempo de ejecución.

Grails usa GSP, una tecnología de presentación similar a los JSP. También dispone de _tags_ que no requieren definir los _tags_ en un archivo XML simplificando su uso pero que igualmente adolecen de algunos problemas como los JSP. Por un lado, los _tags_ de Grails no disponen un mecanismo para hacer requerido un determinado parámetro con lo que deberemos incluir la comprobación con código nosotros, tampoco define el tipo de parámetros que requiere. También aunque hacer más simple su desarrollo al no tener un descriptor XML como en los _tag_ JSP hace que haya que inspeccionar el código fuente para saber qué parámetros tiene, si son requeridos y cuál es el tipo del parámetro. Todo esto hace que puedan producirse errores en tiempo de ejecución y errores que no son producidos hasta que se ejercita el _tag_ con un mal uso o un uso desactualizado al igual que usando los _tag_ JSP.

En Apache Tapestry todo son componentes, las páginas también son componentes con la característica de que no están embebidos en otro componente. Un componente de Apache Tapestry sería similar a un _tag_ de JSP o un _tag_ de Grails, con ciertas similitudes pero no iguales en aspectos importantes. De pronto, un componente de Tapestry define los parámetros que necesita y si son requeridos pero también define el tipo del parámetro. Como se aprecia en las páginas de documentación de los [componentes integrados de serie en Apache Tapestry](http://tapestry.apache.org/component-reference.html) se puede conocer esta información sin necesidad de conocer el código fuente del componente, documentación que podemos generar para los componentes que nosotros desarrollemos. Los parámetros, si son requeridos y sus tipos forman el contrato del componente y es lo único que deberemos conocer para usarlos, su funcionamiento interno nos es irrelevante que incluye el código JavaScript que necesite, podría que CSS y literales internacionalizados.

Pero esas no son las únicas diferencias con los _tags_ de JSP o de Grails y es que estas son solo tecnologías de presentación, la V del [patrón MVC][modelo-vista-controlador]. Los componentes de Tapestry aparte de encapsular la lógica de presentación también pueden encapsular lógica de controlador, en el conocido patrón MVC además de V pueden ser C con lo que encapsulan aún más funcionalidad. La lógica de presentación y controlador en los JSP y Grails está separada pero ambas lógicas no son independientes, están relacionadas, en Tapestry está encapsulada en el mismo componente.

Los componentes de Tapestry usan el [modelo pull en vez del modelo push][blogbitix-31] haciendo innecesario construir un objeto _Map_ que pasar a la vista, haciendo que sea la plantilla la que solicite al controlador los datos que necesita y haciendo que el controlador no sepa que datos necesita la vista. El controlador solo deberá tener las propiedades y métodos que necesite la vista. Dado que en las plantillas _tml_ de la vista no se pueden incluir expresiones complejas hace que no contengan lógica que estará en el controlador asociado que es código Java donde tendremos la ayuda del compilador para detectar errores.

Para volver a la misma página en [Spring MVC][spring], [Struts][struts] o [Grails][grails] posiblemente deberíamos recibir además información para retornar a la misma página en la que estabamos cosa que es innecesaria en Tapestry por su [concepto de contexto de activación de página](http://tapestry.apache.org/page-navigation.html) y el patrón _Redirect-After-Post_ hará que al recargar la página por código con `window.localtion.reload();` después de una petición POST el navegador no muestre un diálogo modal informando al usuario de que se reenviarán datos.

{{< image
    gallery="true"
    image1="image:dialogo-recargar.png" optionsthumb1="300x200" title1="Diálogo recargar después de petición POST en Firefox"
    caption="Diálogo recargar después de petición POST en Firefox" >}}

[React][react] y [Polymer][polymer] son tecnologías de cliente en algunos aspectos similares a los componentes de Apache Tapestry pero con la diferencia de que unos son para el navegador del cliente y otros para el servidor, nada nos impide en la misma aplicación usar en el cliente React y Polymer y en el servidor Apache Tapestry. Nótese en el código del caso anterior que Tapestry ofrece integración con JavaScript de un modo que no existe ni en Spring MVC, Struts o Grails e incorpora de serie [RequireJS][requirejs], Undercore y jQuery, un componente de Tapestry puede requerir la cargar de un recurso de JavaScript y desde el componente es posible pasar datos al JavaScript usando el servicio [JavaScriptSupport](http://tapestry.apache.org/5.4/apidocs/org/apache/tapestry5/services/javascript/JavaScriptSupport.html).

Esto es solo un pequeño ejemplo de las posibilidades de Apache Tapestry me dejo muchas otras como los eventos, _translators_, _encoders_, _coerces_, librerías de componentes, _inversion of control_, AJAX, validaciones de formularios, ... En un proyecto las herrramientas no son lo más importante pero [el lenguaje de programación, _framework_ y librerías importan][blogbitix-153], hay [10 razones para seguir usando Java][blogbitix-81] y varios [motivos para elegir Apache Tapestry][elblogdepicodev-71].

### Finalizando

Lamentablemente hasta el momento no he tenido una oportunidad laboral de comprobar y demostrar que como en este ejemplo pero basado en una necesidad real que con Tapestry la implementación de la solución es más sencilla, menos propensa a errores y que la productividad no está relacionado con escribir unas pocas líneas de código menos con un lenguaje menos verboso o dejar de escribir puntos y comas al final de las líneas, más aún con las [novedades de Java 8][blogbitix-17]. Quizá un día llegue esa oportunidad :|.

{{< plugintapestry >}}

{{% /post %}}
