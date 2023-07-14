<template>
  <div ref="container" class="webgl-container"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

export default {
  name: 'WebGLScene',
  setup() {
    const container = ref(null);
    let scene, camera, renderer, particles;

    onMounted(() => {
      // Initialize the scene
      scene = new THREE.Scene();

      // Create the camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Create the renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.value.appendChild(renderer.domElement);

      // Create particles
      const particleCount = 500;
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.01, // Adjust the size of the particles
        color: 0xffffff,
      });

      const positions = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 10;
        positions[i3 + 1] = (Math.random() - 0.5) * 10;
        positions[i3 + 2] = (Math.random() - 0.5) * 10;
        velocities[i3] = (Math.random() - 0.5) * 0.02; // Random velocity on x-axis
        velocities[i3 + 1] = (Math.random() - 0.5) * 0.02; // Random velocity on y-axis
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.02; // Random velocity on z-axis
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particlesGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

      particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.001;

        const positions = particles.geometry.attributes.position.array;
        const velocities = particles.geometry.attributes.velocity.array;

        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += velocities[i];
          positions[i + 1] += velocities[i + 1];
          positions[i + 2] += velocities[i + 2];

          // Reset position if the particle goes out of bounds
          if (
            positions[i] < -10 ||
            positions[i] > 10 ||
            positions[i + 1] < -10 ||
            positions[i + 1] > 10 ||
            positions[i + 2] < -10 ||
            positions[i + 2] > 10
          ) {
            positions[i] = (Math.random() - 0.5) * 10;
            positions[i + 1] = (Math.random() - 0.5) * 10;
            positions[i + 2] = (Math.random() - 0.5) * 10;
          }
        }

        particles.geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      };

      animate();
    });

    onUnmounted(() => {
      container.value.removeChild(renderer.domElement);
      renderer.dispose();
    });

    return { container };
  },
};
</script>

<style scoped>
.webgl-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
