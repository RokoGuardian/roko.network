<template>
    <div class="bg" style="width:100vw;height:100vh;background-position:center;background-size:cover;background-repeat:no-repeat;position:fixed;background-image:url(/bg.png);">
        <div class="cover" style="height:100vh;width:100vw;display:flex;flex-flow:column;justify-content:center;backdrop-filter:blur(10px)contrast(2)brightness(0.5);">
    
            <div class="middle">
                <h1>MEZZ</h1>
                <div class="row">
                    <a href="https://twitter.com/MEZZTOKEN">
                        <p>TWITTER</p>
                    </a>
                    <a href="https://dexscreener.com/ethereum/0x1ad651a07b98464aa42f6cad68d0ce8639b659a5">
                        <p>TOKEN</p>
                    </a>
                </div>
            </div>
    
        </div>
    </div>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Klee+One:wght@400;600&family=Permanent+Marker&family=Rock+Salt&display=swap');
h1 {
    font-family: 'Permanent Marker', cursive;
}

p {
    font-family: 'Permanent Marker', cursive;
}

@keyframes hr {
    0% {
        filter: hue-rotate(0deg)
    }
    50% {
        filter: hue-rotate(80deg)
    }
    100% {
        filter: hue-rotate(0deg)
    }
}

.middle {
    margin: auto;
    transform: rotate(-20deg);
    background-image: url(/mezz-back2.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding: 6rem;
    animation: hr 10s linear infinite;
}

.middle>h1 {
    margin-top: -2rem;
    font-size: 10vh;
        color: white;
    margin-bottom: unset;
    text-shadow: 0px 0px 50px rgb(0, 183, 255);
}

.row {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
}

a {
    background: black;
    padding: 0rem 0.5rem;
    color: white;
    text-decoration: unset;
    border-radius: 1rem;
    box-shadow: 0px 5px 2px rgb(0, 255, 225);
}

a:hover {
    transform: translatey(2px);
    box-shadow: 0px 2px 2px rgb(0, 255, 225);
}

a>p {
    font-size: 2vh;
    text-shadow: 0px 0px 5px rgb(0, 0, 0);
    font-weight: bold;
    margin: 0.5rem;
}

@media screen and (min-width: 100vh) {
    .middle>h1 {
        font-size: 10vw;
        color: white;
    }
a>p {
    font-size: 2vw;
    text-shadow: 0px 0px 5px rgb(0, 0, 0);
    font-weight: bold;
    margin: 0.5rem;
}
}
</style>