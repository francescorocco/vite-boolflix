<script>
    export default {
        name: 'MyCardList',
        props:{
            title: String,
            fullTitle: String,
        }
    }
</script>


<template>
    <div class="container">
        <h1>{{ fullTitle }}</h1>
        <h3>{{ title }}</h3>
    </div>
</template>


<style scoped lang="scss">

</style>