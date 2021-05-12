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
  }

    class Efecto extends Carta {
        constructor (nombre, costo, texto, stat, magnitud){
            super(nombre,costo);
            this.texto=texto;
            this.stat=stat;
            this.magnitud=magnitud;
        }
    
    
        effect(target){
        if (target instanceof Unidad) {
            console.log(`${this.nombre} ha producido el siguiente efecto en ${target.nombre}: ${this.texto}`);
            target[this.stat]=target[this.stat]+this.magnitud;
          } else {
            throw Error("Sólo puedes afectar a otra carta de Unidad");
          }
    }
    }

let ninjaRojo = new Unidad("Ninja Cinturón Rojo", 3, 3, 4);
console.log('El jugador 1 convoca a Ninja Cinturon Rojo');

console.table({ ninjaRojo });

console.log('El jugador 1 juega "Algoritmo Dificil" en Ninja Cinturón Rojo')
let algoritmoDificil=new Efecto('Algoritmo Difícil',2,'Aumentar la resistencia del objetivo en 3','res',3);
algoritmoDificil.effect(ninjaRojo);

console.table({ ninjaRojo });

let ninjaNegro = new Unidad("Ninja Cinturón Negro", 4, 5, 4);
console.log('El jugador 2 convoca a Ninja Cinturon Negro');

console.table({ ninjaRojo, ninjaNegro });

console.log('El jugador 2 juega "Rechazo de promesa no controlada" en Ninja Cinturón Rojo')
let rechazoPromesa=new Efecto('Rechazo de promesa no controlada',1,'Reducir la resistencia del objetivo en 2','res',-2);
rechazoPromesa.effect(ninjaRojo);

console.table({ ninjaRojo, ninjaNegro });

console.log('El jugador 1 juega "Programación en pareja" en Ninja Cinturón Rojo')
let prograPareja=new Efecto('Programación en Pareja',3,'Aumentar el poder del objetivo en 2','poder',2);
prograPareja.effect(ninjaRojo);

console.table({ ninjaRojo, ninjaNegro });

console.log('El jugador 1 ataca a Ninja Cinturón Negro con Ninja Cinturón Rojo');
ninjaRojo.atacar(ninjaNegro);

console.table({ ninjaRojo, ninjaNegro });

console.log('El jugador 1 ha ganado el juego.');
