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
        <section v-if="store.filmList.length > 0 ">
            <div class="type-of-element">
                <h2>Film</h2>
            </div>
            <ul>
                <li v-for="element in store.filmList" :key="element.id">
                    <MyCard
                    listToGet = "movie"
                    :key="element.id"
                    :id="element.id"
                    :title="element.title"
                    :fullTitle="element.original_title"
                    :language="element.original_language"
                    :votes="element.vote_average"
                    :imagePath="element.poster_path"
                    />
                </li>
            </ul>
        </section>
        <section v-if="store.listOfSeries.length > 0">
            <div class="type-of-element">
                <h2>Serie TV</h2>
            </div>
            <ul>
                <li v-for="element in store.listOfSeries" :key="element.id">
                    <MyCard
                    listToGet="tv"
                    :key="element.id"
                    :id="element.id"
                    :title="element.name"
                    :fullTitle="element.original_name"
                    :language="element.original_language"
                    :votes="element.vote_average"
                    :imagePath="element.poster_path"
                    />
                </li>
            </ul>
        </section>
        <h2 v-if="store.filmList == 0 & store.listOfSeries == 0">Fai una ricerca</h2>
        </div>
    </template>


<style scoped lang="scss">
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    li{
        width: 20%;
        text-align: center;
    }

    .container{
        max-width: calc(100vw - 50px);
        margin: 0 auto;
    }

    h2{
        text-align: center;
        text-shadow: 0 0 5px #FFF, 0 0 10px #FFF;
        color: #ff0000;
        padding: 30px 0 ;
        font-size: 35px;
    }

    .type-of-element{
        border-top: 5px solid ;
        border-bottom: 5px solid;
        border-color: #ff0000;
        margin-bottom: 30px;
    }
</style>