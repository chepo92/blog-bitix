---
pid: 16
type: "post"
title: "Guía para la creación de un blog con Octopress"
url: "/2014/03/guia-para-la-creacion-de-un-blog-con-octopress/"
date: 2014-03-14T18:19:24+01:00
updated: 2014-06-07T01:00:00+02:00
rss: true
sharing: true
comments: true
imagePost: "logotype:octopress.png"
tags: ["blog", "software", "software-libre", "planeta-codigo"]
---

{{% post %}}

{{< logotype image="octopress.png" title="Octopress" width="300" >}}

En la [primera entrada de este blog usando Octopress][blogbitix-0] ya comentaba las razones por las que he pasado de usar [Blogger](http://www.blogger.com) a usar [Octopress](http://octopress.org/). Entre las razones del cambio estaban la posibilidad en Octopress de escribir en markdown, edición desconectado (para textos e imágenes), diseño adaptable y más personalizable, git y control de versiones, alojamiento en cualquier servidor web. Aún sin ser Octpress también tiene cosas mejorables pero desde luego me está resultando mucho mejor que blogger.

En esta entrada quiero escribir una guía con los pasos necesarios para crear un blog en Octopress de forma rápida y algunas funcionalidades a tener en cuenta o que deberemos realizar.

Antes de empezar supondré que ya tenemos en nuestro sistema [ruby](https://www.archlinux.org/packages/extra/x86_64/ruby/) y [git](https://www.archlinux.org/packages/extra/x86_64/git/) instalados. En Linux basta con buscar el paquete correspondiente para nuestra distribución e instalarlo con el gestor de paquetes. Con [Arch Linux](https://www.archlinux.org) tan simple como:

{{< code file="script-1.sh" language="bash" options="" >}}

Empezamos clonando con git el repositorio de Octopress y la configuración inicial, sustituyendo blog-bitix por el nombre del repositorio del blog en GitHub que habremos creado previamente:

{{< code file="script-2.sh" language="bash" options="" >}}

En esta guía voy a comentar como alojar el blog empleando [GitHub Pages](http://pages.github.com/) que nos ofrece alojamiento gratuito tanto para el blog como para el repositorio git de código fuente, la URL será del estilo _http\://[usuario].github.io/[nombre-blog]_. Para ello, primero en la página de GitHub crearemos el repositorio para alojar el código y el blog, después ejecutaremos el siguiente comando que nos pedirá la dirección de nuestro repositorio en mi caso git@github.com:picodotdev/blog-bitix.git:

{{< code file="script-3.sh" language="bash" options="" >}}

Configuramos git para que conozca nuestro usuario al hacer commits:

{{< code file="script-4.sh" language="bash" options="" >}}

Hacemos lo mismo en el repositorio git de la carpeta \_deploy. Octopress usa dos repositorios git, uno para el código fuente del repositorio y otro para lo que ven los usuarios del blog. Octopress configura git de tal forma que los dos repositorios sean dos ramas del mismo repositorio en GitHub:

{{< code file="script-5.sh" language="bash" options="" >}}

Cambiamos el origen de la rama master a la de nuestro GitHub en vez del origen de Octopress:

{{< code file="script-6.sh" language="bash" options="" >}}

Podemos previsualizar el estado actual del blog en el navegador introduciendo en él la dirección _http\://localhost:4000/blog-bitix/_:

{{< code file="script-7.sh" language="bash" options="" >}}

Haciendo el primer deploy del blog (deberemos [configurar SSH](https://help.github.com/articles/generating-ssh-keys)) dispondremos del blog en la siguiente dirección [https://picodotdev.github.io/blog-bitix/](https://picodotdev.github.io/blog-bitix/). Puede que el blog tarde unos minutos en estar disponible y deberemos hacerlo cada vez queramos que los cambios se apliquen al blog.

{{< code file="script-8.sh" language="bash" options="" >}}

Ya estamos listos para empezar a hacer cambios en el blog y crear entradas:

{{< code file="script-9.sh" language="bash" options="" >}}

Subimos los cambios al repositorio de GitHub con:

{{< code file="script-10.sh" language="bash" options="" >}}

Si queremos que el blog tenga un dominio propio en vez de un subdominio de GitHub deberemos crear un archivo CNAME con el nombre del dominio, subirlo al repositorio y hacer el deploy aparte de la [configuración que debamos hacer en los registros DNS de dominio](https://help.github.com/articles/setting-up-a-custom-domain-with-pages):

{{< code file="script-11.sh" language="bash" options="" >}}

Probablemente lo siguiente que deberemos empezar a hacer es [configurar ciertas propiedades](http://octopress.org/docs/configuring/) que afectan al blog, como las urls, nombre del blog, número de post por página, cambiar estilos, etc...

En un futuro quizá necesitemos obtener el repositorio del blog y la forma de disponer de él es diferente que crearlo desde cero con los pasos anteriores. Como comentaba en realidad los blogs con Octopress son dos repositorios de git y por tanto deberemos hacer un clone para cada uno de ellos, los comandos para clonar los repositorios son:

{{< code file="script-12.sh" language="bash" options="" >}}

Hay algunas cosas adicionales que he tenido que hacer para disponer de un blog completamente funcional como deseaba:

* Dado que el blog lo tengo alojado con el modo Project Pages en vez de User/Organization Pages he necesitado crear otro repositorio para que las [Web Master Tools](http://www.google.es/webmasters/tools/?hl=ES) me considere el dueño del dominio [http://picodotdev.github.io](http://picodotdev.github.io).
* En el blog es habitual que incluya capturas de pantalla a modo de explicación. Usando [ImageMagick para crear las pequeñas vistas previas](https://elblogdepicodev.blogspot.com.es/2012/11/convertir-imagenes-entre-formatos-y.html) y [Bootstrap Image Gallery](http://blueimp.github.io/Bootstrap-Image-Gallery/) consigo reducir el tamaño en KiB de la página ya que inicialmente solo se cargan las thumbnails que son mucho más pequeñas que las imágenes originales, aparte de que si las imágenes son muy grandes y se incluyen en su tamaño original es difícil que entren en el espacio reservado para el texto.
* Para facilitar que el contenido sea compartido he necesitado hacer una cuantas modificaciones para incorporar a Octopress [Karmacracy](http://karmacracy.com/), [ShareThis](https://www.sharethis.com/) y [Disqus](http://disqus.com/). Con estas herramientas sociales facilitaremos a los usuarios que compartan el contenido más fácilmente.
* También he necesitado modificar algunos estilos para dar al blog el aspecto que quería, para una persona con algunos conocimientos de programación y desarrollo web no es nada complicado.
* Para tener el directorio de imágenes organizado y no se convierta en un cajón desastre a cada post le doy un identificador y en la carpeta images/custom/posts creo una carpeta con ese identificador. De esa manera es fácil saber que imágenes he usado en cada post. Los logotipos que usaré en varias entradas las pongo en la carpeta images/custom/logotipos.

En el [código fuente del blog](https://github.com/picodotdev/blog-bitix) se puede ver los archivos para hacerlo. Por ejemplo, para integrar Karmacracy he necesitado modificar los siguientes archivos.

* source/layouts/\_post.html
* custom/post/karmacracy.html

{{< reference >}}
* [Hola nuevo mundo][blogbitix-0]
* [Mi experiencia y consejos para un blog][blogbitix-7]
{{< /reference >}}

{{% /post %}}
