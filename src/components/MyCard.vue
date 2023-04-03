<script>

    export default {
        name: 'MyCard',
        props:{
            title: String,
            fullTitle: String,
            language: String,
            votes: String,
            imagePath: String,
        },
        data(){
            return{
                imageSize: 'https://image.tmdb.org/t/p/w342',
                
            }
        },
        methods: {
            getFullImagePath(){
                let imageToPrint = '';
                if(this.imagePath == null){
                    imageToPrint = 'https://images.pexels.com/photos/7991378/pexels-photo-7991378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
                }else{
                    imageToPrint = `${this.imageSize}${this.imagePath}`;
                }
                return imageToPrint;
            },
            transformVotes(){
                let wholeVote = Math.ceil(this.votes / 2);
                return wholeVote
            }
    }}
</script>


<template>
    <div class="container">
        <div class="card">
            <div>
                <img :src="getFullImagePath()" alt="">
            </div>                
            <h1>{{ fullTitle }}</h1>
            <h3>{{ title }}</h3>
            <h4 class="lang" 
            :class="[(this.language == 'it')? 'italy':'',(this.language == 'en')? 'english':'']">
            {{ language }}</h4>
            <div>
                Votes:
                <i :class="(transformVotes()>= 1)? 'fa-solid':'fa-regular'" class="fa-solid fa-star"></i>
                <i :class="(transformVotes()>= 2)? 'fa-solid':'fa-regular'" class="fa-regular fa-star"></i>
                <i :class="(transformVotes()>= 3)? 'fa-solid':'fa-regular'" class=" fa-star"></i>
                <i :class="(transformVotes()>= 4)? 'fa-solid':'fa-regular'" class=" fa-star"></i>
                <i :class="(transformVotes() == 5)? 'fa-solid':'fa-regular'" class=" fa-star"></i>
            </div>
        </div>
    </div> 
</template>


<style scoped lang="scss">
    @use "../styles/partials/mixins";
    
    .lang.italy{
        background-image: url(Italy_29749.png);
        @include mixins.languageImg
    }
    .lang.english{
        background-image: url(EnglishLanguage_Flag1_26107.png);
        @include mixins.languageImg        
    }

    .container{
        color: white;
        background-color: black;
        padding: 10px;
        height: 100%;
        width: 100%;
    }

    img{
        max-width: 342px;
    }

    .hidden-part{
        display: none;
    }

    .car:hover .hidden-part{
        display: block;
    }


</style>