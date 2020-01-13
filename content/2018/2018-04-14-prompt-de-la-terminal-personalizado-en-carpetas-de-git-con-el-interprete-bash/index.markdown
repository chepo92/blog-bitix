---
pid: 312
type: "post"
title: "Prompt de la terminal personalizado en carpetas de git con el intérprete Bash"
url: "/2018/04/prompt-de-la-terminal-personalizado-en-carpetas-de-git-con-el-interprete-bash/"
date: 2018-04-14T00:30:00+02:00
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

Uno de los sistemas de control de versiones más utilizado es [Git][git]. [Bash][bash] es el intérprete de comandos por defecto en la mayoría de distribuciones [GNU][gnu]/[Linux][linux]. A la hora de trabajar en la terminal y estando como directorio actual en un directorio que está bajo el control de versiones de git bash por defecto no muestra ninguna información del estado de los archivos en su repositorio en el símbolo del sistema o _prompt_.

El intérprete [Zsh][zsh] y [Oh-My-Zsh](https://ohmyz.sh/) ofrece mediante sus temas soporte para los repositorios de git modificando el símbolo del sistema para mostrar más información acerca del estado. En Bash también es posible añadir soporte para que muestre información como la rama actual en la que se está trabajando, si hay archivos modificados o no añadidos al control de versiones, si hay archivos en el _stash_ y una comparación entre la rama actual y la del origen o _upstream_.

{{< image
    gallery="true"
    image1="image:terminal.png" optionsthumb1="300x200" title1="Prompt de la terminal por defecto"
    image2="image:git-bash.png" optionsthumb2="300x200" title2="Prompt de la terminal en carpeta git"        
    caption="Prompt de la terminal por defecto y en carpeta de git" >}}

* \* la presencia de este caracter indica que hay cambios en alguno de los archivos bajo el control de versiones.
* \+ indica que hay archivos añadidos al _stash_
* _=_ indica que la rama está en el mismo estado que en _upstream_, en su lugar puede mostrarse el caracter _>_ para indicar que la rama en local está por delante de la rama en remoto o mostrarse _<_ para lo contrario.

El _script_ necesario para añadir el soporte a repositorios git en Bash es [git-prompt.sh](https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh). Una vez descargado su funcionalidad se personaliza con varias variables de entorno tal y como está documentado en el comentario al inicio de este _script_ que se añaden en el archivo de perfil del usuario de inicio _.bashrc_. Añadidas unas variables de entorno que empiezan por _GIT\_PS1_ y hecho el _source_ del script junto con la utilización de la variable _PROMPT\_COMMAND_ en lugar de _PS1_ para posibilitar la información de estado con colores al estar en un directorio git se muestra el _prompt_ del ejemplo anterior.

{{< code file="install.sh" language="bash" options="" >}}

Este es el archivo _.bashrc_ completo de la distribución [Arch Linux][archlinux] con el soporte para el _script_ _git-prompt.sh_ y algunas opciones personalizadas.

{{< code file="bashrc" language="plaintext" options="" >}}

La documentación completa con todas las opciones de personalización están en las primeras líneas de comentario del _script_.

{{< reference >}}
* [Personalizar el prompt del sistema del intérprete de comandos Bash][blogbitix-316]
{{< /reference >}}

{{% /post %}}
