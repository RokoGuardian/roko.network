<template>
    <div class="apparea">
        <div class="demo-desc" v-if="modalActive">
            <div class="infobox">
    
                <p>Please Note, This is a primitive demonstration of the roko-box. The roko-box is a custom configuration of 6 cameras arranged in at 60 degrees relative to one another, connected via GSLR to an Nvidia AGX ORIN, which has been purchased by the
                    <a href="https://snapshot.org/#/rokonetwork.eth/proposal/0xe301c8afe741b3d29a2edc3bedb94e34f1f35e98006d5d833428395cf27e76dd">roko DAO</a> and is owned by the community, but is being developed by <a href="https://snapshot.org/#/rokonetwork.eth/proposal/0x10c1e8131270cb9690ab8e29c6090901cc05aa1a663b68106051924cb6f1b5e6">DAO appointed developers</a>. <br> <br>We will be updating this section of the project and further features will be added soon, such as selection and labeling of segmented items!
                </p>
                <div class="button" @click="modalActive = !modalActive">I UNDERSTAND</div>
            </div>
        </div>
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
        <div class="perspective" style="cursor:crosshair!important;">
            <a-scene webxr="requiredFeatures: hit-test,local-floor;
                                                                                                                                                                        optionalFeatures: dom-overlay,unbounded;
                                                                                                                                                                        overlayElement: #overlay;">
                <a-entity environment="preset: starry; lighting: distant; groundColor: #445; grid: cross"></a-entity>
    
                <a-entity camera look-controls reverseMouseDrag="true" position="0 5 0"></a-entity>
    
    
                <a-curvedimage :visible="streamVisible" :src="currentURL" height="10.0" radius="5" segments="6" position="0 5 0" theta-length="360" :opacity="streamOpacityMult()" rotation="0 100 0" scale="1 1 1 "></a-curvedimage>
                <a-curvedimage :visible="streamVisible" :src="currentURL2" height="10.0" radius="5" segments="6" position="0 5 0" theta-length="360" :opacity="streamOpacityMult2()" rotation="0 100 0" scale="1 1 1 "></a-curvedimage>
    
    
            </a-scene>
    
    
            <div class="segmentbutton" :style="[streamVisible ? {'filter' : 'invert(1)'} : {'filter' : 'invert(0)'}]" @click="streamVisible = !streamVisible"></div>
            <div class="screenshot" @click="screenshot()"></div>
            <div style="position:fixed;opacity:0.5;z-index:1000;width:240px;left:20px;bottom:80px;">
                <p>Classification</p>
                <vue3-slider v-model="streamSizeMult" height="10" color="#ff5500" track-color="#FEFEFE" />
            </div>
            <div style="position:fixed;z-index:1000;width:240px;left:20px;bottom:150px;">
                <p>Segmentation</p>
                <vue3-slider v-model="streamOpacity" height="10" color="#00aaff" track-color="#FEFEFE" />
            </div>
            <router-link to="/">
                <div class="roko"></div>
            </router-link>
        </div>
    </div>
</template>

<script>
import slider from "vue3-slider"

export default {
    name: 'app',
    data() {
        return {
            streamOpacity: 50,
            classificationOpacity: 0,
            streamSizeMult: 1,
            modalActive: true,
            streamVisible: true,
            currentURL: 'https://i.imgur.com/EQlNW3K.jpeg',
            currentURL2: 'https://i.imgur.com/Ih1YFSy.jpeg',
        }
    },
    mounted() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js')
        document.head.appendChild(recaptchaScript)
    },
    methods: {
        streamOpacityMult() {

            const streamOpacityMultVal = this.streamOpacity * 0.01;
            return streamOpacityMultVal
        },
        streamOpacityMult2() {

            const streamOpacityMultVal2 = (100 - this.streamOpacity) * 0.01;
            return streamOpacityMultVal2
        },
        screenshot() {
            document.querySelector('a-scene').components.screenshot.capture('equirectangular')
        },
        toggleURL() {
            console.log("Button clicked! Trigger your method here.");
            if (this.currentURL === 'https://i.imgur.com/EQlNW3K.jpg') {
                this.currentURL = 'https://i.imgur.com/Ih1YFSy.jpg';
            } else {
                this.currentURL = 'https://i.imgur.com/EQlNW3K.jpg';
            }
        },
        toggleURL2() {
            console.log("Button clicked! Trigger your method here.");
            if (this.currentURL2 === 'https://i.imgur.com/EQlNW3K.jpg') {
                this.currentURL2 = 'https://i.imgur.com/Ih1YFSy.jpg';
            } else {
                this.currentURL2 = 'https://i.imgur.com/EQlNW3K.jpg';
            }
        },
    },
    computed: {

    },
    watch: {},
    components: { "vue3-slider": slider },
    directives: {
        aframeEnvironment: {
            bind(el) {
                // Initialize the <a-entity environment> when the element is bound to the directive
                const entity = document.createElement('a-entity')
                entity.setAttribute('environment', {}) // You can pass any options here
                el.appendChild(entity)
            },
            unbind(el) {
                // Clean up and remove the <a-entity environment> when the element is unbound from the directive
                while (el.firstChild) {
                    el.removeChild(el.firstChild)
                }
            }
        }
    }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Space+Mono:wght@400;700&display=swap');
