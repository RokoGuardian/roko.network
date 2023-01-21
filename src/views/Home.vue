<template>
    <div class="bg" style="width:100vw;height:100vh;background-size:cover;background-repeat:no-repeat;position:fixed;background-image:url(/bg.png);">
        <div class="cover" style="height:100vh;width:100vw;display:flex;flex-flow:column;justify-content:center;backdrop-filter:blur(10px)brightness(0.5);">
    
            <div class="middle">
                <h1>MEZZ</h1>
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
}

.middle>h1 {
    font-size: 10vh;
    transform: rotate(-20deg);
    color: white;
    text-shadow: 0px 0px 100px white;
}

@media screen and (min-width: 100vh
) {
    .middle>h1 {
        font-size: 10vw;
        transform: rotate(-20deg);
        color: white;
        text-shadow: 0px 0px 100px white;
    }
}
</style>