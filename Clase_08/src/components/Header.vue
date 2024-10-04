<template>
    <header class="bg-success">
        <h1> {{  titulo  }}  </h1>
    </header>
</template>

<script>
    export default {
        name: 'Haeder',
        props: {
            titulo: String
        },
        methods: {

        }
    }
</script>

<style scoped>
    h1 {
        color: slateblue;
    }
</style>