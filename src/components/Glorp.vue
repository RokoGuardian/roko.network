<template>
  <div class="dot-grid" ref="dotGrid">
    <div class="dot" v-for="(dot, index) in dots" :key="index" :style="dotStyles(dot)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dots: [],
    };
  },
  mounted() {
    this.createDotGrid();
    window.addEventListener("mousemove", this.transformDots);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.transformDots);
  },
  methods: {
    createDotGrid() {
      const gridWidth = Math.floor(window.innerWidth / 128);
      const gridHeight = Math.floor(window.innerHeight / 128);
      const dots = [];

      for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
          dots.push({
            x: x * 128,
            y: y * 128,
          });
        }
      }

      this.dots = dots;
    },
    transformDots(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const maxDisplacement = 10;

      this.dots.forEach((dot, index) => {
        const offsetX = mouseX - centerX;
        const offsetY = mouseY - centerY;

        const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
        const angle = Math.atan2(offsetY, offsetX);

        const displacement = Math.min(maxDisplacement, maxDisplacement * (1 - distance / centerX));

        const newX = centerX + Math.cos(angle) * distance * (displacement / centerX);
        const newY = centerY + Math.sin(angle) * distance * (displacement / centerY);

        this.dots[index] = {
          ...dot,
          x: newX,
          y: newY,
        };
      });
    },
    dotStyles(dot) {
      const depth = Math.max(window.innerWidth, window.innerHeight);
      const transform = `translate3d(${dot.x}px, ${dot.y}px, ${depth}px)`;

      return {
        transform,
      };
    },
  },
};
</script>

<style scoped>
.dot-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  perspective-origin: 50% 50%;
}

.dot {
  position: absolute;
  transition:all 0.2s ease;
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 50%;
  transform-style: preserve-3d;
}
</style>
