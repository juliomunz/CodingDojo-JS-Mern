class Carta {
    constructor(nombre, costo) {
      this.nombre = nombre;
      this.costo = costo;
    }
  }
  
  class Unidad extends Carta {
    constructor(nombre, costo, poder, res) {
      super(nombre, costo);
      this.poder = poder;
      this.res = res;
    }
  
    atacar(target) {
      if (target instanceof Unidad) {
        console.log(`${this.nombre} ha atacado a ${target.nombre}`);
        target.res = target.res - this.poder;
      } else {
        throw Error("Sólo puedo atacar a otra carta de Unidad");
      }
    }

    class Efecto extends Carta{
        constructor (nombre, costo, texto, stat, magnitud){
            super(nombre,costo);
            this.texto=texto;
            this.stat=stat;
            this.magnitud=magnitud;
        }
    }