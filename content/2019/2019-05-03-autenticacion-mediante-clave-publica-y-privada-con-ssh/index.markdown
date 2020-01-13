---
pid: 401
type: "post"
title: "Autenticación mediante clave pública y privada con SSH"
url: "/2019/05/autenticacion-mediante-clave-publica-y-privada-con-ssh/"
date: 2019-05-03T20:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "logotype:gnu.svg"
tags: ["gnu-linux", "planeta-codigo", "seguridad"]
---

{{% post %}}

{{< logotype image1="gnu.svg" image2="linux.svg" >}}

Una de las formas más comunes de autenticar a un usuario, comprobar que un usuario es quien dice ser, es mediante un usuario y contraseña. Contraseña que (en principio) solo conoce el usuario por lo que si este proporciona la correcta se determina que es quien dice ser. Sin embargo, las contraseñas son débiles si no incluyen letras en mayúsculas y minúsculas, números y símbolos pero también difíciles de recordar agravado porque en cada servicio se debería usar una diferente para impedir que ante el descubrimiento de una no sea posible acceder a todos los otros servicios donde se usase la misma.

Para generar contraseñas fuertes se puede usar [Strong Password Generator][strongpasswordgenerator] y para almacenarlas [el programa KeePassXC][blogbitix-196].

Con [OpenSSH][openssh] también se puede iniciar sesión de línea de comandos en otro sistema proporcionando un usuario y una contraseña que se solicitará. O mejor aún con una clave pública y privada sin necesidad de introducir una contraseña.

{{< code file="ssh.sh" language="bash" options="" >}}

{{< image
    gallery="false"
    image1="image:openssh.png" optionsthumb1="600x450" title1="OpenSSH" >}}

Usar SSH es más seguro y más cómodo que usar contraseñas para realizar la autenticación, es más seguro ya que una clave pública y privada son más largas y es más cómodo ya que no se solicita contraseña constantemente que de otra manera al cabo de un tiempo se convierte en un paso tedioso y molesto. Lo primero que hay que hacer es [generar una clave SSH pública y privada][blogbitix-13] propia. Una clave de 2048 bits ya se considera segura pero como cuesta lo mismo generar una de más bits se puede generar una de 8192 bits para más seguridad.

{{< code file="ssh-keygen.sh" language="bash" options="" >}}

En el servidor SSH se deben modificar algunas propiedades de configuración del archivo de configuración _/etc/ssh/sshd\_config_ para permitir la autenticación con usuario y contraseña para poder copiar la clave pública y una vez copiada la clave para mayor seguridad no permitir la autenticación mediante usuario y contraseña.

{{< code file="sshd_config" language="plaintext" options="" >}}

Una vez generado el par de claves hay que copiar la clave pública al servidor donde se desee iniciar sesión. Manualmente concatenando la clave pública al archivo _.ssh/authorized_keys_ del directorio _home_ del usuario con el que se quiere iniciar sesión o también se puede copiar la clave pública usando el comando _ssh-copy-id_. Para revocar el acceso mediante esa clave basta con eliminar su linea del archivo de claves autorizadas.

{{< code file="ssh-copy-id.sh" language="bash" options="" >}}
{{< code file="passwd.sh" language="bash" options="" >}}

Si se poseen varios pares de claves públicas y privadas se puede especificar que clave privada usar para cada máquina a la que se desee conectar en el archivo _~/.ssh/config_.

{{< code file="ssh-config" language="java" options="" >}}

La clave privada debe tener permisos restringidos sino se muestra una advertencia e impide el inicio de sesión.

{{< code file="chmod.sh" language="java" options="" >}}

Para probar la autenticación con SSH se puede utilizar una máquina virtual de [VirtualBox][virtualbox] creada con [Vagrant][vagrant]. En el caso de utilizar el usuario _ubuntu_ hay que asignarle una clave con el comando _passwd_ para ejecutar comando _ssh-copy-id_ ya que se solicita su contraseña en este paso, una vez realizado se puede desactivar la autenticación mediante usuario y contraseña cambiando el valor de la configuración _PasswordAuthentication_ a _no_.

{{< code file="Vagrantfile" language="plaintext" options="" >}}
{{< code file="vagrant.sh" language="bash" options="" >}}

{{< reference >}}
* [Does ssh key need to be named id_rsa?](http://askubuntu.com/questions/30788/does-ssh-key-need-to-be-named-id-rsa#30792)
* [How to permanently add a private key with ssh-add on Ubuntu?](http://stackoverflow.com/questions/3466626/add-private-key-permanently-with-ssh-add-on-ubuntu)
* [How do I remove the passphrase for the SSH key without having to create a new key?](http://stackoverflow.com/questions/112396/how-do-i-remove-the-passphrase-for-the-ssh-key-without-having-to-create-a-new-ke)
{{< /reference >}}

{{% /post %}}
