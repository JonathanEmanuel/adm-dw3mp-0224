<script setup>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.vue';

</script>

<script>
  export default {
    data(){
      return {
        users: [],
        id_user: 0,
        name: '',
        email: '',
        password: ''
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
      },

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
          console.log(json);
          this.getUsers()
          


          console.log(data)
        } catch (error) {
          console.error(error)
        }


      },
      async deleteUser(user){
        try {
          const data = {
            id_user: user.id_user
          }

          const endPoint = 'http://127.0.0.1/backend/deleteUser.php';
          const config = {
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
          }
          const response = await fetch(endPoint, config);
          const json = await response.json();
          console.log(json);
          this.getUsers()
          
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
</script>

<template>
  <Header titulo="Clase 12 Vue y PHP"> </Header>
  <img src="../public/captura.png" alt="">

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

  <ul>
    <li v-for="user in users">
      <strong> {{  user.name }}</strong> | 
      <span> {{ user.email }}</span>
      <button v-on:click="deleteUser(user)" type="button" class="btn btn-danger"> X</button>
    </li>
  </ul>



</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
