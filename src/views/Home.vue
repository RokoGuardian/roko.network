<template>
    <div class="apparea" >
        <div class="centered">
    
            <Circle class="circ" />
            <TyperComponent text="ROKO          " search="ROKO          " :replace="['DATASETS', 'COMMUNICATION', 'ROBOTICS', 'NETWORK', 'BLOCKCHAIN', 'URBIT', 'DISTRIBUTED', 'COMPUTE']"></TyperComponent>
            <div class="line"></div>
        </div>
        <div class="perspective">
            <Glorp />
    
        </div>
    </div>
</template>

<script>
import TyperComponent from '@/components/TyperComponent.vue';
import Circle from '@/components/Circle.vue';
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
    components: { TyperComponent, Glorp, Circle, },
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
        display: none;
        flex-flow: column;
        margin: auto;
        justify-content: center;
        .typer {
            margin: auto;padding-left: 0px;
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

@media screen and (max-width:600px) {}
</style>