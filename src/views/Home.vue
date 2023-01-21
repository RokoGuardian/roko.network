<template>
    <div class="top3d" style="" @click="isthreedee = !isthreedee">
        <h1 v-if="isthreedee">
            2D</h1>
        <h1 style=" animation: neon 3s infinite;" v-if="!isthreedee">
            3D</h1>
    </div>
    <div class="bg1" v-if="isthreedee" style="">
        <div class="cover" style="">
            <div class="data" v-if="data">
                MEZZ Token is the utility token of MEZZ.Finance, a DeFi platform for users to engage in acquisition and liquidation of NFTs and other crypto assets with an innovative bidding-backed collateral extender and fees rewarder.
    
            </div>
            <div class="middle">
                <a href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xC4c346eDc55504574cCEB00AA1091d22404A4bC3&chainId=1">
                    <p class="logo-1">BUY MEZZ</p>
                </a>
                <div class="logo"><b><span>M</span>E<span>Z</span>Z</b></div>
                <div class="row">
                    <a href="https://twitter.com/MEZZTOKEN">
                        <p class="logo-1 rowlogo">TWITTER</p>
                    </a>
                    <a href="https://dexscreener.com/ethereum/0x1ad651a07b98464aa42f6cad68d0ce8639b659a5">
                        <p class="logo-1 rowlogo">TOKEN</p>
                    </a>
                </div>
            </div>
    
        </div>
    </div>
    
    
    <div class="bg2" v-if="!isthreedee" style="">
        <div class="cover" style="">
            <div class="middle2">
                <a href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xC4c346eDc55504574cCEB00AA1091d22404A4bC3&chainId=1">
                    <p class="logo-1">BUY MEZZ</p>
                </a>
                <div class="logo"><b><span>M</span>E<span>Z</span>Z</b></div>
                <div class="row">
                    <a href="https://twitter.com/MEZZTOKEN">
                        <p class="logo-1 rowlogo">TWITTER</p>
                    </a>
                    <a href="https://dexscreener.com/ethereum/0x1ad651a07b98464aa42f6cad68d0ce8639b659a5">
                        <p class="logo-1 rowlogo">TOKEN</p>
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
            isthreedee: false,
            data: false,

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

<style lang="scss">
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

@keyframes float {
    0% {
        transform: translatey(0px)rotatey(15deg);
    }
    30% {
        transform: translatey(5px)rotatey(5deg)rotatez(0deg)rotatex(5deg);
    }
    50% {
        transform: translatey(10px)rotatey(25deg)rotatez(-5deg)rotatex(-5deg);
    }
    70% {
        transform: translatey(5px)rotatey(5deg)rotatez(0deg)rotatex(5deg);
    }
    100% {
        transform: translatey(0px)rotatey(15deg);
    }
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
    font-family: 'Permanent Marker', cursive;
}

p {
    font-family: 'Rock Salt', cursive;
}

