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
    created() {
        this.id_user = this.$route.params.id;
        //this.getUser();
    },
    methods: {
        async getUser(){

        try {
            const endPoint = 'http://127.0.0.1/backend/getUser.php';
            console.log('fetch')
            const response = await fetch(endPoint);
            const json = await response.json();
            console.log(json);
           // this.users = json;

        } catch (error) {
            alert('Error del servidor')
        }
    },

    async updateUser(){
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

    }
}
</script>

<template>
    <div class="about">
        <h1>Detalle del Usuario {{  this.$route.params.id }} </h1>
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