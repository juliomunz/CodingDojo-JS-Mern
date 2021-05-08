// Agregar clase Ninja
// Agregar atributo: nombre
// agrega un atributo: velocidad - da un valor predeterminado de 3
// agrega un atributo: fuerza - dé un valor predeterminado de 3
// agrega un método: sayName () - Esto debería registrar el nombre de Ninja en la consola
// agrega un método: showStats () - Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja.
// agrega un método: drinkSake () - Esto debería agregar +10 de salud al Ninja

class Ninja{
    constructor (nombre){
        this.nombre=nombre;
        this.salud=50;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName(){
        console.log(this.nombre);
    }
    showStats(){
        console.log(`Hola me llamo ${this.nombre} Y mi salud es ${this.salud} Mi velocidad es ${this.velocidad} Y mi fuerza es ${this.fuerza}`)
    }
    drinkSake(){
        this.salud+=10;
        console.log(`Hmmm delicioso el Sake`);
    }
    recibirDaño(herida){
        this.salud-=herida;
        console.log(`Rayos me ha dolido, mi nueva salud es: ${this.salud}`);
    }
}


const ninja1 = new Ninja("Hyabusa");

console.log(ninja1.salud)

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja1.recibirDaño(30);
