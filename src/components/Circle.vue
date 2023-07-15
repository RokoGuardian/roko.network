<template>
    <div class="circlewrap">
        <div id="dashed-circle-progress">
            <svg class="progress-radial" width="100%" height="100%" viewBox="-4 -4 108 108" shape-rendering="geometricPrecision">
                                                        <defs>
                                                          <mask
                                                            id="circle_mask"
                                                            x="0"
                                                            y="0"
                                                            width="100"
                                                            height="100"
                                                            maskUnits="userSpaceOnUse"
                                                          >
                                                            <circle cx="50" cy="50" r="51" stroke-width="0" fill="black" opacity="1" />
                                                            <circle
                                                              ref="bar"
                                                              r="50"
                                                              cx="50"
                                                              cy="50"
                                                              fill="transparent"
                                                              stroke-dasharray="1"
                                                              stroke-dashoffset="1000"
                                                              stroke="white"
                                                              stroke-width="9"
                                                            ></circle>
                                                            <circle
                                                              class="progress-radial-mask-inner"
                                                              cx="50"
                                                              cy="50"
                                                              r="40"
                                                              stroke-width="0"
                                                              fill="black"
                                                              opacity="1"
                                                            />
                                                          </mask>
                                                        </defs>
                                                        <g mask="url(#circle_mask)">
                                                          <circle class="progress-radial-track" cx="50" cy="50" r="50" opacity="1" fill="transparent"></circle>
                                                          <path class="progress-radial-bar" transform="translate(50, 50)" :d="pathData" fill="white"></path>
                                                        </g>
                                                      </svg>
        </div>
        <div id="dashed-circle-progress-bg">
            <svg class="progress-radial" width="100%" height="100%" viewBox="0 0 100 100" shape-rendering="geometricPrecision">
                                                        <defs>
                                                          <mask
                                                            id="circle_mask"
                                                            x="0"
                                                            y="0"
                                                            width="100"
                                                            height="100"
                                                            maskUnits="userSpaceOnUse"
                                                          >
                                                            <circle cx="50" cy="50" r="51" stroke-width="0" fill="black" opacity="1" />
                                                            <circle
                                                              ref="bar"
                                                              r="50"
                                                              cx="50"
                                                              cy="50"
                                                              fill="transparent"
                                                              stroke-dasharray="1"
                                                              stroke-dashoffset="1000"
                                                              stroke="white"
                                                              stroke-width="9"
                                                            ></circle>
                                                            <circle
                                                              class="progress-radial-mask-inner"
                                                              cx="50"
                                                              cy="50"
                                                              r="40"
                                                              stroke-width="0"
                                                              fill="black"
                                                              opacity="1"
                                                            />
                                                          </mask>
                                                        </defs>
                                                        <g mask="url(#circle_mask)">
                                                          <circle class="progress-radial-track" cx="50" cy="50" r="50" opacity="1" fill="transparent"></circle>
                                                          <path class="progress-radial-bar" transform="translate(50, 50)" :d="pathData" fill="white"></path>
                                                        </g>
                                                      </svg>
        </div>
    </div>
</template>
  
<script>
import { ref, onMounted, computed, watch } from 'vue';
import { TweenMax, Power3 } from 'gsap';

export default {
    setup() {
        const bar = ref(null);
        const percent = 1;
        const speed = 5;
        const props = {
            x: 0
        };

        // Ref for elapsed time
        const elapsedTime = ref(0);

        onMounted(() => {
            startCircularProgress(percent, speed);
        });

        function startCircularProgress(percentage, speed) {
            TweenMax.to(props, speed, {
                x: percentage,
                ease: Power3.easeOut,
                onUpdate: function() {
                    elapsedTime.value += 1; // Increment elapsed time
                    //console.log(props.x);
                    drawProgress(props.x);
                }
            });
        }

        function clamp(n, min, max) {
            return Math.max(min, Math.min(max, n));
        }

        function drawProgress(percent) {
            if (isNaN(percent)) {
                return;
            }

            percent = clamp(parseFloat(percent), 0, 1);

            const angle = clamp(percent * 360, 0, 359.99999);
            const paddedRadius = 50;
            const radians = (angle * Math.PI) / 180;
            const x = Math.sin(radians) * paddedRadius;
            const y = Math.cos(radians) * -paddedRadius;
            const mid = angle > 180 ? 1 : 0;
            const pathData = `M 0 0 v -${paddedRadius} A ${paddedRadius} ${paddedRadius} 1 ${mid} 1 ${x} ${y} z`;
            const totalCircumference = Math.PI * (paddedRadius * 2);
            const dashArray = `${totalCircumference} ${totalCircumference}`;
            const dashOffset = totalCircumference - totalCircumference * percent;

            if (bar.value) {
                bar.value.setAttribute('d', pathData);
            }

            // Update reactive properties
            pathDataValue.value = pathData;
            dashArrayValue.value = dashArray;
            dashOffsetValue.value = dashOffset;
        }

        // Reactive properties
        const pathDataValue = ref('');
        const dashArrayValue = ref('');
        const dashOffsetValue = ref('');
        const barColorValue = ref('white');

        // Watch for elapsed time
        watch(elapsedTime, (newTime) => {
            if (newTime >= 5) {
                barColorValue.value = 'pink';
            }
        });

        // Computed properties
        const pathData = computed(() => `${pathDataValue.value} fill="${barColor.value}"`);
        const dashArray = computed(() => dashArrayValue.value);
        const dashOffset = computed(() => dashOffsetValue.value);
        const barColor = computed(() => barColorValue.value);

        return {
            bar,
            pathData,
            dashArray,
            dashOffset,
            elapsedTime,
        };
    },
};
</script>
  
<style lang="scss">
.circlewrap {
    position: relative;
    display: flex;
    height: auto;
    width: auto;
}

#dashed-circle-progress-bg {
    display: none;
    position: relative;
    height: 100%;
    width: 100%;
    filter: blur(10px);
}

#dashed-circle-progress {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
}

.progress-radial-bar {
    transition: fill 1s;
}
</style>
  