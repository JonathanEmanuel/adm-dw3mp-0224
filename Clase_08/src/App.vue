<script setup>

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import HelloWorld from './components/HelloWorld.vue';
import Header from './components/Header.vue';
import User from './components/User.vue';
</script>

<script>
  export default {
    data(){
      return {
        users: ['Carlos', 'Rocio', 'Marcos',  'María']
      }
    },
    methods: {

    }
  }
</script>

<template>
  <Header titulo="Clase 08"> </Header>

  <ul>
    <User v-for="user in users"  
          v-bind:name="user">
    </User>
  </ul>

  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Aplicaciones para Dispostivos Móviles" />
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
