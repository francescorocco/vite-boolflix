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
        let list ='https://api.themoviedb.org/3/search/movie?api_key=59b1e3e4e67251b916047195f5f0325e&language=it-IT&query='
        list += store.search
        axios.get(list)
        .then(response => {
          this.store.filmList = response.data.results;
          console.log(store.filmList)
        });
      }
    }

  }

</script>

<template>
  <MyHeader @SearchList = 'SearchList'/>
  <MyMain/>
</template>

<style scoped>

</style>
