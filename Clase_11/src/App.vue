<script setup>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.vue';

</script>

<script>
  export default {
    data(){
      return {
        products: []
      }
    },
    created() {
      this.getProducts();
    },
    methods: {
      async getProducts(){

        try {
          const endPoint = 'http://localhost/api/getProducts.php';
          console.log('fetch')
          const response = await fetch(endPoint);
          const json = await response.json();
          console.log(json);
          this.products = json;
          
        } catch (error) {
          alert('Error del servidor')
        }
      }
    }
  }
</script>

<template>
  <Header titulo="Clase 11 Vue y PHP"> </Header>
  <img src="../public/captura.png" alt="">
  <ul>
    <li v-for="product in products">
      <strong> {{  product.title }}</strong>
      <img v-bind:src="product.thumbnail" v-bind:alt="`nombre ${product.title}`">
      
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
