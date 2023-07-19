<template>
    <div class="apparea">
        <div class="centered">
            <div class="socials">
                <a href="https://discord.gg/fZXkYMAchQ">   <img src="~/@/assets/Discordneedle.svg" alt="">  <img src="~/@/assets/Discordneedle.svg" alt=""></a>
                <a href="https://t.me/RokoNetwork">   <img src="~/@/assets/telegram.svg" alt=""> <img src="~/@/assets/telegram.svg" alt=""></a>
                <a href="https://twitter.com/RokoNetwork">  <img src="~/@/assets/Twitterneedle.svg" alt=""> <img src="~/@/assets/Twitterneedle.svg" alt=""></a>
                <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xe0076d311a4628516d157ad684dbd2ddada3dafe"> <img src="~/@/assets/dextools.svg" alt=""> <img src="~/@/assets/dextools.svg" alt=""></a>
                <a href="https://www.coingecko.com/en/coins/roko-network"> <img src="~/@/assets/cg.svg" alt=""> <img src="~/@/assets/cg.svg" alt=""></a>
                <a href="https://etherscan.io/token/0x6f222e04f6c53cc688ffb0abe7206aac66a8ff98">  <img src="~/@/assets/etherscan.svg" alt=""> <img src="~/@/assets/etherscan.svg" alt=""></a>
                <a href="https://snapshot.org/#/rokonetwork.eth">  <img src="~/@/assets/snapshot.svg" alt=""> <img src="~/@/assets/snapshot.svg" alt=""></a>
    
            </div>
    
        </div>
        <div class="perspective">
            <Glorp />
    
        </div>
    </div>
</template>

<script>
import Glorp from '@/components/Glorp.vue';


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
    components: { Glorp, },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Space+Mono:wght@400;700&display=swap');
@font-face {
    font-family: 'uno';
    src: url(../assets/unoestado.ttf);
}

h1 {}

p {
    font-family: 'Space Mono', monospace;
}

.perspective {
    perspective: 600px;
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0px;
    top: 0px;
    display: flex;
    flex-flow: column;
    z-index: -1;
    justify-content: center;
    .dot-grid {
        &:nth-child(1) {
            opacity: 0.75;
            .dot {
                transition: all 0.25s ease;
            }
        }
        &:nth-child(2) {
            opacity: 0.5;
            .dot {
                transition: all 0.5s ease;
            }
            transform: translateZ(-25px)
        }
        &:nth-child(3) {
            opacity: 0.25;
            .dot {
                transition: all 0.75s ease;
            }
            transform: translateZ(-50px)
        }
    }
}

.apparea {
    background: black;
    color: white;
    height: 100vh;
    top: 0px;
    position: fixed;
    width: 100vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    .centered {
        width: 1024px;
        max-width: calc(100% - 4rem);
        display: flex;
        flex-flow: column;
        margin: auto;
        justify-content: center;
        .typer {
            margin: auto;
            padding-left: 0px;
        }
        h1 {
            margin: auto 0px;
            margin-right: 1rem;
            user-select: none;
            font-size: 2.9rem;
            padding-bottom: 0.4rem;
            width: fit-content;
            font-family: 'uno';
        }
        .line {
            margin-right: 1rem;
            border-radius: 4px;
            height: 2rem;
            margin: auto;
            background: white;
            width: 4rem;
            margin-right: 1rem;
            position: absolute;
            &::before {
                position: absolute;
                content: '';
                margin-right: 1rem;
                border-radius: 4px;
                height: 5rem;
                margin: auto;
                top: -5.5rem;
                background: white;
                width: 4rem;
                margin-right: 1rem;
            }
            &::after {
                position: absolute;
                content: '';
                margin-right: 1rem;
                border-radius: 4px;
                height: 3rem;
                margin: auto;
                bottom: -3.5rem;
                background: white;
                width: 4rem;
                margin-right: 1rem;
            }
        }
        .circ {
            position: absolute;
            width: 512px;
            left: calc(50% - 256px);
            transform: rotate(-90deg);
        }
    }
}

.socials {
    display: flex;
    justify-content: center;
    margin: 0;position:fixed;
    top: 20px;
    left: 20px;
    height: 0px !important;
    filter: invert(0);
    gap: 1rem;
    a {
        display: flex;
        position: relative;
        transition: all 0.5s ease;
        transform-origin: 50% 50%;
        &:hover {
            transform: scale(1.2);
        }
    }
    img {
        height: 32px;
        transition: all 0.5s ease;
        &:nth-child(2) {
            position: absolute;
            filter: blur(2px)brightness(2);
        }
    }
}

@media screen and (max-width:600px) {}
</style>