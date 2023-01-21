<template>
    <div class="bg" style="width:100vw;height:100vh;background-size:cover;background-repeat:no-repeat;position:fixed;background-image:url(/bg.png);">
        <div class="cover" style="height:100vh;width:100vw;display:flex;flex-flow:column;justify-content:center;backdrop-filter:blur(10px)brightness(0.5);">
    
            <div class="middle">
                <h1>MEZZ</h1>
                <div class="row">
                    <a href="https://twitter.com/MEZZTOKEN">
                        <p>TWITTER</p>
                    </a>
                    <a href="https://dexscreener.com/ethereum/0x1ad651a07b98464aa42f6cad68d0ce8639b659a5">
                        <p>TWITTER</p>
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
    font-family: 'Rock Salt', cursive;
}

.middle {
    margin: auto;
    transform: rotate(-20deg);
}

.middle>h1 {
    font-size: 10vh;
    color: white;margin-bottom:unset;
    text-shadow: 0px 0px 100px white;
}

.row {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
}

a {
    color: white;
    text-decoration: unset;
}

a>p {
    text-shadow: 0px 0px 10px white;
}

@media screen and (min-width: 100vh) {
    .middle>h1 {
        font-size: 10vw;
        color: white;
        text-shadow: 0px 0px 100px white;
    }
}
</style>