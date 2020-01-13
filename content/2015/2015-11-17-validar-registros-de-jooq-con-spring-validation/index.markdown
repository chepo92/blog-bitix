---
pid: 110
type: "post"
title: "Validar objetos con Spring Validation, ejemplo registros de jOOQ"
url: "/2015/11/validar-objetos-con-spring-validation-ejemplo-registros-de-jooq/"
date: 2015-11-17T19:00:00+01:00
updated: 2015-11-17T19:20:00+01:00
rss: true
sharing: true
comments: true
language: "es"
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
series: ["jooq"]
summary: "jOOQ es una alternativa a Hibernate que devuelve la base de datos a primer plano en una aplicación. Por la importancia en cualquier aplicación de los datos propone que la base de datos sea la única fuente de la verdad. Para los modelos es patente al generarse a partir del esquema de la base de datos para las validaciones se puede hacer con restricciones de integridad pero si queremos conocer los errores detalladamente que se produzcan puede que deseemos usar Spring Validation."
---

{{% post %}}

{{< logotype image="java.svg" >}}

En la documentación de [jOOQ][jooq] no he encontrado nada referente a cómo realizar validaciones antes de guardar los datos en la base de datos. Pero con la herramienta de generación se puede indicar que las clases Java generadas se anoten con las anotaciones de validación de la especificación JSR-303 según las restricciones encontradas en la base de datos. Las clases contendrán validaciones básicas como [@NotNull](https://docs.oracle.com/javaee/7/api/javax/validation/constraints/NotNull.html) o [@Size](https://docs.oracle.com/javaee/7/api/javax/validation/constraints/Size.html) pero no he visto nada más allá de estas simples validaciones. Si tenemos validaciones dependientes entre campos o más complejas como una expresión regular necesitaremos algo más.

Si queremos ser puristas las validaciones deberíamos hacerlas en la base de datos usando _constraints_ impidiendo de esta manera que se guarden datos inválidos independientemente de la aplicación o microservicio que intente guardar algo en la base de datos. Sin embargo, realizando solo las validaciones en la base de datos puede que perdamos qué campo o campos son erróneos y los motivos por los que son erróneos, información que seguramente nos interese para indicar detalladamente los datos no válidos al usuario permitiéndole corregirlos.

Usando [jOOQ como alternativa a Hibernate][blogbitix-82] deberemos realizar las validaciones nosotros de alguna forma. jOOQ aboga por que la base de datos sea la única fuente de la verdad, claramente es así para los modelos o _records_ de datos que se generan a partir de las tablas y la relaciones entre ellas. Deberemos tener en cuenta los problemas de tener dos fuentes de la verdad o de realizar las validaciones a nivel de la aplicación en vez de en la base de datos pero si así lo deseamos podemos usar [Spring Validation][spring-validation].

Con Spring Validation tenemos diferentes formas de realizar las validaciones, dos de ellas son con las anotaciones de la [especificación de validación](http://beanvalidation.org/) JSR-303 o implementando una clase de la interfaz [Validator](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/validation/Validator.html). En el siguiente ejemplo se muestra una combinación de ambos, un Validator que valida primeramente las anotaciones de JSR-303 para una clase _record_ de jOOQ y posteriormente unas validaciones adicionales propias de la aplicación u en otro caso para campos campos dependientes. A través de las clases [DataBinder](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/validation/DataBinder.html) y el [SpringValidationAdapter](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/validation/beanvalidation/SpringValidatorAdapter.html) validaremos un objeto con las anotaciones de [javax.validation](https://docs.oracle.com/javaee/7/api/javax/validation/package-summary.html) y las propias de Spring además de adaptar los errores a la interfaz [Errors](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/validation/Errors.html) con la que inspeccionaremos los errores. Perfectamente podemos usar únicamente los _Validator_ de Spring sin tener en cuenta las anotaciones de _javax.validation_, nótese también que podemos implementar múltiples validadores de Spring con diferentes criterios de validación.

{{< code file="EmployeeValidator.java" language="java" options="" >}}

En un determinado servicio donde implementaremos la lógica de negocio realizaremos la validación de forma explícita antes de guardar el registro, para ello inyectaremos en el servicio la referencia al validador de Spring con la [anotación Autowired](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/beans/factory/annotation/Autowired.html) y usaremos uno de sus métodos sobrecargados [_validate_](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/validation/beanvalidation/SpringValidatorAdapter.html#validate-java.lang.Object-org.springframework.validation.Errors-) para que compruebe las validaciones que haya definidas para ese registro.

{{< code file="DefaultAppService.java" language="java" options="" >}}

Realmente aunque el ejemplo muestra como validar un objeto de tipo [Record](http://www.jooq.org/javadoc/latest/org/jooq/Record.html) de jOOQ lo mismo puede ser aplicado para validar cualquier otro tipo de objeto Java con Spring Validation. Las clases _record_ generadas por jOOQ implementan una interfaz en la que se exponen los métodos _get_ y _set_ con las columnas de la tabla.

{{< code file="IEmployee.java" language="java" options="" >}}

En la salida en al terminal de la [aplicación de ejemplo con Spring Boot][blogbitix-103] se observa que se producen varios errores de validación para un objeto empleado, al validarlo le falta un valor para los campos _id_, _name_ por restricciones de base de datos detectadas con las anotaciones @NotNull y al tener una fecha posterior a la actual también falla una validación propia de la aplicación. El campo _id_ lo asignará jOOQ cuando se guarde en base de datos por lo que esta validación no deberemos tenerla en cuenta al guardar registros nuevos.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

{{< sourcecode git="blog-ejemplos/tree/master/SpringBoot" command="./gradlew updateDatabase, ./gradlew generateModels, ./gradlew run" >}}

{{% /post %}}