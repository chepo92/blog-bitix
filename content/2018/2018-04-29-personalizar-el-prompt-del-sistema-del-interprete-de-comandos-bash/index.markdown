---
pid: 316
type: "post"
title: "Personalizar el prompt del sistema del intérprete de comandos Bash"
url: "/2018/04/personalizar-el-prompt-del-sistema-del-interprete-de-comandos-bash/"
date: 2018-04-29T10:30:00+02:00
updated: 2018-04-29T21:30:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

El _prompt_ de la terminal es el símbolo del sistema que precede al comando que introducimos en la terminal y por defecto indica el directorio de trabajo que utilizarán los comandos y el directorio que utilizarán las rutas relativas. El _prompt_ del intérprete de comandos _Bash_ se puede personalizar para por ejemplo modificar el color de su texto y la información que incluye con las preferencias del usuario.

El _prompt_ se configura con la variable de entorno _PS1_ que en _Bash_ está en el directorio personal definido en el archivo _.bashrc_. Los colores se especifican con una secuencia de caracteres y números que forman códigos de escape que son interpretados de forma especial, estas secuencias están mezclados con las secuencias de la información a mostrar. Como conocer las secuencias de caracteres con los códigos de escape ANSI para los colores y letras para la información es complicado de escribir o conocer al detalle en la web [Bash $PS1 Generator](https://www.kirsle.net/wizards/ps1.html) hay un asistente que facilita el crear un _prompt_ a nuestro gusto de forma sencilla y correcta.

El siguiente es el que utilizo en mi sistema con colores, el nombre del usuario, el nombre sistema y el directorio de trabajo actual.

{{< image
    gallery="true"
    image1="image:prompt-bash-personalizado.png" optionsthumb1="300x200" title1="Prompt de la terminal personalizado"
    caption="Prompt de la terminal personalizado" >}}

Según se edita el _prompt_ el asistente previsualiza como queda en la sección _Preview_, una vez que el _prompt_ es el que deseamos en la sección _Result_ el asistente ofrece el contenido de la variable de entorno _PS1_ que hay que añadir o cambiar en el archivo _~/.bashrc_.

{{< code file="bashrc" language="plaintext" options="" >}}

Si quieres mostrar alguna información que sea el resultado de algún comando también se puede añadir al _prompt_. Por ejemplo, supón que se desea añadir la hora del sistema al _prompt_ útil si se quiere a modo de registro para conocer posteriormente a que hora se lanzó un comando, la información de la hora entre otras posibles cosas relacionadas con la fecha la devuelve el comando _date_. El siguiente _script_ de _Bash_ usando el comando _date_ proporciona la información de la hora a añadir en este caso.

{{< code file="date.sh" language="bash" options="" >}}

Ahora hay que incluir esta información en el _prompt_ de la siguiente forma.

{{< code file="bashrc-date" language="plaintext" options="" >}}

{{< image
    gallery="true"
    image1="image:prompt-bash-date.png" optionsthumb1="300x200" title1="Prompt de la terminal personalizado con el resultado de un comando"
    caption="Prompt de la terminal personalizado con el resultado de un comando" >}}

Otro caso habitual es añadir la rama de git del directorio actual de trabajo y si esta tiene cambios como comento en [Prompt de la terminal personalizado en carpetas de git con el intérprete Bash][blogbitix-316]. El _script_ necesario que proporciona [Git][git] es más complejo que el caso anterior pero con la misma finalidad, el _script_ está en [git-prompt.sh](https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh) y requiere modificar la variable de entorno _PS1_ o bien _PROMPT\_COMMAND_.

{{< image
    gallery="true"
    image1="image:git-bash.png" optionsthumb1="300x200" title1="Prompt de la terminal por defecto"
    caption="Prompt de la terminal personalizado en carpeta de git" >}}

{{< reference >}}
* [Short date in bash PS1 prompt](https://stackoverflow.com/questions/9200862/short-date-in-bash-ps1-prompt)
{{< /reference >}}

{{% /post %}}
