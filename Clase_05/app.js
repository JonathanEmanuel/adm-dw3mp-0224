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
        const local = this.readStorage()
        if(  local.length > 0  ){
            this.tasks = local;
        } else {
            this.getTask();
        }
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
        add(){
            console.log('Nueva tarea');
            const id = this.tasks.length + 1;
            this.tasks.push({
                id: id,
                name: this.task,
                completed: false
            })

            this.saveStorage();
            Toastify({
                text: "Tarea Guardada",
                duration: 3000
                }).showToast();
        },
        remove(task){

            Swal.fire({
                title: "Eliminar",
                text: "¿Seguro que queres eliminar la Tarea?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si",
                cancelButtonText: "No"
            }).then((result) => {
                if (result.isConfirmed) {
                    const index = this.tasks.findIndex( item => item.id == task.id );
                    this.tasks.splice(index, 1);
                    this.saveStorage();
                }
            });
        },
        update(task){
            task.completed = !task.completed;
            this.saveStorage();
        },
        saveStorage(){
            const stringData  = JSON.stringify(this.tasks);
            localStorage.setItem('tasks',stringData);
        },
        readStorage(){
            const data = JSON.parse( localStorage.getItem('tasks') );
            return data ? data : [];
        }

    }
})

app.component('card', {
    data(){
        return{
            likes: 10
        }
    },
    props: ['foto', 'descripcion'],
    template: // html
        `<div class="card p-2">
            <img class="img-fluid" v-bind:src="foto" alt="calendario">
            <p> {{ descripcion }} </p>
            <hr>
            <span><i v-on:click="darLike"  class="fa-regular fa-lg fa-thumbs-up like"></i> {{ likes }}</span>
            <button type="button" class="btn btn-primary"> Guardar</button>
        </div>`,
    methods:{
        darLike(){
            this.likes++
        }
    }
})

app.component('tarea', {
    props:[ 'task'],
    template: // html
        `<li class="list-group-item d-flex justify-content-between">
        <span>
            <i v-if="task.completed" class="fa-solid fa-circle-check fa-lg text-success"></i>
            <i v-else class="fa-solid fa-clock  fa-lg text-primary"></i>
            {{ task.name  }}
        </span>
        <span class="d-flex  gap-2">
            <button v-on:click="update(task)" class="btn btn-primary" type="button">
                <i class="fa-solid fa-clock-rotate-left"></i>

            </button>
            <button v-on:click="remove(task)" class="btn btn-danger" type="button">
                <i class="fa-solid fa-trash"></i>
            </button>
        </span>
    </li>`
})

app.mount('#app')