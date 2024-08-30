const app = Vue.createApp({
    data(){  // Simil a los atributos de una clase
        return {
            nombre: 'Juan',
            foto: 'images/juan.png',
            logueado: false,
            usuarios: [
                {id:1, nombre: 'Juan', foto: 'images/juan.png'},
                {id:2, nombre: 'Lucas', foto: 'images/lucas.png'},
                {id:3, nombre: 'Carla', foto: 'images/carla.png'},
                {id:4, nombre: 'Sofia', foto: 'images/sofia.png'}
            ],
            avatars: [
                'images/carla.png',
                'images/juan.png',
                'images/lucas.png',
                'images/sofia.png'
            ],
            usuario: '',
            avatar: ''
        }
    },
    // Methods
    methods: {
        loguear(){
            this.logueado =  !this.logueado;
        },
        agregar(){
            console.log('Nuevo usuario');
            console.log( this.usuario );
            const id = this.usuarios.length + 1;
            const nombre = this.pasarMayuscula ( this.usuario );
            const foto = this.avatar;
            this.usuarios.push({
                id,
                nombre,
                foto
            })

            this.usuario = '';

        },
        pasarMayuscula(texto){
            return texto.toUpperCase();
        }
    }
});


app.mount('#main');


