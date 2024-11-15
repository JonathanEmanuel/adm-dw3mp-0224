<script>
import { RouterLink } from 'vue-router';

export default {
    data(){
        return {
            users: []
        }
    },
    created() {
        this.getUsers();
    },
    methods: {
        async getUsers(){

        try {
            const endPoint = 'http://127.0.0.1/backend/getUser.php';
            console.log('fetch')
            const response = await fetch(endPoint);
            const json = await response.json();
            console.log(json);
            this.users = json;
        } catch (error) {
            alert('Error del servidor')
        }
    }
    }
}
</script>


<template>
    <div class="about">
        <h1>Lista de Usuario</h1>
        <ul>
            <li v-for="user in users">
                <strong> {{  user.name }}</strong> | 
                <span> {{ user.email }}</span>
                <button v-on:click="deleteUser(user)" type="button" class="btn btn-danger"> X</button>
                
                <router-link :to="{ name: 'details', params: { id: user.id_user } }"> Ver </router-link>
                
                <RouterLink :to="`/details/${user.id_user}`"> Detalle </RouterLink>
            </li>
        </ul>
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