:root {
    --shadow-color: #ff9e9e69;
    --shadow-color-light: rgba(255, 255, 255, 0.813);
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.bg1 {
    width: 100vw;
    height: 100vh;
    background-position: right center;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    background-image: url(/mezz-fgv.png);
    .logo-1 {
        color: white;
        animation: neon 3s infinite;
    }
    .logo {
        text-align: center;
        height: inherit;
        margin: auto;
        position: relative;
        user-select: none;
    }
    .logo b {
        font: 400 10vw 'Permanent Marker';
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
    .cover {
        z-index: 5;
        position: relative;
        perspective: 100vh;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-flow: row;
        justify-content: center;
    }
    .data {
        filter: hue-rotate(300deg);
        box-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light), 0 0 3px var(--shadow-color-light), 0 0 10px var(--shadow-color-light), 0 0 20px var(--shadow-color-light), 0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);
        width: 480px;
        font-size: 1.5rem;
        margin: auto;
        color: white;
        animation: neon 3s infinite;
        font-family: 'Klee One', cursive;
        padding: 1rem;
        border-radius: 1rem;
    }
    &::before {
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
    &::after {
        background-image: url(https://64.media.tumblr.com/96bfcda9ab211b730d680a052d19f83d/tumblr_o7w2veChcr1runoqyo4_540.gifv);
        background-size: cover;
        height: 100vh;
        width: 100vw;
        content: '';
        position: fixed;
        top: 0px;
        mix-blend-mode: screen;
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
}

.top3d {
    cursor: pointer;
    position: fixed;
    z-index: 10;
    top: 1rem;
    right: 2rem;
    color: white;
    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.1);
    }
}

.bg2 {
    width: 100vw;
    height: 100vh;
    background-position: right center;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    background-image: url(/bg.png);
    .logo-1 {
        color: black;
        text-shadow: 0px 1.5px white, 0px -1.5px white, -1.5px 0px white, 1.5px 0px white, 2.5px 2.5px white, 2.5px -2.5px white, -2.5px 2.5px white, -2.5px -2.5px white, 1.5px 1.5px white, 1.5px -1.5px white, -1.5px 1.5px white, -1.5px -1.5px white, 0px 0px 50px black;
    }
    .logo {
        text-align: center;
        height: inherit;
        margin: auto;
        position: relative;
        user-select: none;
    }
    .logo b {
        font: 400 10vw 'Permanent Marker';
        color: black;
        text-shadow: 0px 5px white, 0px -5px white, -5px 0px white, 5px 0px white, 2.5px 2.5px white, 2.5px -2.5px white, -2.5px 2.5px white, -2.5px -2.5px white, 5px 5px white, 5px -5px white, -5px 5px white, -5px -5px white, 0px 0px 50px black;
    }
    .logo b span {
        filter: hue-rotate(50deg);
        text-shadow: 0px 5px white, 0px -5px white, -5px 0px white, 5px 0px white, 2.5px 2.5px white, 2.5px -2.5px white, -2.5px 2.5px white, -2.5px -2.5px white, 5px 5px white, 5px -5px white, -5px 5px white, -5px -5px white, 0px 0px 50px black;
    }
    .logo b span:nth-of-type(2) {
        text-shadow: 0px 5px white, 0px -5px white, -5px 0px white, 5px 0px white, 2.5px 2.5px white, 2.5px -2.5px white, -2.5px 2.5px white, -2.5px -2.5px white, 5px 5px white, 5px -5px white, -5px 5px white, -5px -5px white, 0px 0px 50px black;
        filter: hue-rotate(-50deg);
    }
    .cover {
        z-index: 5;
        position: relative;
        perspective: 100vh;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-flow: row;
        justify-content: center;
    }
    .data {
        box-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light), 0 0 3px var(--shadow-color-light), 0 0 10px var(--shadow-color-light), 0 0 20px var(--shadow-color-light), 0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);
        width: 480px;
        font-size: 1.5rem;
        margin: auto;
        color: rgb(0, 0, 0);
        font-family: 'Klee One', cursive;
        padding: 1rem;
        border-radius: 1rem;
    }
    &::before {
        width: 100vw;
        height: 100vh;
        background-position: right center;
        background-size: cover;
        background-repeat: no-repeat;
        position: fixed;
        top: 0px;
        content: '';
        animation: hr 15s linear infinite;
    }
    &::after {
        background-size: cover;
        height: 100vh;
        width: 100vw;
        content: '';
        position: fixed;
        top: 0px;
        mix-blend-mode: screen;
    }
    .middle2 {
        transform: rotate(-10deg);
        z-index: 3;
        position: relative;
        margin: auto;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        padding: 6rem;
        margin-right: auto;
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
        backdrop-filter: saturate(1)brightness(0.8);
    }
    a:hover {
        transform: translatey(0px);
        letter-spacing: 0px;
    }
    a>p {
        transition: all 0.5s ease;
        font-size: 5vh;
        font-weight: bold;
        color: white;
        margin: 0.5rem;
    }
    .row>a:nth-of-type(1) {}
    .row>a:nth-of-type(2) {}
    a:nth-of-type(0) {}
}

@media screen and (min-width: 100vh) {
    .bg1 {
        .middle>h1 {
            font-size: 8vw;
            color: white;
        }
        .middle {
            margin-right: 11vw;
            transform: rotatey(20deg)rotatez(-2deg)translatey(-2rem)translatez(5vw)translatex(-5vw);
        }
        .row {
            max-width: 35vw;
        }
        a>p {
            font-size: 3vw;
            font-weight: bold;
            margin: 0.5rem;
        }
    }
}

@media screen and (max-width:600px) {
    .bg1 {
        .middle {
            transform: unset;
            margin: auto;
            margin-right: auto;
            background-size: contain;
            background-position: 50%;
            background-repeat: no-repeat;
            padding: 0rem;
            margin-right: auto;
            animation: neon 3s infinite;
        }
        .row {
            max-width: 100vw;
        }
        .logo-1 {
            font-size: 8vw;
        }
        .logo b {
            font: 400 20vw 'Permanent Marker';
            color: #fee;
            filter: hue-rotate(-100deg);
            animation: neon 3s infinite;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff0090, 0 0 0.5em #ff44eb, 0 0 0.1em #ff44f3, 0 10px 3px #000;
        }
        .rowlogo {
            transition: all .5s ease;
            font-size: 5vw;
            font-weight: 700;
            color: #fff;
            margin: .5rem;
        }
    }
    .bg2 {
        .middle2 {
            transform: unset;
            margin: auto;
            margin-right: auto;
            background-size: contain;
            background-position: 50%;
            background-repeat: no-repeat;
            padding: 0rem;
            margin-right: auto;
        }
        .row {
            max-width: 100vw;
        }
        .logo-1 {
            font-size: 8vw;
        }
        .logo b {
            font: 400 20vw 'Permanent Marker';
        }
        .rowlogo {
            transition: all .5s ease;
            font-size: 5vw;
            font-weight: 700;
            margin: .5rem;
        }
    }
}
</style>