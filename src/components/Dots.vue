<template>
    <div class="dot-grid" ref="dotGrid">
      <div
        class="dot"
        v-for="(dot, index) in dots"
        :key="index"
        :style="{ transform: `translate(${dot.x}px, ${dot.y}px) rotate(${rotateAngle}deg)` }"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dots: [],
        rotateAngle: 0,
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
        const gridWidth = Math.floor(window.innerWidth / 100);
        const gridHeight = Math.floor(window.innerHeight / 100);
        const dots = [];
  
        for (let x = 0; x < gridWidth; x++) {
          for (let y = 0; y < gridHeight; y++) {
            dots.push({
              x: x * 110,
              y: y * 110,
              originalX: x * 128,
              originalY: y * 128,
            });
          }
        }
  
        this.dots = dots;
      },
      transformDots(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
  
        this.dots.forEach((dot, index) => {
          const offsetX = mouseX - dot.x;
          const offsetY = mouseY - dot.y;
          const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
  
          const maxDistance = 100;
          const maxDisplacement = 10;
          const snapDistance = 300;
  
          if (distance < maxDistance) {
            const displacementX = offsetX * (maxDisplacement / maxDistance);
            const displacementY = offsetY * (maxDisplacement / maxDistance);
  
            this.dots[index] = {
              ...dot,
              x: dot.originalX + displacementX,
              y: dot.originalY + displacementY,
            };
          } else if (distance >= snapDistance) {
            this.dots[index] = {
              ...dot,
              x: dot.originalX,
              y: dot.originalY,
            };
          }
        });
  
        this.rotateAngle = (mouseX / window.innerWidth) * 360;
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
  }
  
  .dot {
    position: absolute;
    width: 2px;
    height: 2px;
    background-color: #ffffff;
    border-radius: 50%;
  }
  </style>
  