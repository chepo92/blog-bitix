---
pid: 235
type: "post"
title: "Sobre el ataque de ransomware que ha sufrido Telefonica y otras empresas"
url: "/2017/05/sobre-el-ataque-de-ransomware-que-ha-sufrido-telefonica-y-otras-empresas/"
date: 2017-05-21T11:00:00+02:00
updated: 2017-05-21T11:45:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:microsoft.svg"
tags: ["gnu-linux", "microsoft", "opinion", "planeta-codigo"]
---

{{% post %}}

{{< logotype image1="microsoft.svg" title1="Microsoft" width1="300" image2="windows-10.svg" title2="Windows 10" width2="300" >}}

El día 12 de mayo de 2017 se produjo un ataque informático de tipo ransomware que afectó a varias empresas entre ellas Telefonica. El ataque se aprovecha de una vulnerabilidad conocida en los sistemas con el sistema operativo [Windows][windows] no parcheados y vulnerables y para la cual [Microsoft][microsoft] ya había publicado un parche de seguridad que la corregía. El programa [ransomware _WannaCry_](https://en.wikipedia.org/wiki/WannaCry_ransomware_attack) era extremadamente peligroso ya que cifra los archivos y documentos locales o en unidades a las que tuviese acceso el sistema afectado solicitando para recuperarlos 300 dólares en bitcoins.

La peligrosidad de este ransomware radica en que cifra los datos que es una de las cosas más importantes de un sistema, también causa que el sistema deje de prestar su servicio con los quebrantos que puede ocasionar si el buen funcionamiento del sistema es crítico en una empresa. Una vez un sistema es corrompido la forma de no ser víctima de la extorsión para recuperar los archivos es a través de una copia de seguridad una vez reinstalado Windows.

{{< image
    gallery="true"
    image1="image:wannacry.png" optionsthumb1="300x200" title1="Captura del ransomware WannaCry en un sistema infectado"
    caption="Captura del ransomware WannaCry en un sistema infectado" >}}

El programa ransomware se introduce en los los sistemas aún vulnerables conectados a internet o porque un usuario lo activa por ejemplo mediante un clic en un correo electrónico en un sistema interno no conectado directamente a internet. Una vez un sistema es infectado se transmite al resto de equipos vulnerables a los que tenga acceso de la red local, multiplicando el problema.

Unos dicen que el problema es de Windows pero al ser un sistema operativo mayoritario este es más interesante de atacar por los delincuentes informáticos. También en defensa de Windows unos dicen que Microsoft ya publicó un parche de seguridad que lo resolvía y que la culpa es de las empresas que no los mantiene actualizados pero no es tan sencillo, algunos sistemas son críticos o desempeñan funciones importantes por los que una actualización que cause problemas no es plausible ya que genera problemas y costes entre otras cosas, la opción es mantenerlos desactualizados hasta que las actualizaciones se comprueben que no causan problemas.

Son numerosos los medios que se han hecho eco del acontecimiento tecnológico de esa semana:

* [Telefónica se ha visto afectada por un ataque masivo, no uno dirigido](https://www.genbeta.com/actualidad/telefonica-se-ha-visto-afectada-por-un-ataque-masivo-no-uno-dirigido)
* [Reacción de las empresas españolas al ataque a Telefónica: entre la precaución y el pánico](https://www.xataka.com/seguridad/reaccion-de-las-empresas-espanolas-al-ataque-a-telefonica-entre-la-precaucion-y-el-panico)
* [El ransomware que atacó a Telefónica se propaga: Wanna Decrypt0r deja KO varios hospitales en UK](https://www.xataka.com/seguridad/el-ransomware-que-ataco-a-telefonica-se-propaga-wanacrypt0r-deja-ko-varios-hospitales-en-uk)
* [El ciberataque no solo afectó a Telefónica, es en realidad un ciberataque a nivel mundial](https://blog.underc0de.org/ciberataque-no-solo-afecto-telefonica-realidad-ciberataque-nivel-mundial/)
* [El CNI confirma un “ataque masivo” contra las redes informáticas de empresas españolas ](http://www.elindependiente.com/economia/2017/05/12/cni-confirma-ataque-masivo-las-redes-informaticas-empresas-espanolas/)
* [Un ciberataque golpea a empresas, hospitales y escuelas a nivel mundial](http://es.reuters.com/article/topNews/idESKBN1881OD-OESTP)
* [Un ciberataque a gran escala nos enseña por qué es importante mantener Windows actualizado](http://www.microsoftinsider.es/123739/ciberataque-gran-escala-nos-ensena-importante-mantener-windows-actualizado/)
* [El ataque ransomware contra Telefónica ya afecta en todo el mundo](http://es.engadget.com/2017/05/12/el-ataque-ransomware-contra-telefonica-ya-afecta-en-todo-el-mund/)
* [El ataque informático masivo que afectó a España se extiende a nivel global](http://www.elconfidencial.com/tecnologia/2017-05-12/hackeo-ataque-red-telefonica_1381682/)
* [Microsoft culpa a las empresas del ataque ¿Son responsables por no actualizar Windows?](https://www.adslzone.net/2017/05/13/microsoft-culpa-las-empresas-del-ataque-son-responsables-por-no-actualizar-windows/)
* [WannaCryptor, o como un ransomware puso en jaque a empresas de todo el mundo en pocas horas](https://blogs.protegerse.com/laboratorio/2017/05/13/wannacryptor-o-como-un-ransomware-puso-en-jaque-a-empresas-de-todo-el-mundo-en-pocas-horas/?platform=hootsuite)
* [El investigador que frenó el ataque de ransomware mundial por accidente](https://hipertextual.com/2017/05/investigador-freno-ataque-ransomware-mundial-accidente)
* [Recomendaciones para hacer frente a un ransomware](https://www.redeszone.net/2017/05/13/recomendaciones-para-hacer-frente-a-un-ransomware/)

{{< twitter id="863364192316735488" >}}
<p lang="en" dir="ltr">The release of the patch probably isn&#39;t going to help that £15m MRI machine that runs XP embedded whose maker went bankrupt 10 years ago.</p>&mdash; Barry Dorrans (@blowdart) <a href="https://twitter.com/blowdart/status/863364192316735488">13 de mayo de 2017</a>
{{< /twitter >}}

Quizá alguien piense que un sistema con [GNU][gnu]/[Linux][linux] hubiese sido distinto pero no, un sistema GNU/Linux desactualizado es igual de vulnerable, por el hecho de ser GNU/Linux no es más seguro. Lo que hay que implementar son procedimientos y aplicar medidas para evitar estos fallos de seguridad y para minimizar las vulnerabilidades de los sistemas cualquiera que sea el sistema utilizado. A pesar de lo anterior una muestra de la seguridad que ofrece GNU/Linux que hay que destacar es que es un sistema utilizado en una gran mayoría de servidores importantes de los que ofrecen servicios en internet u otros servicios críticos, correctamente configurados y mantenidos funcionando de forma segura.

En unas empresas y sociedad cada vez más dependientes de la tecnología un ataque como este puede causar importantes daños como ha sido en el caso del sistema de salud británico, en empresas como en el mismo caso de Telefonica ha obligado a apagar sistemas para evitar la propagación y preventivamente males mayores impidiendo trabajar con normalidad a un importante número de empleados de la empresa. El ataque de _WannaCry_ es una advertencia de lo que puede provocar un caso peor en el futuro, y este ransomware cuando actúa es evidente que se está sufriendo, otros ataques menos notorios pueden pasar inadvertidos. Algo que ocasionará lo sucedido es que [se dedicarán más recursos a la seguridad](http://www.publico.es/internacional/industria-ciberseguridad-coge-musculo-oleada.html).

{{< twitter id="863563517898747904" >}}
<p lang="en" dir="ltr">Windows XP was released in 2001, every Linux kernel before 2013 is out of support, more CVEs reported for Linux in 2016, 2017 than Windows <a href="https://t.co/QzTPSFp0Pr">pic.twitter.com/QzTPSFp0Pr</a></p>&mdash; Ben Adams (@ben_a_adams) <a href="https://twitter.com/ben_a_adams/status/863563517898747904">14 de mayo de 2017</a>
{{< /twitter >}}

GNU/Linux es un sistema más abierto y público que Windows, su código fuente está disponible para ser analizado por cualquiera con los conocimientos de programación suficientes y cuando un fallo de seguridad es descubierto el parche de seguridad es publicado no mucho tiempo más tarde sin depender de los intereses de una única empresa. Windows al ser más cerrado y desarrollado por una empresa que tiene su control absoluto, del cual dependen otras empresas y organizaciones gubernamentales, algunos fallos de seguridad son ocultados pero explotables hasta que son resueltos por el parche de seguridad.

Pero sin duda en cualquiera de los dos sistemas operativos el usuario o administrador del sistema es una pieza clave para mantener su seguridad como comento en el artículo [Distribuciones GNU/Linux, ¿más seguras que Windows?][blogbitix-205].

{{% /post %}}
