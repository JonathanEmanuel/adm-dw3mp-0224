const app = Vue.createApp({
    data(){
        return {
            endPoint: 'productos.json',
            products: [],
            cart: []
        }
    },
    created(){
        this.getProducts();
    },
    methods:{
        async getProducts(){
            const res = await fetch(this.endPoint);
            const json = await res.json();
            console.log(json);
            this.products = json;
        },
        agregando({id, title}){
            console.log({id, title});

            this.cart.push({id, title})
        }
    }
})

app.component('card', {
    props: {
        id: Number,
        title: String,
        price: Number,
        description: String,
        thumbnail: String
    },
    template: // html
        `<div class="card" style="width: 18rem;">
            <img v-bind:src="thumbnail" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title" v-text="title"></h5>
                <p class="card-text">{{ description }}</p>
                <button v-on:click="addCart"  class="btn btn-primary"><i class="fa-solid fa-cart-plus"></i></button>
            </div>
        </div>`,
    methods:{
        addCart(){
            console.log('Agregando al carrito');
            this.$emit('add', { id: this.id, title: this.title  });
        }

    }
})


app.mount('#app')