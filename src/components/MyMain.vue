<script>
    import { store } from '../store.js';
    import MyCardList from './MyCardList.vue';

    export default {
        name: 'MyMain',
        data() {
            return {
                store
            }
        },
        components:{
            MyCardList
        }
    }
</script>


<template>
    <main>
        <div class="card-container">
            <MyCardList/>
        </div>
    </main>

</template>


<style scoped lang="scss">

</style>