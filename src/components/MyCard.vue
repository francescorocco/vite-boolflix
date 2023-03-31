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
        <h4>{{ language }}</h4>
        <h4>{{ votes }}</h4>
    </div>
</template>


<style scoped lang="scss">

</style>