define("figuras",[],function(){function e(e){this.lado=e}function t(e,t){this.base=e,this.altura=t}return e.prototype.calculateArea=function(){return this.lado*this.lado},t.prototype.calculateArea=function(){return this.base*this.altura/2},{Cuadrado:e,Triangulo:t}}),define("built",["figuras"],function(e){var t=new e.Cuadrado(4),n=new e.Triangulo(4,3);alert("El área de un cuadrado de lado "+t.lado+" es "+t.calculateArea()),alert("El área de un triágulo de base "+n.base+" y altura "+n.altura+" es "+n.calculateArea())});