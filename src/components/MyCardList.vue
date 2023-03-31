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
        <h2>Film</h2>
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
            <hr/>
        <h2>Serie TV</h2>
            <ul>
                <li v-for="(element,index) in store.listOfSeries" :key="index">
                    <MyCard
                    :title="element.name"
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