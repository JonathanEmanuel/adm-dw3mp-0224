const app = Vue.createApp({
    data(){  // Simil a los atributos de una clase
        return {
            nombre: 'Juan',
            foto: 'images/juan.png',
            logueado: false,
            usuarios: [
                {id:1, nombre: 'Juan', foto: 'images/juan.png'},
                {id:1, nombre: 'Lucas', foto: 'images/lucas.png'},
                {id:1, nombre: 'Carla', foto: 'images/carla.png'},
                {id:1, nombre: 'Sofia', foto: 'images/sofia.png'}
            ]
        }
    }
    // Methods
});


app.mount('#main');


