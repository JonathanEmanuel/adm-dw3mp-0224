<template>
    <li> {{ name  }}  </li>
</template>

<script>
    const mayuscula = ()=>{
        return name.toUpperCase();
    }

    export default {
        name: 'User',
        props:{
            name: String
        }
    }
</script>

<style>

</style>