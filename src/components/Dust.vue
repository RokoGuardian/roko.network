<template>
  <div>
    <a-scene>
      <!-- Skybox -->
      <a-sky material="shader: gradient; topColor: #FFE9AA; bottomColor: #FFC35C;"></a-sky>

      <!-- Dust particles -->
      <a-entity particle-system></a-entity>

      <!-- Plane -->
      <a-entity position="0 0 -4" ref="buttonPanel">
        <a-plane rotation="-45 0 0" width="4" height="4" color="#D4AF37"></a-plane>
        <a-entity position="-1.5 1.5 0">
          <!-- Buttons -->
          <a-entity v-for="button in buttons" :key="button.id">
            <a-box :position="button.position" :color="button.color" @click="handleButtonClick(button)"></a-box>
          </a-entity>
        </a-entity>
      </a-entity>

      <!-- Camera and controls -->
      <a-entity camera look-controls></a-entity>

      <!-- Bloom pass -->
      <a-entity effect-bloom></a-entity>

      <!-- Depth of field pass -->
      <a-entity effect-depth-of-field></a-entity>

      <!-- Laser input UI scene -->
      <a-entity position="0 0 0">
        <a-entity id="leftHand" laser-controls="hand: left" raycaster="objects: .raycastable"></a-entity>
        <a-entity id="rightHand" laser-controls="hand: right" raycaster="objects: .raycastable" line="color: #118A7E"></a-entity>

        <a-entity id="ui" position="0 0 0">
          <!-- Poster menu -->
          <a-entity id="menu" highlight>
            <a-entity id="karigurashiButton" position="-0.8 0 0" mixin="frame" class="raycastable menu-button">
              <a-entity material="src: #karigurashiPoster;" mixin="poster"></a-entity>
            </a-entity>

            <a-entity id="kazetachinuButton" position="0 0 0" mixin="frame" class="raycastable menu-button">
              <a-entity material="src: #kazetachinuPoster" mixin="poster"></a-entity>
            </a-entity>

            <a-entity id="ponyoButton" position="0.8 0 0" mixin="frame" class="raycastable menu-button">
              <a-entity material="src: #ponyoPoster" mixin="poster"></a-entity>
            </a-entity>
          </a-entity>

          <!-- Info panel of the selected movie. -->
          <a-entity
            id="infoPanel"
            position="0 0 0.5"
            info-panel
            visible="false"
            scale="0.001 0.001 0.001"
            geometry="primitive: plane; width: 1.5; height: 1.8"
            material="color: #333333; shader: flat; transparent: false" class="raycastable">
            <a-entity id="ponyoMovieImage" mixin="movieImage" material="src: #ponyo" visible="false"></a-entity>
            <a-entity id="kazetachinuMovieImage" mixin="movieImage" material="src: #kazetachinu" visible="false"></a-entity>
            <a-entity id="karigurashiMovieImage" mixin="movieImage" material="src: #karigurashi" visible="false"></a-entity>
            <a-entity id="movieTitle"
              position="-0.68 -0.1 0"
              text="shader: msdf; anchor: left; width: 1.5; font: https://cdn.aframe.io/examples/ui/Viga-Regular.json; color: white; value: Ponyo (2003)"></a-entity>
            <a-entity id="movieDescription"
              position="-0.68 -0.2 0"
              text="baseline: top; shader: msdf; anchor: left; font: https://cdn.aframe.io/examples/ui/Viga-Regular.json; color: white; value: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></a-entity>
          </a-entity>
        </a-entity>
      </a-entity>
    </a-scene>
  </div>
</template>

<script>
import { ref } from 'vue';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass';
import AFRAME from 'aframe';

export default {
  mounted() {
    // Register particle system component
    AFRAME.registerComponent('particle-system', {
      init: function () {
        const el = this.el;

        // Create particles
        for (let i = 0; i < 500; i++) {
          const particle = document.createElement('a-sphere');
          particle.setAttribute('radius', Math.random() * 0.01);
          particle.setAttribute('position', `${Math.random() * 6 - 3} ${Math.random() * 6 - 3} ${Math.random() * -10}`);
          particle.setAttribute('animation', `property: position; dir: alternate; dur: ${Math.random() * 2000 + 2000}; easing: linear; loop: true; to: ${Math.random() * 6 - 3} ${Math.random() * 6 - 3} ${Math.random() * -10}`);
          el.appendChild(particle);
        }
      },
    });

    // Initialize the bloom effect and depth of field effect
    this.initPostProcessing();
  },
  methods: {
    initPostProcessing() {
      const sceneEl = this.$el.querySelector('a-scene');

      // Create the renderer and set its size
      const renderer = sceneEl.renderer;
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Create the composer
      const composer = new EffectComposer(renderer);
      composer.setSize(window.innerWidth, window.innerHeight);

      // Create the passes
      const renderPass = new RenderPass(sceneEl.object3D, sceneEl.camera);
      composer.addPass(renderPass);

      const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
      composer.addPass(bloomPass);

      const bokehPass = new BokehPass(sceneEl.object3D, sceneEl.camera, {
        focus: 1.0,
        aperture: 0.025,
        maxblur: 0.01,
      });
      composer.addPass(bokehPass);

      // Set the composer to the scene's renderer
      sceneEl.renderer = composer;
    },
    handleButtonClick(button) {
      button.color = button.color === 'red' ? 'blue' : 'red';
    },
  },
  setup() {
    // Button positions and colors
    const buttons = ref([
      { id: 1, position: "-1 1 0", color: '#fff' },
      { id: 2, position: "0 1 0", color: '#ffe' },
      { id: 3, position: "1 1 0", color: '#ffd' },
      { id: 4, position: "-1 0 0", color: '#ffc' },
      { id: 5, position: "0 0 0", color: '#ffb' },
      { id: 6, position: "1 0 0", color: '#ffa' },
      { id: 7, position: "-1 -1 0", color: '#ff9' },
      { id: 8, position: "0 -1 0", color: '#ff8' },
      { id: 9, position: "1 -1 0", color: '#ff7' },
    ]);

    return {
      buttons,
    };
  },
};
</script>

<style>
a-scene {
  width: 100%;
  height: 100%;
}

.clickable {
  cursor: pointer;
}

.raycastable {
  raycaster-enabled: true;
}
</style>
