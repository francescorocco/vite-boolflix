<script>
    import { store } from '../store.js';
    import MyCard from './MyCard.vue';

    export default {
        name: 'MyCardList',
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
                :title="element.title"
                :fullTitle="element.original_title"
                :language="element.original_language"
                :votes="element.vote_average"
                />
            </li>
        </ul>
    </div>
</template>


<style scoped lang="scss">

</style>