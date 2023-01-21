<template>
    <div class="bg" style="">
        <div class="cover" style="perspective:100vh;height:100vh;width:100vw;display:flex;flex-flow:column;justify-content:center;">
    
            <div class="middle">
                <a href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xC4c346eDc55504574cCEB00AA1091d22404A4bC3&chainId=1">
                    <p class="logo-1">BUY MEZZ</p>
                </a>
                <div class="logo"><b><span>M</span>E<span>Z</span>Z</b></div>
                <div class="row">
                    <a href="https://twitter.com/MEZZTOKEN">
                        <p class="logo-1">TWITTER</p>
                    </a>
                    <a href="https://dexscreener.com/ethereum/0x1ad651a07b98464aa42f6cad68d0ce8639b659a5">
                        <p class="logo-1">TOKEN</p>
                    </a>
                </div>
            </div>
    
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    },
    computed: {

    },
    watch: {},
    components: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Klee+One:wght@400;600&family=Permanent+Marker&family=Rock+Salt&display=swap');
html,
body {
    height: 100%;
    background: black;
}

body {
    background-size: cover;
    margin: 0;
    overflow: hidden;
}

.logo {
    text-align: center;
    height: inherit;
    margin: auto;
    position: relative;
    user-select: none;
}

.logo b {
    font: 400 8vw 'Rock Salt';
    color: #fee;
    filter: hue-rotate(-100deg);
    animation: neon 3s infinite;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff0090, 0 0 0.5em #ff44eb, 0 0 0.1em #ff44f3, 0 10px 3px #000;
}

.logo b span {
    animation: blink linear infinite 2s, neon 3s infinite;
    filter: hue-rotate(50deg);
}

.logo b span:nth-of-type(2) {
    filter: hue-rotate(-50deg);
    animation: blink linear infinite 3s, neon 3s infinite;
}

@keyframes blink {
    78% {
        color: inherit;
        text-shadow: inherit;
    }
    79% {
        color: #333;
    }
    80% {
        text-shadow: none;
    }
    81% {
        color: inherit;
        text-shadow: inherit;
    }
    82% {
        color: #333;
        text-shadow: none;
    }
    83% {
        color: inherit;
        text-shadow: inherit;
    }
    92% {
        color: #333;
        text-shadow: none;
    }
    92.5% {
        color: inherit;
        text-shadow: inherit;
    }
}

h1 {
    font-family: 'Rock Salt', cursive;
}

p {
    font-family: 'Permanent Marker', cursive;
}

:root {
    --shadow-color: #FF9E9E;
    --shadow-color-light: white;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.logo-1 {
    color: white;
    animation: neon 3s infinite;
}

.bg {
    width: 100vw;
    height: 100vh;
    background-position: right center;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    background-image: url(/mezz-fgv.png);
}

.bg::before {
    width: 100vw;
    height: 100vh;
    background-position: right center;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 0px;
    content: '';
    animation: hr 15s linear infinite;
    background-image: url(/mezz-bgv.png);
}

.bg:hover>::before {
    animation-play-state: paused;
}

@keyframes neon {
    0% {
        text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light), 0 0 3px var(--shadow-color-light), 0 0 10px var(--shadow-color-light), 0 0 20px var(--shadow-color-light), 0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);
    }
    50% {
        text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light), 0 0 5px var(--shadow-color-light), 0 0 15px var(--shadow-color-light), 0 0 25px var(--shadow-color-light), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 60px var(--shadow-color), 0 0 80px var(--shadow-color), 0 0 110px var(--shadow-color), 0 0 210px var(--shadow-color);
    }
    100% {
        text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light), 0 0 3px var(--shadow-color-light), 0 0 10px var(--shadow-color-light), 0 0 20px var(--shadow-color-light), 0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);
    }
}

@keyframes hr {
    0% {
        filter: opacity(0);
    }
    20% {
        filter: opacity(0);
    }
    25% {
        filter: opacity(1);
    }
    30% {
        filter: opacity(0);
    }
    80% {
        filter: opacity(0);
    }
    85% {
        filter: opacity(1);
    }
    90% {
        filter: opacity(0);
    }
    100% {
        filter: opacity(0);
    }
}

.middle {
    z-index: 3;
    position: relative;
    transform: rotatey(-17deg)rotatez(-5deg)translatey(-2rem);
    margin: auto;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding: 6rem;
    margin-right: auto;
    animation: neon 3s infinite;
}

.middle>h1 {
    margin-top: -2rem;
    font-size: 8vw;
    color: white;
    margin-bottom: unset;
    text-shadow: 0px 0px 50px rgb(0, 183, 255);
}

.row {
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
}

a {
    padding: 0rem 2rem;
    color: white;
    text-decoration: unset;
    margin: auto;
    width: fit-content;
    position: relative;
    display: flex;
    border-radius: 5rem;
    transition: all 0.5s ease;
}

.cover {
    background-image: linear-gradient(to top, #00000038, #0004ff36);
    backdrop-filter: saturate(0.8)brightness(0.9);
}

.bg::after {
    background-image: url(https://64.media.tumblr.com/96bfcda9ab211b730d680a052d19f83d/tumblr_o7w2veChcr1runoqyo4_540.gifv);
    background-size: cover;
    height: 100vh;
    width: 100vw;
    content: '';
    position: fixed;
    top: 0px;
    mix-blend-mode: screen;
}

a:hover {
    transform: translatey(2px);
    letter-spacing: 2px;
}

a>p {
    transition: all 0.5s ease;
    font-size: 2vh;
    font-weight: bold;
    color: white;
    margin: 0.5rem;
}

.row>a:nth-of-type(1) {
    filter: hue-rotate(-100deg);
}

.row>a:nth-of-type(2) {
    filter: hue-rotate(50deg);
}

a:nth-of-type(0) {
    filter: hue-rotate(100deg);
}

@media screen and (min-width: 100vh) {
    .middle>h1 {
        font-size: 8vw;
        color: white;
    }
    .middle {
        margin-right: 11vw;
        transform: rotatey(12deg)rotatez(-5deg)translatey(-2rem);
    }
    a>p {
        font-size: 4vw;
        font-weight: bold;
        margin: 0.5rem;
    }
}
</style>