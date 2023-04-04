<script>
import { store } from '../store.js';

export default {
    name: 'MyHeader',
    data() {
        return {
            store
        }
    }
}
</script>


<template>
    <div class="container">
        <div>
            <h1>Boolflix</h1>
        </div>
        <div>
            <input @keyup.enter="$emit('SearchList')" type="text" v-model="store.search">
            <button @click="$emit('SearchList')">Search</button>
        </div>
    </div>
</template>


<style scoped lang="scss">
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        background-color: black;
    }

    h1 {
        text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 55px #ff0000, 0 0 75px #ff0000;
        color: #FFFFFF;
    }

    input {
        height: 47px;
        border: 2px solid red;
        margin-right: 30px;
        font-size: 23px;
    }

    button,
    button::after {
        padding: 16px 20px;
        font-size: 18px;
        background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
        border: 0;
        color: #fff;
        letter-spacing: 3px;
        line-height: 1;
        box-shadow: 6px 0px 0px #00e6f6;
        outline: transparent;
        position: relative;
    }

    button::after {
        --slice-0: inset(50% 50% 50% 50%);
        --slice-1: inset(80% -6px 0 0);
        --slice-2: inset(50% -6px 30% 0);
        --slice-3: inset(10% -6px 85% 0);
        --slice-4: inset(40% -6px 43% 0);
        --slice-5: inset(80% -6px 5% 0);
        content: "HOVER ME";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 3%, #00e6f6 3%, #00e6f6 5%, #ff013c 5%);
        text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
        clip-path: var(--slice-0);
    }

    button:hover::after {
        animation: 1s glitch;
        animation-timing-function: steps(2, end);
    }

    @keyframes glitch {
        0% {
            clip-path: var(--slice-1);
            transform: translate(-20px, -10px);
        }

        10% {
            clip-path: var(--slice-3);
            transform: translate(10px, 10px);
        }

        20% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 10px);
        }

        30% {
            clip-path: var(--slice-3);
            transform: translate(0px, 5px);
        }

        40% {
            clip-path: var(--slice-2);
            transform: translate(-5px, 0px);
        }

        50% {
            clip-path: var(--slice-3);
            transform: translate(5px, 0px);
        }

        60% {
            clip-path: var(--slice-4);
            transform: translate(5px, 10px);
        }

        70% {
            clip-path: var(--slice-2);
            transform: translate(-10px, 10px);
        }

        80% {
            clip-path: var(--slice-5);
            transform: translate(20px, -10px);
        }

        90% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 0px);
        }

        100% {
            clip-path: var(--slice-1);
            transform: translate(0);
        }
    }
</style>