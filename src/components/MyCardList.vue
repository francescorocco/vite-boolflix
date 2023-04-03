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
                    :imagePath="element.poster_path"
                    />
                </li>
            </ul>
        <h2>Serie TV</h2>
            <ul>
                <li v-for="(element,index) in store.listOfSeries" :key="index">
                    <MyCard
                    :title="element.name"
                    :fullTitle="element.original_name"
                    :language="element.original_language"
                    :votes="element.vote_average"
                    :imagePath="element.poster_path"
                    />
                </li>
            </ul>
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
        color: red;
        padding: 30px 0 ;
        font-size: 35px;
        font-family: sans-serif;
    }

</style>