<script>
    import { store } from '../store.js';

    export default {
        name: 'MyHeader',
        data() {
            return {
                store
            }
        }
    }
</script>


<template>
    <div class="container">
        <div>
            <h1>Boolflix</h1>
        </div>
        <div>
            <input @keyup.enter="$emit('SearchList')" type="text" v-model="store.search">
            <button @click="$emit('SearchList')">Search</button>
        </div>
    </div>
</template>


<style scoped lang="scss">
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        background-color: black;
    }

    h1{
        color: #FFFFFF;
        text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 55px #ff0000, 0 0 75px #ff0000;
        color: #FFFFFF;
    }

    input{
        height: 30px;
        border: 2px solid red;
    }

    button{
        width: 70px;
        height: 30px;
        border: 1px solid red;
    }
</style>