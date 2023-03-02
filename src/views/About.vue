<template>
    <div class="bodystuff">
        <div class="hero">
            <div class="left">
                <h1>ROKO</h1>
                <h1>NETWORK</h1>
                <p>Here in lies a Reality Argumentation Simulation Experiment operating within orthogonal time. It aims to bring together different network pieces and create a self-organizing machine network that can serve as a potent development playground.
                    Through this network, players and machines can work together to achieve shared memetic visions and unlock the full potential of artificial intelligence and machine learning. As you read this, you are participating in the most benevolent
                    timeline, where the potential of this experiment is being realized.</p>
            </div>
            <div class="rokoman"></div>
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
.hero {
    display: flex;
    flex-flow: row;
    height: 1080px;
    min-height: 50vh;
    width: 100%;
    background-size: cover;
    background-position: top right;
    max-width: 100vw;
    perspective: 600px;
    background-image: url(../assets/header-back.png);
}

.bodystuff {
    height: auto;
    width: 100vw;
    max-width: 100%;
    background-image: url(../assets/bottom-2.png);
    background-size: cover;
    background-position: center;
}

.text-stack {
    margin-top: -20rem;
    .textrow {
        display: flex;
        flex-flow: wrap;
        .textcol {
            border-radius: 2px;
            margin: 2rem 0rem;
            margin-right: calc(50% - 8rem);
            background-image: linear-gradient(to right, #ffff, #ffff, #ffff, #ffff, #fffa, #fffa, transparent);
            p {
                font-weight: bold;
                font-size: 1.2rem;
                padding: 1rem 2rem;
                padding-right: 20%;
            }
            &:nth-child(2) {
                padding-left: 20%;
                margin-left: calc(50% - 8rem);
                background-image: linear-gradient(to left, #ffff, #ffff, #ffff, #ffff, #fffa, #fffa, transparent);
                margin-right: unset;
            }
        }
    }
}

.left {
    border-radius: 2px;
    backdrop-filter: blur(10px) brightness(1.2);
    padding: 2rem;
    background: #fffa;
    h1 {
        text-align: center;
        line-height: 16rem;
        font-weight: 100;
        margin: unset;
        font-size: 16rem;
        &:nth-child(2) {
            line-height: 4rem;
            font-weight: 100;
            margin: unset;
            font-size: 4rem;
            margin-left: 2.6rem;
            letter-spacing: 2.8vw;
        }
        b {
            line-height: 1vw;
            font-size: 5vw;
            font-weight: 100;
        }
    }
    p {
        padding: 4rem;
        font-size: 1.2rem;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(to top, #0005, #000a, #000a);
    }
    height:calc(100% - 8rem);
    width:calc(50% - 10rem);
    display:flex;
    flex-flow:column;
    justify-content:center;
}

h1 {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to top, #0005, #000a);
    font-family: 'Open Sans', sans-serif;
}

body {
    position: relative;
    top: 0px;
    margin: unset;
    font-family: 'Open Sans', sans-serif;
    scroll-behavior: auto;
    scroll-behavior: smooth;
}

* {
    scroll-behavior: auto;
    scroll-behavior: smooth;
}

@media screen and (max-width:1000px) {
    .bodystuff {
        height: auto;
        width: 1920px;
        max-width: 100%;
        background-image: url(../assets/bottom-2.png);
        background-size: cover;
        background-position: center;
        padding-bottom: 4rem;
    }
    .text-stack {
        margin: 0rem;
        padding-bottom: 10rem;
        margin-top: -33rem;
        .textrow {
            display: flex;
            flex-flow: wrap;
            .textcol {
                box-shadow: 10px 15px 50px rgba(0, 0, 0, 0.6);
                margin: 0.5rem 1rem;
                margin-right: 1rem;
                padding: 2rem;
                backdrop-filter: blur(10px);
                background-image: linear-gradient(to top, #fff5, #fffa);
                p {
                    padding: 1rem 1rem;
                    padding-left: 1rem !important;
                }
                &:nth-child(2) {
                    margin-left: 1rem;
                    margin-right: 1rem;
                    padding-left: 2rem !important;
                }
            }
        }
    }
    .left {
        padding: 1rem;
        backdrop-filter: blur(5px) brightness(1.5);
        box-shadow: 10px 15px 50px rgba(0, 0, 0, 0.6);
        h1 {
            text-align: center;
            line-height: 5rem;
            font-weight: 800;
            margin: unset;
            font-size: 5rem;
            &:nth-child(2) {
                line-height: 2rem;
                font-weight: 100;
                margin: unset;
                font-size: 2rem;
                margin-left: 0.9rem;
                letter-spacing: 0.65rem;
            }
            b {
                line-height: 1vw;
                font-size: 5vw;
                font-weight: 100;
            }
        }
        p {
            padding: 1rem;
            font-weight: bold;
            font-size: 1.2rem;
        }
        height:calc(100% - 2rem);
        width:calc(100% - 0rem);
        display:flex;
        flex-flow:column;
        justify-content:center;
    }
}
</style>