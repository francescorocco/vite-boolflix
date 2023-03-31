<script>

    export default {
        name: 'MyCard',
        props:{
            title: String,
            fullTitle: String,
            language: String,
            votes: String
        }
    }
</script>


<template>
    <div class="container">
        <h1>{{ fullTitle }}</h1>
        <h3>{{ title }}</h3>
        <h4 class="lang" 
        :class="[(this.language == 'it')? 'italy':'',(this.language == 'en')? 'english':'']">
        {{ language }}</h4>
        <h4>{{ votes }}</h4>
    </div>
</template>


<style scoped lang="scss">
    @use "../styles/partials/mixins";
    
    .lang.italy{
        background-image: url(public/Italy_29749.png);
        @include mixins.languageImg
    }
    .lang.english{
        background-image: url(public/EnglishLanguage_Flag1_26107.png);
        @include mixins.languageImg
        
    }
</style>