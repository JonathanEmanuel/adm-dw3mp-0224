class Persona {
    nombre = '';
    apellido = '';

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }


    guardarMateria( objeto){
        localStorage.setItem('materia', JSON.stringify( objeto) );

    }
    getName(){
        return this.nombre;
    }
    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}`)
    }
    guardarNombre(){
        localStorage.setItem('Nombre', this.nombre);
    }
}

const materias = ['Programación I', 'PWA', 'ADM'];
const datos = {
    nombre: 'Programación I',
    cuatri: 2,
    nota: 9
}
const p1 = new Persona('Rocio', 'Ruiz');
const p2 = new Persona('Carlos', 'Herrera');
p1.saludar();
p2.saludar();

