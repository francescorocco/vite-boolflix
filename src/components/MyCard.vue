<script>
    import { store } from '../store.js';
    import MyCard from 'src/components/MyCard.vue';

    export default {
        name: 'MyCard',
        data() {
            return {
                store
            }
        },
        components:{
            MyCard
        }
    }
</script>


<template>
    <div class="container">
        <ul>
            <li v-for="(element,index) in store.filmList" :key="index">
                <MyCard
                :title="store.title"
                :fullTitle="store.original_title"
                />
            </li>
        </ul>
    </div>
</template>


<style scoped lang="scss">

</style>