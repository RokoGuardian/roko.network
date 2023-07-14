<template>
    <div class="typer">
        <span v-if="showSpan"></span>
    </div>
</template>
  
<script>
import { ref, onMounted, nextTick } from 'vue';

export default {
    props: {
        text: {
            type: String,
            required: true,
        },
        search: {
            type: String,
            required: true,
        },
        replace: {
            type: Array,
            required: true,
        },
        speed: {
            type: Number,
            default: 50,
        },
        delay: {
            type: Number,
            default: 2000,
        },
    },
    setup(props) {
        const showSpan = ref(false);

        onMounted(() => {
            const $text = props.text;
            const $search = props.search;
            const $replace = props.replace;
            const $speed = props.speed;
            const $delay = props.delay;

            const bintext = (length) => {
                let text = '';
                for (let $i = 0; $i <= length; $i++) {
                    text = text + Math.floor(Math.random() * 2);
                }
                return text;
            };

            const indexOf = $text.indexOf($search);
            const normal = $text.substr(0, indexOf);
            const changer = $text.substr(indexOf, $text.length);
            $replace.push(changer);

            let position = 0;
            let interval = setInterval(() => {
                let $bintext = '';

                if (position === indexOf) {
                    $bintext = bintext(changer.length - 1);
                    showSpan.value = true;
                    nextTick(() => {
                        const spanElement = document.querySelector('.typer span');
                        if (spanElement) {
                            spanElement.innerHTML = $bintext;
                        }
                    });
                } else if (position > indexOf) {
                    $bintext = bintext($text.length - 1);
                    nextTick(() => {
                        const spanElement = document.querySelector('.typer span');
                        if (spanElement) {
                            spanElement.innerHTML =
                                changer.substring(0, position - indexOf) +
                                $bintext.substring(position, $bintext.length);
                        }
                    });
                } else if (position < indexOf) {
                    $bintext = bintext($text.length - 1);
                    nextTick(() => {
                        const spanElement = document.querySelector('.typer span');
                        if (spanElement) {
                            spanElement.innerHTML =
                                normal.substring(0, position) +
                                $bintext.substring(position, $bintext.length);
                        }
                    });
                }

                if (position < $text.length) {
                    position++;
                } else {
                    clearInterval(interval);

                    let index = 0;
                    setInterval(() => {
                        let position = 0;
                        const newText = $replace[index];
                        let changeInterval = setInterval(() => {
                            let $bintext = '';
                            for (let $i = 0; $i <= newText.length - 1; $i++) {
                                $bintext = $bintext + Math.floor(Math.random() * 2);
                            }
                            nextTick(() => {
                                const spanElement = document.querySelector('.typer span');
                                if (spanElement) {
                                    spanElement.innerHTML =
                                        newText.substring(0, position) +
                                        $bintext.substring(position, $bintext.length);
                                }
                            });

                            if (position < $text.length) {
                                position++;
                            } else {
                                clearInterval(changeInterval);
                            }
                        }, $speed);

                        if (index < $replace.length - 1) {
                            index++;
                        } else {
                            index = 0;
                        }
                    }, $delay);
                }
            }, $speed);
        });

        return {
            showSpan,
        };
    },
};
</script>
  
<style>
@font-face {
    font-family: 'uno';
    src: url(../assets/unoestado.ttf);
}

.typer {margin:auto 1rem;
    height: fit-content;
    text-align: left;
    padding-left: 2rem;
    display: inline-block;
    src: url(../assets/unoestado.ttf);
}

.typer {
    color: white;
    font-size: 2rem;
    font-family: 'uno';
}
</style>