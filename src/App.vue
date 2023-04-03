<script>
  import { store } from './store.js';
  import axios from 'axios';
  import MyHeader from './components/MyHeader.vue';
  import MyMain from './components/MyMain.vue';

  export default {
    components: {
      MyHeader,
      MyMain,

    },
    data(){
      return {
        store
      }
    },
    methods: {
      SearchList(){
        let listOfFilms ='https://api.themoviedb.org/3/search/movie?api_key=59b1e3e4e67251b916047195f5f0325e&language=it-IT&query=';
        let listOfSeries = 'https://api.themoviedb.org/3/search/tv?api_key=59b1e3e4e67251b916047195f5f0325e&language=it-IT&query=';
        listOfFilms += store.search;
        listOfSeries += store.search;
          axios.get(listOfFilms)
          .then(response => {
            this.store.filmList = response.data.results;
            console.log(store.filmList)
          }),
          axios.get(listOfSeries)
          .then(response => {
            this.store.listOfSeries = response.data.results;
            console.log(store.listOfSeries)
          })
      }
    }
  }


</script>

<template>
  <MyHeader @SearchList = 'SearchList'/>
  <MyMain/>
</template>

<style lang="scss">
  @use "./styles/general.scss"
</style>
