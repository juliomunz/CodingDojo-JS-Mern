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

class Sensei extends Ninja{
    constructor (nombre){
        super(nombre);
        this.salud=200;
        this.velocidad=10;
        this.fuerza=10;
        this.sabiduria=50;
    }
    
    speakWisdom(){
        super.drinkSake();
        console.log("El hombre con casa de cristal debe bañarse en el sótano")
    }

}

const superSensei = new Sensei("Super Julio");
console.log (superSensei);
superSensei.showStats();
superSensei.speakWisdom();

// Finalmente, agrega el métodospeakWisdom(). speakWisdom()debería llamar al métododrinkSake() desde la clase Ninja, antes de console.logging, un mensaje inteligente.
// // ejemplo de salida
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// // -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
// superSensei.showStats();
// // -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"


