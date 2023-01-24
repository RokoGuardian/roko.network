<template>
    <div class="top3d" style="" @click="isthreedee = !isthreedee">
        <h1 v-if="isthreedee">
            2D</h1>
        <h1 style="" v-if="!isthreedee">
            3D</h1>
    </div>
    <div class="topdata" style="" @click="data = !data">
        <h1 v-if="data">
            - DATA</h1>
        <h1 style="" v-if="!data">
            + DATA</h1>
    </div>
    <div class="bg1" :style="[isthreedee ? {'z-index': '-1', 'opacity': '0'} : {'z-index': '1', 'opacity': '1'}]">
        <div class="cover" style="">
            <div class="data" :style="[data ? {'right': '1rem'} : {'right': '200vw'}]">
                MEZZ Token is the utility token of The MEZZ Platform, a DeFi platform for users to engage in acquisition and liquidation of NFTs and other crypto assets through bidding-backed collateral extension.
                <a href="/MEZZ.pdf" style="background: black;
                                                                                                                    color: pink;
                                                                                                                    border-radius: 0px;
                                                                                                                    margin: 1rem 0rem;
                                                                                                                    padding: 0rem 0.75rem 0.5rem 0.75rem;
                                                                                                                    text-shadow: 0px 0px;box-shadow:0px 0px 10px pink;
                                                                                                                    font-weight: bold;
                                                                                                                    font-family: 'Permanent Marker';" target="download"> Read Whitepaper </a>
    
            </div>
            <div class="middle">
                <a href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xC4c346eDc55504574cCEB00AA1091d22404A4bC3&chainId=1">
                    <p class="logo-1">BUY MEZZ</p>
                </a>
                <div class="logo"><b><span>M</span>E<span>Z</span>Z</b></div>
                <div class="row">
                    <a href="https://twitter.com/MEZZTOKEN">
                        <p class="logo-1 rowlogo" style="width:8vw;height:8vw;min-height:116px;min-width:116px;"><img style="width:100%;height:100%;" src="~/@/assets/Twitter-gl.svg" alt=""></p>
                    </a>
                    <a href="https://dexscreener.com/ethereum/0x1ad651a07b98464aa42f6cad68d0ce8639b659a5">
                        <p class="logo-1 rowlogo" style="width:6vw;height:6vw;min-height:60px;min-width:60px;"><img style="width:100%;height:100%;left:0px;position:absolute;" src="~/@/assets/dexs.svg" alt=""><img style="width:100%;height:100%;left:0px;position:absolute;filter:blur(20px);" src="~/@/assets/dexs.svg" alt=""><img style="width:100%;height:100%;left:0px;position:absolute;filter:blur(5px);"
                                src="~/@/assets/dexs.svg" alt=""></p>
                    </a>
                </div>
            </div>
    
        </div>
    </div>
    
    
    <div class="bg2" :style="[isthreedee ? {'z-index': '1', 'opacity': '1'} : {'z-index': '-1', 'opacity': '0'}]">
        <div class="cover" style="">
            <div class="data" :style="[data ? {'right': '1rem'} : {'right': '200vw'}]">
                MEZZ Token is the utility token of The MEZZ Platform, a DeFi platform for users to engage in acquisition and liquidation of NFTs and other crypto assets through bidding-backed collateral extension.
                <a href="/MEZZ.pdf" style="background: pink;
                                                                                                                    color: black;
                                                                                                                    border-radius: 0px;
                                                                                                                    margin: 1rem 0rem;box-shadow:0px 0px 10px black;
                                                                                                                    padding: 0rem 0.75rem 0.5rem 0.75rem;
                                                                                                                    text-shadow: 0px 0px;
                                                                                                                    font-weight: bold;
                                                                                                                    font-family: 'Permanent Marker';" target="download"> Read Whitepaper </a> </div>
            <div class="middle2">
                <a href="https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xC4c346eDc55504574cCEB00AA1091d22404A4bC3&chainId=1">
                    <p class="logo-1">BUY MEZZ</p>
                </a>
                <div class="logo"><b><span>M</span>E<span>Z</span>Z</b></div>
                <div class="row">
                    <a href="https://twitter.com/MEZZTOKEN">
                        <p class="logo-1 rowlogo" style="width:8vw;height:8vw;min-height:100px;min-width:100px;"><img style="width:100%;height:100%;" src="~/@/assets/Twitter-mz.svg" alt=""></p>
                    </a>
                    <a href="https://dexscreener.com/ethereum/0x1ad651a07b98464aa42f6cad68d0ce8639b659a5">
                        <p class="logo-1 rowlogo" style="width:6vw;height:6vw;min-height:100px;min-width:100px;"><img style="width:100%;height:100%;" src="~/@/assets/dex-ol.svg" alt=""></p>
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

