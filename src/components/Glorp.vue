<template>
    <div ref="container" class="webgl-container">
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js';

export default {
    name: 'WebGLScene',
    setup() {
        const container = ref(null);
        let scene, camera, renderer, particles, lines, grid, composer;
        const particleCount = 100;
        const gravityStrength = 0.00001;
        const thresholdDistance = 22;
        const rotationSpeed = 0.01;
        const acceleration = 0.005;
        let rotateX = 0;
        let rotateY = 0;
        let rotateXTarget = 0;
        let rotateYTarget = 0;
        let isMouseDown = false;

        function createLines() {
            const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff5555 });
            const lineGeometry = new THREE.BufferGeometry();
            const positions = particles.geometry.attributes.position.array;
            const vertices = [];

            for (let i = 0; i < positions.length; i += 3) {
                const x1 = positions[i];
                const y1 = positions[i + 1];
                const z1 = positions[i + 2];

                for (let j = i + 3; j < positions.length; j += 3) {
                    const x2 = positions[j];
                    const y2 = positions[j + 1];
                    const z2 = positions[j + 2];

                    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
                    if (distance < 1) {
                        vertices.push(x1, y1, z1);
                        vertices.push(x2, y2, z2);
                    }
                }
            }

            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            lines = new THREE.LineSegments(lineGeometry, lineMaterial);
            scene.add(lines);
        }

        function updateLines() {
            const lineGeometry = lines.geometry;
            const positions = particles.geometry.attributes.position.array;
            const vertices = [];

            for (let i = 0; i < positions.length; i += 3) {
                const x1 = positions[i];
                const y1 = positions[i + 1];
                const z1 = positions[i + 2];

                for (let j = i + 3; j < positions.length; j += 3) {
                    const x2 = positions[j];
                    const y2 = positions[j + 1];
                    const z2 = positions[j + 2];

                    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
                    if (distance < 1) {
                        vertices.push(x1, y1, z1);
                        vertices.push(x2, y2, z2);
                    }
                }
            }

            lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            lineGeometry.attributes.position.needsUpdate = true;
        }

        function createGrid() {
            const gridMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
            const gridGeometry = new THREE.BufferGeometry();
            const gridSize = 10;
            const divisions = 10;
            const stepSize = gridSize / divisions;
            const vertices = [];

            for (let i = -gridSize; i <= gridSize; i += stepSize) {
                vertices.push(i, 0, -gridSize, i, 0, gridSize);
                vertices.push(-gridSize, 0, i, gridSize, 0, i);
            }

            gridGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            grid = new THREE.LineSegments(gridGeometry, gridMaterial);
            scene.add(grid);
        }

        function createParticles() {
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.01,
                color: 0xff0000,
            });

            const positions = new Float32Array(particleCount * 3);
            const velocities = new Float32Array(particleCount * 3);
            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                positions[i3] = (Math.random() - 0.5) * 10;
                positions[i3 + 1] = (Math.random() - 0.5) * 10;
                positions[i3 + 2] = (Math.random() - 0.5) * 10;
                velocities[i3] = (Math.random() - 0.5) * 0.02;
                velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
                velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            particlesGeometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

            particles = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particles);
        }

        function applyGravity() {
            const positions = particles.geometry.attributes.position.array;

            for (let i = 0; i < positions.length; i += 3) {
                const x1 = positions[i];
                const y1 = positions[i + 1];
                const z1 = positions[i + 2];

                for (let j = i + 3; j < positions.length; j += 3) {
                    const x2 = positions[j];
                    const y2 = positions[j + 1];
                    const z2 = positions[j + 2];

                    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
                    if (distance < thresholdDistance) {
                        const force = gravityStrength / distance;
                        const directionX = (x2 - x1) * force;
                        const directionY = (y2 - y1) * force;
                        const directionZ = (z2 - z1) * force;

                        particles.geometry.attributes.velocity.array[i] += directionX;
                        particles.geometry.attributes.velocity.array[i + 1] += directionY;
                        particles.geometry.attributes.velocity.array[i + 2] += directionZ;

                        particles.geometry.attributes.velocity.array[j] -= directionX;
                        particles.geometry.attributes.velocity.array[j + 1] -= directionY;
                        particles.geometry.attributes.velocity.array[j + 2] -= directionZ;
                    }
                }
            }

            particles.geometry.attributes.velocity.needsUpdate = true;
        }

        function evolveParticles() {
            const positions = particles.geometry.attributes.position.array;
            const newPositions = particles.geometry.attributes.position.array.slice();

            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const y = positions[i + 1];
                const z = positions[i + 2];

                let liveNeighborCount = 0;

                for (let j = 0; j < positions.length; j += 3) {
                    if (i !== j) {
                        const neighborX = positions[j];
                        const neighborY = positions[j + 1];
                        const neighborZ = positions[j + 2];

                        const distance = Math.sqrt((neighborX - x) ** 2 + (neighborY - y) ** 2 + (neighborZ - z) ** 2);
                        if (distance < thresholdDistance) {
                            liveNeighborCount++;
                        }
                    }
                }

                if (liveNeighborCount === 2) {
                    // Cell survives
                    newPositions[i] = x;
                    newPositions[i + 1] = y;
                    newPositions[i + 2] = z;
                } else {
                    // Cell dies or new cell is born
                    newPositions[i] = (Math.random() - 0.5) * 10;
                    newPositions[i + 1] = (Math.random() - 0.5) * 10;
                    newPositions[i + 2] = (Math.random() - 0.5) * 10;
                }
            }

            particles.geometry.attributes.position.array = newPositions;
            particles.geometry.attributes.position.needsUpdate = true;
            updateLines();
        }

        function createGodRaysPass() {
            const godRaysShader = {
                uniforms: {
                    tDiffuse: { value: null },
                    resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                    lightPosition: { value: new THREE.Vector2(0.5, 0.5) },
                },
                vertexShader: `
          varying vec2 vUv;

          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
                fragmentShader: `
          varying vec2 vUv;
          uniform sampler2D tDiffuse;
          uniform vec2 resolution;
          uniform vec2 lightPosition;

          float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
          }

          void main() {
            vec2 uv = vUv;
            vec2 direction = uv - lightPosition;

            float intensity = clamp(1.0 - length(direction), 0.0, 1.0);
            float mask = smoothstep(0.2, 0.3, intensity);

            float rotationAngle = random(floor(uv * resolution));
            float sinAngle = sin(rotationAngle);
            float cosAngle = cos(rotationAngle);
            direction = vec2(
              cosAngle * direction.x - sinAngle * direction.y,
              sinAngle * direction.x + cosAngle * direction.y
            );
            direction *= 0.06 / intensity;

            vec4 godRayColor = texture2D(tDiffuse, uv + direction * 0.2);

            // Calculate the shadow-like haze in the opposite direction
            vec2 oppositeDirection = -direction;
            vec4 hazeColor = texture2D(tDiffuse, uv + oppositeDirection * 0.1);

            // Apply the god rays and haze
            vec4 color = godRayColor * intensity * mask + hazeColor * (1.0 - intensity);

            gl_FragColor = color;
          }
        `,
            };

            const godRaysPass = new ShaderPass(godRaysShader);
            godRaysPass.uniforms.tDiffuse.value = null;

            return godRaysPass;
        }

        function handleMouseMove(event) {
            const { clientX, clientY } = event;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const mouseX = clientX - centerX;
            const mouseY = clientY - centerY;
            const angleX = (mouseY / centerY) * Math.PI * 0.5;
            const angleY = (mouseX / centerX) * Math.PI * 0.5;

            // Update the rotation target only if the mouse button is not pressed
            if (!isMouseDown) {
                rotateXTarget = angleX;
                rotateYTarget = angleY;
            }
        }

        function handleMouseDown() {
            isMouseDown = true;
        }

        function handleMouseUp() {
            isMouseDown = false;
        }

        onMounted(() => {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 0);
            scene.add(camera);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.outputEncoding = THREE.sRGBEncoding;

            if (container.value) {
                container.value.appendChild(renderer.domElement);
            }

            createParticles();
            createLines();
            createGrid();

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mousedown', handleMouseDown);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('mouseout', handleMouseUp);

            composer = new EffectComposer(renderer);
            const renderPass = new RenderPass(scene, camera);
            composer.addPass(renderPass);

            const bloomPass = new UnrealBloomPass();
            bloomPass.strength = 0.1;
            bloomPass.radius = 0.2;
            bloomPass.threshold = 0.1;
            composer.addPass(bloomPass);

            const godRaysPass = createGodRaysPass();
            composer.addPass(godRaysPass);

            const copyPass = new ShaderPass(CopyShader);
            copyPass.renderToScreen = true;
            composer.addPass(copyPass);

            const animate = () => {
                requestAnimationFrame(animate);

                const rotateXDelta = rotateXTarget - rotateX;
                const rotateYDelta = rotateYTarget - rotateY;

                rotateX += rotateXDelta * acceleration;
                rotateY += rotateYDelta * acceleration;

                rotateX = Math.max(-Math.PI * 0.25, Math.min(Math.PI * 0.25, rotateX));

                camera.position.x = Math.sin(rotateY) * Math.cos(rotateX) * 5;
                camera.position.y += (-rotateX - camera.position.y) * 0.05;
                camera.position.z = Math.cos(rotateY) * Math.cos(rotateX) * 5;

                camera.lookAt(scene.position);

                applyGravity();
                evolveParticles();

                particles.rotation.x += rotationSpeed;
                particles.rotation.y += rotationSpeed;

                composer.render();
            };

            animate();
        });

        onUnmounted(() => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseout', handleMouseUp);
            // Clean up code if needed
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
