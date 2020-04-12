---
pid: 475
type: "post"
title: "Animaciones y transformaciones 2D y 3D con CSS"
url: "/2020/04/animaciones-y-transformaciones-2d-y-3d-con-css/"
date: 2020-04-12T11:00:00+02:00
language: "es"
rss: true
sharing: true
comments: true
promoted: false
imagePost: "image:css-animations-transformations.png"
tags: ["planeta-codigo", "web"]
---

{{% post %}}

{{< logotype image1="html.svg" >}}

En la antigüedad para añadir algo de dinamismo a las páginas había que hacerlo mediante código JavaScript, por ejemplo, para hacer que una imagen cambiase por otra cuando el ratón pasaba por encima. Con las nuevas versiones de CSS esto se realiza con selectores de CSS en la hoja de estilos. Ahora es posible hacer muchas cosas sin necesidad de utilizar código JavaScript, dos de ellas son las transformaciones 2D, 3D y animaciones. No solo es más fácil crear las animaciones con CSS sin requerir crear código que es más difícil de modificar sino que también ofrece mejor rendimiento.

### Animaciones

Por una parte se define las propiedades CSS que cambian en la animación y por otro de definen las propiedades de la animación y a que elementos de la página se aplica.

Dos ejemplos de animación son:

{{< code file="keyframes.css" language="css" options="" >}}

Las propiedades principales de la animación al aplicarlas a un elemento de la página son:

* _animation-name: animation1;_, aplica la animación indicada definida con _@keyframes_.
* _animation-duration: 5s;_, determina la duración de la animación.
* _animation-timing-function: linear;_, aplica una función para interpolar los valores que se asignara en cada propiedad y fotograma. Los valores posibles son: _linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int,start|end)|cubic-bezier(n,n,n,n)|initial|inherit_.
* _animation-delay: 2s;_, retraso en el inicio de la animación.
* _animation-iteration-count: infinite;_, número de veces a repetir la animación. Los valores posibles son: _number|infinite|initial|inherit_.
* _animation-direction: alternate;_, dirección a aplicar la animación. Los valores posibles son: _normal|reverse|alternate|alternate-reverse|initial|inherit;_.

{{< code file="animation.css" language="css" options="" >}}

Con estas propiedades de animación, la definición de las propiedades que cambian en una animación y los selectores CSS es posible realizar animaciones muy curiosas con la ventaja de que al realizarlas no con JavaScript el rendimiento es mucho mejor, las transiciones muy suaves y sencillo de crear y modificar.

### Transformaciones

Las transformaciones 2D permite aplicar escalado, rotación, traslación, inclinación o _skew_ con la propiedad de _transform_. La lista de funciones 2D es:

* rotate(angle)
* scale(x,y)
* scaleX(n)
* scaleY(n)
* translate(x,y)
* translateX(n)
* translateY(n)
* skew(x-angle,y-angle)
* skewX(angle)
* skewY(angle)

O aplicando varias de ellas con una matriz:

* matrix(n,n,n,n,n,n)

{{< code file="transform.css" language="css" options="" >}}

Las funciones de transformación 3D aplican efectos 3D a los elementos.

* matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
* translate3d(x,y,z)
* translateX(x)
* translateY(y)
* translateZ(z)
* scale3d(x,y,z)
* scaleX(x)
* scaleY(y)
* scaleZ(z)
* rotate3d(x,y,z,angle)
* rotateX(angle)
* rotateY(angle)
* rotateZ(angle)
* perspective(n)

Estos son tres ejemplos de efectos aplicando transformaciones y animaciones, se pueden combinar ambos a la vez. Un ejemplo aplica una operación de transofrmación a una imagen, otro al ubicar el ratón encima empieza a rotar y otro que repite una transición de color y translación de forma infinita.

{{< code file="example.css" language="css" options="" >}}
{{< code file="example.xhtml" language="html" options="" >}}

<div style="display: flex; justify-content: space-evenly; margin-top: 150px; height: 300px;">
    <div>
        {{< image
            gallery="false"
            image1="image:alemania-destructor-z-23.jpg" optionsthumb1="450x300" title1="Imagen sin transformación" class1="image"
            caption="Imagen sin transformación" >}}
    </div>
    <div>
        {{< image
            gallery="false"
            image1="image:alemania-destructor-z-23.jpg" optionsthumb1="450x300" title1="Imagen sin transformación" class1="image image-transform"
            caption="Imagen con transformación 2D" >}}
    </div>
</div>

<div style="display: flex; justify-content: space-evenly; margin-top: 150px; height: 300px;">
    <div class="box-transform"></div>
    <div class="box-animation"></div>
</div>

<style type="text/css">
    @keyframes animation {
        0%   {background-color: red; left: 0px; top: 0px;}
        25%  {background-color: yellow; left: 200px; top: 0px;}
        50%  {background-color: blue; left: 200px; top: 200px;}
        75%  {background-color: green; left: 0px; top: 200px;}
        100% {background-color: red; left: 0px; top: 0px;}
    }

    @keyframes transform {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
    }

    div.box-animation {
        width: 100px;
        height: 100px;
        background-color: red;
        position: relative;

        animation-name: animation;
        animation-duration: 5s;
        animation-timing-function: linear;
        animation-delay: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    img.image {
        height: 250px;
        background-color: green;
    }

    img.image-transform {
        transform: skewY(25deg);
    }

    div.box-transform {
        width: 100px;
        height: 100px;
        background-color: black;
    }

    div.box-transform:hover {
        animation-name: transform;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
</style>

{{% reference %}}
* [CSS Animations](https://www.w3schools.com/css/css3_animations.asp)
* [CSS 2D Transforms](https://www.w3schools.com/css/css3_2dtransforms.asp)
* [CSS 3D Transforms](https://www.w3schools.com/css/css3_3dtransforms.asp)
* [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
* [CSS Transforms](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Transforms)
{{% /reference %}}

{{% /post %}}
