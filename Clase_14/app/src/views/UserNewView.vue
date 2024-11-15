<script>
export default {
    data(){
        return {

            id_user: 0,
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
    async postUser(){
        try {
            const data = {
                name: this.name,
                email: this.email,
                password: this.password
            }

            const endPoint = 'http://127.0.0.1/backend/postUser.php';
            const config = {
                headers: {
                'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)
            }
            const response = await fetch(endPoint, config);
            const json = await response.json();
            
            this.$router.push('/list');

        } catch (error) {
            console.error(error)
        }


    },

    }
  }
</script>
<template>
    <div class="about">
        <h1>Nuevo Usuario</h1>
        <hr>
        <form v-on:submit.prevent="postUser" action="" class="card">
            <label for="">Nombre</label>
            <input type="text" v-model="name" class="form-control">

            <label for="">Email</label>
            <input type="email" v-model="email" class="form-control">


            <label for="">Contraseña</label>
            <input type="text" v-model="password" class="form-control">

            <button type="submit" class="btn btn-success mt-2">Guardar</button>
        </form>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
