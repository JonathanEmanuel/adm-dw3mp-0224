const app = Vue.createApp({
    data(){
        return {
            tasks: [],
            task: '',
            filtro: '',
            status: 0,
        }
    },
    created(){
        console.log('Creación de la instancia');
        this.getTask();
    },
    computed:{
        filtradas(){

            const list = this.tasks.filter( 
                task => ( task.name.toLowerCase().includes( this.filtro.toLowerCase() ) 
                            &&  task.completed == this.status
                )
            );
            console.log(list);
            return list;
        },
        cantidad(){
            return this.tasks.length;
        },
        completadas(){
            
        },
        pendientes(){

        }

    },
    methods: {
        async getTask(){
            try {
                const response = await fetch('data/tasks.json');
                const json = await response.json();
                this.tasks = json;

            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Upss ocurrio un error del Servidor',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                })
                console.error( error)
            }
        },
/*         getTask(){
            fetch('data/tasks.json')
            .then( res => res.json())
            .then( json => {
                console.log(json);
                this.tasks = json;
            }).catch( error => {
                console.error(error)
            })
        }, */
        // Agrega una tarea el array
        add(){
            console.log('Nueva tarea');
            const id = this.tasks.length + 1;
            this.tasks.push({
                id: id,
                name: this.task,
                computed: false
            })
        },
        delete(){

        },
        update(){

        }

    }
})

app.mount('#app')