@font-face {
    font-family: 'uno';
    src: url(../assets/unoestado.ttf);
}

.demo-desc {
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    position: fixed;
    font-family: 'Space Mono', monospace;
    display: flex;
    flex-flow: column;
    justify-content: center;
    backdrop-filter: blur(10px)brightness(0.5);
    .infobox {
        p {
            user-select: none;
            margin-top: unset;
        }
        .button {
            cursor: pointer;
            user-select: none;
            padding: 1rem;
            background: white;
            color: rgb(109, 112, 126);
            &:hover {
                opacity: 0.5;
            }
        }
        max-width: calc(100vw - 4rem);
        position: relative;
        margin: auto;
        width: 600px;
        z-index: 1000;
        background: black;
        color: white;
        padding: 2rem;
        a {
            color: white;
        }
    }
}

h1 {}

p {
    font-family: 'Space Mono', monospace;
}

.a-dialog-text {
    font-family: 'Space Mono', monospace !important;
    color: black !important;
}

.a-dialog-allow-button {
    font-family: 'Space Mono', monospace !important;
    color: black !important;
    background-color: white !important;
}

.a-dialog-button {
    font-family: 'Space Mono', monospace !important;
    color: black !important;
    border: 1px solid black !important;
}

.a-dialog-deny-button {
    font-family: 'Space Mono', monospace !important;
    color: white !important;
    background-color: black !important;
}

.segmentbutton {
    border: 0;
    bottom: 20px;
    cursor: pointer;
    min-width: 100px;
    background: white;
    display: flex;
    flex-flow: column;
    justify-content: center;
    &:after {
        font-family: 'Space Mono', monospace;
        content: 'CAMERAS';
        color: black;
        position: absolute;
        text-align: center;
        width: 100%;
    }
    min-height: 34px;
    padding-right: 0;
    padding-top: 0;
    position: fixed;
    left: 20px;
    z-index: 9999;
    &:hover {
        filter: invert(1);
    }
}

.screenshot {
    border: 0;
    bottom: 20px;
    cursor: pointer;
    min-width: 120px;
    background: white;
    display: flex;
    flex-flow: column;
    justify-content: center;
    &:after {
        font-family: 'Space Mono', monospace;
        content: 'SCREENSHOT';
        color: black;
        position: absolute;
        text-align: center;
        width: 100%;
    }
    min-height: 34px;
    padding-right: 0;
    padding-top: 0;
    position: fixed;
    left: 140px;
    z-index: 9999;
    &:hover {
        filter: invert(1);
    }
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

.roko {
    right: 20px;
    top: 20px;
    min-width: 40px;
    height: auto;
    min-height: 34px;
    position: fixed;
    gap: 0.5rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 0px 10px;
    background-color: white;
    z-index: 10;
    &:after {
        content: 'ROKO';
        font-family: 'Space Mono', monospace;
        color: black;
        position: absolute;
        text-align: center;
        width: auto;
    }
}

.socials {
    display: flex;
    justify-content: center;
    margin: 0;
    position: fixed;
    top: 20px;
    left: 20px;
    height: auto;
    min-height: 34px;
    gap: 0.5rem;
    padding: 0px 10px;
    background-color: white;
    z-index: 10;
    a {
        display: flex;
        flex-flow: column;
        justify-content: center;
        position: relative;
        transition: all 0.5s ease;
        transform-origin: 50% 50%;
        &:hover {
            transform: scale(1.2);
        }
    }
    img {
        height: 20px;
        transition: all 0.5s ease;
        &:nth-child(2) {
            position: absolute; //filter: blur(2px)brightness(2);
        }
    }
}

@media screen and (max-width:600px) {}
</style>