<script>

export default {
    name: 'MyCard',
    props: {
        title: String,
        fullTitle: String,
        language: String,
        votes: String,
        imagePath: String,
    },
    data() {
        return {
            imageSize: 'https://image.tmdb.org/t/p/w342',

        }
    },
    methods: {
        getFullImagePath() {
            let imageToPrint = '';
            if (this.imagePath == null) {
                imageToPrint = 'https://images.pexels.com/photos/7991378/pexels-photo-7991378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
            } else {
                imageToPrint = `${this.imageSize}${this.imagePath}`;
            }
            return imageToPrint;
        },
        transformVotes() {
            let wholeVote = Math.ceil(this.votes / 2);
            return wholeVote
        }
    }
}
</script>


<template>
    <div class="card">
        <div class="img-wrapper">
            <img :src="getFullImagePath()" alt="">
        </div>
        <div class="card_content">
            <h1 class="card_title">{{ fullTitle }}</h1>
            <h3 class="card_subtitle">{{ title }}</h3>
            <h4 class="lang" :class="[(this.language == 'it') ? 'italy' : '', (this.language == 'en') ? 'english' : '']">
                {{ language }}</h4>
            <p class="card_description">
            <div class="votes">
                Votes:
                <i :class="(transformVotes() >= 1) ? 'fa-solid' : 'fa-regular'" class="fa-solid fa-star"></i>
                <i :class="(transformVotes() >= 2) ? 'fa-solid' : 'fa-regular'" class="fa-regular fa-star"></i>
                <i :class="(transformVotes() >= 3) ? 'fa-solid' : 'fa-regular'" class=" fa-star"></i>
                <i :class="(transformVotes() >= 4) ? 'fa-solid' : 'fa-regular'" class=" fa-star"></i>
                <i :class="(transformVotes() == 5) ? 'fa-solid' : 'fa-regular'" class=" fa-star"></i>
            </div>
            </p>

        </div>
    </div>
</template>


<style scoped lang="scss">
    @use "../styles/partials/mixins";

    .lang.italy {
        background-image: url(Italy_29749.png);
        @include mixins.languageImg
    }

    .lang.english {
        background-image: url(EnglishLanguage_Flag1_26107.png);
        @include mixins.languageImg
    }

    .card {
        position: relative;
        width: 69%;
        color: #2e2d31;
        background: #131313;
        overflow: hidden;
        border-radius: 20px;
        margin-bottom: 50px;
    }

    .card_content {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 340px;
        padding: 20px;
        background: #cfcfcf;
        border-top-left-radius: 20px;
        transform: translateY(320px);
        transition: transform 0.25s;
    }

    .card_content::before {
        content: '';
        position: absolute;
        top: -47px;
        right: -45px;
        width: 100px;
        height: 100px;
        transform: rotate(-175deg);
        border-radius: 50%;
        box-shadow: inset 48px 48px #cfcfcf;
    }

    .card_title {
        color: #131313;
        padding-top: 30px;
    }

    .card_subtitle {
        display: block;
        margin-bottom: 10px;
    }

    .card_description {
        font-size: 14px;
        opacity: 0;
        transition: opacity .5s;
    }

    .card:hover .card_content {
        transform: translateY(0);
    }

    .card:hover .card_description {
        opacity: 1;
        transition-delay: .25s;
    }

    .votes i{
        color:gold;
        font-size:18px;
        text-shadow: 0px 0px 8px black;
    }

    img {
    max-width: 342px;
    height: 514px;
    }
</style>