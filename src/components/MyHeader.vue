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
    <input type="text" v-model="store.search">
    <button @click="$emit('SearchList')">Search</button>
</template>


<style scoped lang="scss">

</style>