.bg1 {transition:opacity 0.5s ease;
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
        line-height: 1;
    }
    .logo b {
        font: 400 10vw 'Permanent Marker';
        color: #fee;
        line-height: 10vw;
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
        mix-blend-mode: hard-light;
        z-index: 5;
        position: relative;
        perspective: 100vh;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-flow: wrap;
        overflow-y: auto;
        justify-content: center;
    }
    .data {
        background-image: radial-gradient(#0000, black);
        filter: hue-rotate(300deg);
        box-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light), 0 0 3px var(--shadow-color-light), 0 0 10px var(--shadow-color-light), 0 0 20px var(--shadow-color-light), 0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);
        width: 600px;
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
        transform: rotatey(25deg) rotatez(-1deg) translatey(-2rem) translatez(5vw) translatex(-8vw);
        margin: auto;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        padding: 5rem;
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
        transform: scale(1.1);
    }
    a>p {
        transition: all 0.5s ease;
        font-size: 4vh;
        font-weight: bold;
        color: white;
        margin: 0.5rem;
    }
    .row>a:nth-of-type(1) {
        filter: hue-rotate(280deg)brightness(1.5);
    }
    .row>a:nth-of-type(2) {
        p {
            img {}
        }
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

.topdata {
    cursor: pointer;
    position: fixed;
    z-index: 10;
    top: 1rem;
    left: 2rem;
    color: white;
    transition: transform 0.2s ease;
    &:hover {
        transform: scale(1.1);
    }
}

.bg2 {transition:opacity 0.5s ease;
    width: 100vw;
    height: 100vh;
    background-position: right center;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    background-image: url(/bg.png);
    .data {
        width: 600px;
        font-size: 1.5rem;
        margin: auto;
        box-shadow: 0px 0px 50px black;
        backdrop-filter: blur(10px);
        color: white;
        font-family: 'Klee One', cursive;
        padding: 1rem;
        text-shadow: 0px 0px 5px white;
        ;
        border-radius: 1rem;
    }
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
        transition: all 0.5s ease;
        &:hover {
            b {
                span {
                    transform: scale(1.1);
                }
            }
        }
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
        background-image: radial-gradient(#0000, black);
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
        padding: 5rem;
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
        &:hover {
            transform: scale(1.1);
        }
    }
    .cover {
        flex-flow: wrap;
        overflow-y: auto;
        backdrop-filter: saturate(1)brightness(0.8);
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
            transform: rotatey(25deg) rotatez(-1deg) translatey(-2rem) translatez(5vw) translatex(-18vh);
        }
        .row {}
        a>p {
            font-size: 3vw;
            font-weight: bold;
            margin: 0.5rem;
        }
    }
}

@media screen and (max-width:600px) {
    .bg1 {
        .cover {
            mix-blend-mode: unset;
            overflow: hidden;
            flex-flow: wrap-reverse;
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
            animation: unset;
            display: none;
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
            display: none;
        }
        .middle {
            transform: rotatey(-40deg) rotatez(1deg) translatey(-4rem) translatez(8vw) translatex(20vw);
            margin: auto;
            margin-right: auto;
            background-size: contain;
            background-position: 50%;
            background-repeat: no-repeat;
            padding: 0rem;
            margin-right: auto;
            mix-blend-mode: normal;
            text-shadow: -1px -1px 1px var(--shadow-color-light), -1px 1px 1px var(--shadow-color-light), 1px -1px 1px var(--shadow-color-light), 1px 1px 1px var(--shadow-color-light), 0 0 3px var(--shadow-color-light), 0 0 10px var(--shadow-color-light), 0 0 20px var(--shadow-color-light), 0 0 30px var(--shadow-color), 0 0 40px var(--shadow-color), 0 0 50px var(--shadow-color), 0 0 70px var(--shadow-color), 0 0 100px var(--shadow-color), 0 0 200px var(--shadow-color);
        }
        .row {
            max-width: 100vw;
        }
        .logo-1 {
            font-size: 8vw;
            animation: unset !important;
            filter: unset !important;
        }
        .logo b {
            font: 400 20vw 'Permanent Marker';
            color: rgb(255, 255, 255);
            filter: hue-rotate(-50deg);
            animation: unset;
            text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff0090, 0 0 0.5em #ff44eb, 0 0 0.1em #ff44f3;
        }
        .logo b {
            animation: unset;
        }
        .logo b span {
            filter: hue-rotate(10deg);
            animation: unset;
        }
        .logo b span:nth-of-type(2) {
            animation: unset;
            filter: hue-rotate(20deg);
        }
        .rowlogo {
            img {
                width: 5vw;
                height: 5vw;
            }
            transition: all .5s ease;
            font-size: 5vw;
            font-weight: 700;
            color: #fff;
            margin: .5rem;
        }
        .data {transition:right 0.5s ease;
            z-index: 10;
            font-size: 1.25rem;
            text-shadow: unset;
            width: calc(100vw - 2rem);
            background: #000e;
            margin-top: 0px;
            position: absolute;
            top: 5rem;
            padding: 1rem 1.5rem;
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
        .data {transition:right 0.5s ease;
            position: absolute;
            top: 5rem;
            z-index: 10;
            background: white;
            color: black;
            text-shadow: unset;
            font-size: 1.25rem;
            width: calc(100vw - 2rem);
            box-shadow: 0px 0px 100px black;
            margin-top: 0px;
            padding: 1rem 1.5rem;
        }
        .cover {
            overflow-y: hidden;
            flex-flow: wrap-reverse;
        }
    }
    :root {
        --shadow-color: #ff9e9e29;
        --shadow-color-light: rgba(255, 255, 255, 0.397);
    }
}
</style>