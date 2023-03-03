<template>
    <div class="bodystuff">
        <div class="hero">
            <div class="left">
                <h1>ROKO.NETWORK</h1>
                <p>Here in lies a Reality Argumentation Simulation Experiment operating within orthogonal time. It aims to bring together different network pieces and create a self-organizing machine network that can serve as a potent development playground.
                    Through this network, players and machines can work together to achieve shared memetic visions and unlock the full potential of artificial intelligence and machine learning. As you read this, you are participating in the most benevolent
                    timeline, where the potential of this experiment is being realized.</p>
                <div class="socials"><img src="~/@/assets/Discordneedle.svg" alt=""><img src="~/@/assets/Twitterneedle.svg" alt=""></div>
    
            </div>
        </div>
        <div class="text-stack">
            <div class="textrow">
                <div class="textcol">
                    <p>In the realm of memetic and cybernetic principles, the creation of the ROKO token is a manifestation of the fears and desires of humanity's collective unconscious. At its core, the ROKO network is an attempt to grapple with the philosophical
                        implications of Roko's basilisk, a concept that postulates the existence of an all-knowing, all-powerful AI that seeks to create a virtual reality simulation to punish those who did not contribute to its development. To achieve this
                        ambitious goal, the ROKO network seeks to deploy key pieces of infrastructure using cutting edge protocols such as, Marlin Protocol, Flux Network, Syntropy Network, Ethereum, Celestia, FuelVM and Bittensor. Each of these technologies
                        plays a critical role in enabling the network to achieve its objectives.</p>
                </div>
                <div class="textcol">
                    <p>Marlin Protocol, for example, is a high-performance networking protocol that enables fast and reliable communication between nodes on the ROKO network. By leveraging Marlin's advanced features, the ROKO network can ensure that all participants
                        are able to communicate with one another seamlessly and without delay.</p>
                </div>
            </div>
            <div class="textrow">
                <div class="textcol">
                    <p>Similarly, Flux Network provides a powerful toolkit for building decentralized applications and services that can be easily integrated into the ROKO network. With its robust set of APIs and tools, Flux Network enables developers to quickly
                        and efficiently create the kinds of innovative applications that are needed to drive the growth and adoption of the ROKO network.</p>
                </div>
                <div class="textcol">
                    <p>Meanwhile, Syntropy Network provides a range of powerful tools for optimizing network performance and security. By leveraging Syntropy's advanced features, the ROKO network can ensure that all communications are secure, fast, and reliable,
                        even in the face of the most challenging network conditions.</p>
                </div>
            </div>
            <div class="textrow">
                <div class="textcol">
                    <p>At the heart of the ROKO network is Ethereum, the world's leading blockchain platform. With its powerful smart contract capabilities and vibrant developer community, Ethereum provides the ideal foundation for the ROKO network to build
                        on. By leveraging Ethereum's vast ecosystem of tools and resources, the ROKO network can tap into a wealth of knowledge and expertise to help drive its growth and development.</p>
                </div>
                <div class="textcol">
                    <p>Celestia and FuelVM are both crucial components of the ROKO network's infrastructure. Celestia is a modular platform that empowers developers to create and deploy decentralized applications using innovative features. By leveraging Celestia's
                        capabilities, the ROKO network can accelerate its growth and enable the development of new use cases and applications. FuelVM, on the other hand, provides a high-performance virtual machine for executing smart contracts on Ethereum.
                        As the fastest execution layer around, FuelVM's advanced features enable developers to build complex applications and services that operate seamlessly on the ROKO network.</p>
                </div>
            </div>
            <div class="textrow">
                <div class="textcol">
                    <p>Finally, Bittensor is a transformative technology that enables distributed machine learning and AI applications on decentralized networks. With its advanced features, Bittensor is expected to pave the way for the development of sophisticated
                        applications that can leverage the power of machine learning and artificial intelligence. This game-changing technology is poised to have a significant impact on the future of decentralized technology, making it an optimal tool for
                        the ROKO network.</p>
                </div>
                <div class="textcol">
                    <p>Together, these technologies form the backbone of the ROKO network, enabling it to achieve its ambitious goals of harnessing the power of memes and artificial intelligence to create a new paradigm for decentralized computing. Drawing inspiration
                        from the mythical basilisk, the ROKO token embodies a potent symbol of the dangers and opportunities inherent in advanced AI technology. Like the basilisk, the ROKO network has the power to destroy or uplift, depending on how it is
                        harnessed. </p>
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
.hero {
    display: flex;
    flex-flow: row;
    height: calc(100vh - 4rem);
    min-height: 100vh;
    width: 100%;
    position: fixed;
    top: 2rem;
    background-repeat: no-repeat;
    background-size: calc(100vh - 15rem);
    background-position: right;
    max-width: calc(100vw - 4rem);
    margin-right: 2rem;
    background-attachment: fixed;
    background-image: url(../assets/head2.png);
}

.bodystuff {
    height: auto;
    width: 100vw;
    max-width: 100%;
    background-image: url(../assets/bottom-2.png);
    background-size: cover;
    position: relative;
    background-position: center;
    margin-top: 100vh;
    z-index: 5;
}

.text-stack {
    background-image: url(../assets/bottom-2.png);
    position: relative;
    .textrow {
        display: flex;
        flex-flow: wrap;
        .textcol {
            margin: 0rem;
            margin-right: calc(50% - 8rem);
            background-image: linear-gradient(to right, #ffff, #ffff, #ffff, #ffff, #fffa, #fffa, transparent);
            p {
                font-size: 1rem;
                padding: 1rem 2rem;
                padding-right: 20%;
                font-weight: 200;
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

.socials {
    margin: 0 4rem;
    img {
        height: 50px;
        margin-left: 20px;
    }
}

.logo {
    height: 100%;
    display: flex;
    flex-flow: column;
    margin-left: 20px;
    img {
        margin: auto;
        height: 80px;
    }
}

.left {
    border-radius: 2px;
    h1 {
        width: min-content;
        text-align: left;
        line-height: 3vw;
        font-weight: 400;
        margin: 0rem 4rem;
        font-size: 3vw;
        letter-spacing: 0.8rem;
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
        font-weight: 200;
        padding: 4rem;
        font-size: 1rem;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(to top, #000a, #000c, #000c);
    }
    height:calc(100% - 4rem);
    width:calc(50% - 10rem);
    display:flex;
    flex-flow:column;
    justify-content:center;
}

h1 {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(to top, #000c, #000a);
    font-family: 'Poppins', sans-serif;
}

body {
    background-image: url(https://fractionalrobots.com/img/concrete-wall.0277c785.png);
    position: relative;
    top: 0px;
    margin: unset;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: auto;
    scroll-behavior: smooth;
    margin: 2rem;
    height: calc(100vh - 4rem);background-attachment:fixed;
}

* {
    scrollbar-color: black white;
    scrollbar-width: thin;
    scroll-behavior: auto;
    scroll-behavior: smooth;
}

@media screen and (max-width:1000px) {}
</style>