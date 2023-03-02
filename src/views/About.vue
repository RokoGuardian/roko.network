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
                        harnessed.
                    </p>
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
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap');
.hero {
    display: flex;
    flex-flow: row;
    height: 1080px;
    min-height: 50vh;
    width: 100%;
    background-size: cover;
    background-position: top right;
    max-width: 100vw;
    padding-bottom: 37rem;
    perspective: 600px;
    background-image: url(../assets/header-back.png);
}

.bodystuff {
    height: auto;
    width: 100vw;
    max-width: 100%;
    min-height: 190vh;
    background-image: url(../assets/bottom-2.png);
    background-size: cover;
    background-position: center;
    padding-bottom: 10rem;
}

.text-stack {
    margin: 2rem;
    padding-bottom: 10rem;
    margin-top: -20rem;
    .textrow {
        display: flex;
        flex-flow: wrap;
        .textcol {
            border: 1px solid black;
            box-shadow: 10px 15px 50px rgba(0, 0, 0, 0.6);
            margin: 2rem;
            margin-right: calc(50% - 8rem);
            backdrop-filter: blur(10px)brightness(2);
            background-image: linear-gradient(to right, #fff5, #fffa);
            p {
                font-weight: bold;
                font-size: 1.2rem;
                padding: 1rem 2rem;
            }
            &:nth-child(2) {
                margin-left: calc(50% - 8rem);
                background-image: linear-gradient(to left, #fff5, #fffa);
                margin-right: unset;
            }
        }
    }
}

.left {
    background-image: linear-gradient(to top, #11111155, black);
    backdrop-filter: blur(10px)brightness(1.1);
    padding: 2rem;
    margin: 2rem;
    border: 1px solid black;
    transform: rotatey(2deg)translatez(-50px);
    box-shadow: 10px 15px 50px rgba(0, 0, 0, 0.6);
    h1 {
        text-align: center;
        line-height: 15rem;
        font-weight: 100;
        margin: unset;
        font-size: 15rem;
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
        padding: 2rem;
        font-size: 1.2rem;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(to top, #ffffffaa, white, white);
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
    background-image: linear-gradient(to top, transparent, white);
    font-family: 'Josefin Sans', sans-serif;
}

body {
    position: relative;
    top: 0px;
    margin: unset;
    font-family: 'Cormorant', serif;
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
    min-height: 190vh;
    background-image: url(../assets/bottom-2.png);
    background-size: cover;
    background-position: center;
    padding-bottom: 4rem;
}

    .text-stack {
        margin: 1rem;
        padding-bottom: 10rem;margin-top:-33rem;
        .textrow {
            display: flex;
            flex-flow: wrap;
            .textcol {
                box-shadow: 10px 15px 50px rgba(0, 0, 0, 0.6);
                margin: 1rem;
                margin-right: 1rem;
                backdrop-filter: blur(10px);
                background-image: linear-gradient(to top, #fff5, #fffa);
                p {
                    padding: 1rem 1rem;
                }
                &:nth-child(2) {
                    margin-left: 1rem;
                    margin-right: 1rem;
                }
            }
        }
    }
    .left {
        background-image: linear-gradient(to top, #11111122, #000a);
        backdrop-filter: blur(10px)brightness(1.1);
        padding: 1rem;
        margin: 2rem;
        transform: rotatey(0deg)translatez(0px);
        box-shadow: 10px 15px 50px rgba(0, 0, 0, 0.6);
        h1 {
            text-align: center;
            line-height: 5rem;
            font-weight: 100;
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
            font-weight: bold;
            font-size: 1.2rem;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-image: linear-gradient(to top, #ffffffaa, white, white);
        }
        height:calc(100% - 2rem);
        width:calc(100% - 6rem);
        display:flex;
        flex-flow:column;
        justify-content:center;
    }
}
</style>