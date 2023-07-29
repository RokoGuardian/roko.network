<template>
    <div class="home" ref="homeContainer" @mousemove="moveBackground">
        <div class="socials">
            <a href="https://discord.gg/fZXkYMAchQ">   <img src="~/@/assets/Discordneedle.svg" alt="">  <img src="~/@/assets/Discordneedle.svg" alt=""></a>
            <a href="https://t.me/RokoNetwork">   <img src="~/@/assets/telegram.svg" alt=""> <img src="~/@/assets/telegram.svg" alt=""></a>
            <a href="https://twitter.com/RokoNetwork">  <img src="~/@/assets/Twitterneedle.svg" alt=""> <img src="~/@/assets/Twitterneedle.svg" alt=""></a>
            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xe0076d311a4628516d157ad684dbd2ddada3dafe"> <img src="~/@/assets/dextools.svg" alt=""> <img src="~/@/assets/dextools.svg" alt=""></a>
            <a href="https://www.coingecko.com/en/coins/roko-network"> <img src="~/@/assets/cg.svg" alt=""> <img src="~/@/assets/cg.svg" alt=""></a>
            <a href="https://etherscan.io/token/0x6f222e04f6c53cc688ffb0abe7206aac66a8ff98">  <img src="~/@/assets/etherscan.svg" alt=""> <img src="~/@/assets/etherscan.svg" alt=""></a>
            <a href="https://snapshot.org/#/rokonetwork.eth">  <img src="~/@/assets/snapshot.svg" alt=""> <img src="~/@/assets/snapshot.svg" alt=""></a>
    
        </div>
        <div class="center-home">
            <h1 style="color:white;font-weight:100;">ROKO NETWORK</h1>
            <p>Subverting the basalisk with open source, decentralized dataset creation, compute sharing, group batched training and more, with an emphasis on transparency and zero-knowledge data privacy.</p>
            <div class="row">
                <a href="https://snapshot.org/#/rokonetwork.eth">
                    <div class="button">PARTICIPATE</div>
                </a>
                <router-link to="/demo">
                    <div class="button">DEMO</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            streamOpacity: 50,
            classificationOpacity: 0,
            streamSizeMult: 1,
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
        moveBackground(event) {
            const container = this.$refs.homeContainer;
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;

            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const moveX = (mouseX / containerWidth) * 50;
            const moveY = (mouseY / containerHeight) * 50;

            container.style.backgroundPosition = `${moveX}% ${moveY}%`;
        },
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
    components: {},
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@font-face {
    font-family: 'uno';
    src: url(../assets/unoestado.ttf);
}

.center-home {
    width: 600px;
    position: relative;
    z-index: 10;
    margin: auto;
    padding: 2rem;
    max-width: calc(100vw - 4rem);
    h1 {
        margin: unset;
        font-size: calc(2rem + 1vw);
    }
    p {
        margin-bottom: 2rem;
        color: white;
    }
    a {
        text-decoration: none;
        transition: all 0.5s ease;
        &:hover {
            opacity: 0.5;
        }
    }
    .button {
        padding: 1rem;
        background: white;
        color: rgb(109, 112, 126);
    }
    .row {
        display: flex;
        flex-flow: row;
        gap: 1rem;
    }
}

.home {
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    display: flex;
    flex-flow: column;
    top: 0px;
    left: 0px;
    justify-content: center;
    background-size: 150%;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    width: 100vw;
    background-image: url(../assets/whitegeometry.jpg);
    &:after {
        content: '';
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
        backdrop-filter: blur(10px);
    }
    .socials {
        display: flex;
        justify-content: center;
        margin: 0;
        position: fixed;
        top: unset;
        bottom: 20px;
        left: 20px;
        height: auto;
        min-height: 34px;
        gap: 0.5rem;
        padding: 0px 10px;
        background-color: transparent;
        border-radius: 8px;
        z-index: 10;
        filter: invert(1);
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
}

@media screen and (max-width:600px) {
    .home{background-size:cover;}
}
</style>