class Vehiculo {
  constructor() {
    this._marca = 'Seat';
    this._color = 'rojo';
    this._kilometros = 100;
  }
  get color() {
    return this._color;
  }
  set color(c) {
    this._color = c;
  }
}

class Coche extends Vehiculo {
  get kilometros() {
    return this._kilometros;
  }
  set kilometros(k) {
    this._kilometros = k;
  }
}

const coche = new Coche();
console.log(coche.color);
// rojo