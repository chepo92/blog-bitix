---
pid: 257
type: "post"
title: "Los cuantificadores greedy, reluctant y possessive en expresiones regulares"
url: "/2017/09/los-cuantificadores-greedy-reluctant-y-possessive-en-expresiones-regulares/"
alias: ["/2017/09/los-cuantificadores-greedy-reluctant-y-posessive-en-expresiones-regulares/"]
date: 2017-09-09T11:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:java.svg"
tags: ["java", "planeta-codigo", "programacion"]
---

{{% post %}}

En el mundo de las expresiones regulares hay tres tipos de cuantificadores que varían el comportamiento según el número caracteres que toman para encontrar ocurrencias. Son _greedy_ o avaricioso, _reluctant_ o reacio y _possesive_ o posesivo. Cada cuantificador tiene una expresión en una expresión regular. La opción más habitual es el cuantificador _greedy_, añadiendo una _?_ se convierte en _reluctant_ y añadiendo un _+_ se convierte en _possesive_.

<pre>
Greedy  Reluctant  Possessive  Signigicado
X?      X??        X?+         X, uno o ninguno
X*      X*?        X*+         X, cero o mas
X+      X+?        X++         X, uno o más
X{n}    X{n}?      X{n}+       X, exactamente n veces
X{n,}   X{n,}?     X{n,}+      X, al menos n veces
X{n,m}  X{n,m}?    X{n,m}+     X, al menos n veces pero no mas de m
</pre>

Aparentemente cada uno de los cuantificadores realiza lo mismo, sin embargo, hay diferencias en su comportamiento al hacer emparejamientos entre los elementos de la expresión regular y la cadena en la que se está aplicando.

* _Greedy_ o avaricioso: este cuantificador intenta obtener el emparejamiento más largo que pueda, tantos carecteres como pueda, si el emparejamiento no es válido elimina un caracter de la cadena que se está comprobando y lo intenta de nuevo.
* _Reluctant_, reacio o vago: funciona al contrario que el cuantificador _greedy_, intentando inicialmente ningún caracter, tan pocos caracteres como pueda, si el emparejamiento no es válido añade un caracter de la cadena que se está comprobando y lo intenta de nuevo.
* _Possesive_ o posesivo: funciona igual que _greedy_ salvo que si el emparejamiento no es válido no elimina un caracter de la cadena que se está comprobando y finaliza la comprobación.

{{< code file="Main.java" language="java" options="" >}}
{{< code file="System.out" language="plaintext" options="" >}}

En el primer ejemplo del cuantificador _greedy_ se usa _.*_ para encontrar cualquier cosa, cero o más veces, seguido de las letras _f_ _o_ _o_. Dado que el cuantificador de la expresión la expresión _.*_ es avaricioso primero consume toda la cadena. En este punto, no hay coincidencia dado que las tres últimas letras (_f_ _o_ _o_) han sido consumidas. De modo quese busca con una letra menos sucesivamente hasta que la la ocurrencia más a la derecha de _foo_ ha sido regurgitada, en este punto hay coincidencia y la búsqueda finaliza.

En el segundo ejemplo, sin embargo, el cuantificador es reacio o vago de modo que empieza consumiendo nada. Dado que _foo_ no aparece en el inicio de la cadena es forzado a tomar la primera letra _x_ con la que se encuentra la primera coincidencia entre 0 y 4. Se siguen encontrando coincidencias hata que la cadena de entrada ha sido consumida. Encuenta otra coincidencia en 4 y 13.

En el tercer caso se se hayan coincidencias ya que el cuantificador es posesivo. En este caso, la cadena completa es consuimida por _.*+_ dejando nada que satisfaga el patrón _foo_ al final de la expresión. Dado que no vuelve hacia atrás tiene mejor rendimiento que el cuantoficador _greedy_ en los casos que se quiera encontrar una coincidiencia completa en algo.

{{< sourcecode git="blog-ejemplos/tree/master/JavaRegexQuantifiers" command="./gradlew run" >}}

{{< reference >}}
* [Extraer elementos de una cadena con una expresión regular][blogbitix-140]
* [Referencias a grupos de captura en expresiones regulares y reemplazos][blogbitix-300]
* [Ofuscar datos sensibles en las trazas con Log4j][blogbitix-383]
* [Lookahead y lookbehind en expresiones regulares con Java][blogbitix-385]
* [Regular Expression Quantifiers](https://docs.oracle.com/javase/tutorial/essential/regex/quant.html)
* [Greedy vs. Reluctant vs. Possessive Quantifiers](https://stackoverflow.com/questions/5319840/greedy-vs-reluctant-vs-possessive-quantifiers)
* [Regex Quantifier Tutorial: Greedy, Lazy, Possessive](http://www.rexegg.com/regex-quantifiers.html)
{{< /reference >}}
