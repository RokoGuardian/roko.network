<template>
    <Renderer @mouseover="onMouseMove" ref="renderer" antialias :orbit-ctrl="{ enableDamping: true, target }" resize shadow>
        <Camera :position="{ x: 100, y: 200, z: 300 }" :lookAt="{x: 10}" />
        <Scene ref="scene" background="#555555">
            <HemisphereLight />
    
            <DirectionalLight :position="{ x: 50, y: 50, z: 100 }" cast-shadow :shadow-camera="{ top: 180, bottom: -120, left: -120, right: 120 }" />
    
            <Plane :width="2000" :height="2000" :rotation="{ x: -Math.PI / 2 }" receive-shadow>
                <PhongMaterial color="#555" :props="{ depthWrite: false }" />
            </Plane>
    
    
            <Torus :arc="6.283185307179586" :radius="100" :tubularSegments="3" :scale="{ x: scale2, y: scale2, z: scale2 }" :rotation="{ z: -Math.PI / 2 }" :position="{ x: 0, y: 150, z: 40 }" cast-shadow="true" receive-shadow>
                <PhongMaterial color="#ff0000" :props="{ depthWrite: true }" />
            </Torus>
    
            <Torus style="transition:all 0.5s ease;" :arc="6.283185307179586" :radius="100" :tubularSegments="3" :scale="{ x:scale1, y: scale1, z: scale1}" :rotation="{ z: -Math.PI / 2 }" :position="{ x: 0, y: 150, z: 80 }" cast-shadow="true" receive-shadow>
                <PhongMaterial :color="boxColor3" opacity="0.5" :props="{ depthWrite: true }" />
            </Torus>
    
            <Torus style="transition:all 0.5s ease;" :arc="6.283185307179586" :radius="100" :tubularSegments="seg" :scale="{ x: 1.2, y: 1.2, z: 1.2 }" :rotation="{ z: -Math.PI / 2 }" :position="{ x: 0, y: 150, z: 60 }" cast-shadow="true" receive-shadow>
                <PhongMaterial :color="boxColor3" opacity="0.5" :props="{ depthWrite: true }" />
            </Torus>
            <Group :position="{x: 0, y: 150, z: 60 }" :rotation="groupRotation">
                <Icosahedron @pointerOver="boxOver1" @click="boxClick" :detail="3" :radius="1" :tubularSegments="3" :scale="{ x: 1, y: 1, z: 1 }" :rotation="{ z: -Math.PI / 2 }" :position="{ x: -60, y: 35, z: 60 }" cast-shadow="true" receive-shadow>
                    <PhongMaterial :color="boxColor1" opacity="0.5" :props="{ depthWrite: true }" />
                </Icosahedron>
                <Icosahedron @pointerOver="boxOver2" @click="boxClick" :detail="3" :radius="1" :tubularSegments="3" :scale="{ x: 1, y: 1, z: 1 }" :rotation="{ z: -Math.PI / 2 }" :position="{ x: 60, y: 35, z: 60 }" cast-shadow="true" receive-shadow>
                    <PhongMaterial :color="boxColor2" opacity="0.5" :props="{ depthWrite: true }" />
                </Icosahedron>
                <Icosahedron @pointerOver="boxOver3" @click="boxClick" :detail="3" :radius="1" :tubularSegments="3" :scale="{ x: 1, y: 1, z: 1 }" :rotation="{ z: -Math.PI / 2 }" :position="{ x: 0, y: 0, z: 60 }" cast-shadow="true" receive-shadow>
                    <PhongMaterial :color="boxColor3" opacity="0.5" :props="{ depthWrite: true }" />
                </Icosahedron>
                <Icosahedron @pointerOver="boxOver4" @click="boxClick" :detail="3" :radius="1" :tubularSegments="3" :scale="{ x: 1, y: 1, z: 1 }" :rotation="{ z: -Math.PI / 2 }" :position="{ x: 0, y: -70, z: 60 }" cast-shadow="true" receive-shadow>
                    <PhongMaterial :color="boxColor4" opacity="0.5" :props="{ depthWrite: true }" />
                </Icosahedron>
    
            </Group>
    
            <Text @pointerOver="boxOver1" @click="boxClick" text="R" font-src="/UnoEstado_Regular.json" align="center" :size="30" :height="5" :position="{ x: -60, y: 140, z: seg }" :cast-shadow="true">
                                                                                                                                            <PhongMaterial :color="boxColor1"  />
                                                                                                                                          </Text>
            <Text @pointerOver="boxOver2" @click="boxClick" text="O" font-src="/UnoEstado_Regular.json" align="center" :size="30" :height="5" :position="{ x: -20, y: 140, z: seg }" :cast-shadow="true">
                                                                                                                                            <PhongMaterial :color="boxColor2"  />
                                                                                                                                          </Text>
            <Text @pointerOver="boxOver3" @click="boxClick" text="K" font-src="/UnoEstado_Regular.json" align="center" :size="30" :height="5" :position="{ x: 20, y: 140, z: seg }" :cast-shadow="true">
                                                                                                                                            <PhongMaterial :color="boxColor3"  />
                                                                                                                                          </Text>
            <Text @pointerOver="boxOver4" @click="boxClick" text="O" font-src="/UnoEstado_Regular.json" align="center" :size="30" :height="5" :position="{ x: 60, y: 140, z: seg }" :cast-shadow="true">
                                                                                                                                        <PhongMaterial :color="boxColor4"  />
                                                                                                                                      </Text>
            <VRButton class="vr" ref="vrbutton" />
        </Scene>
        <EffectComposer>
            <RenderPass />
            <SMAAPass />
            <HalftonePass :radius="1" :scatter="0.15" />
            <UnrealBloomPass :strength="0.12" />
        </EffectComposer>
    </Renderer>
</template>
  
<script>
// Model from mixamo.com
import { AnimationMixer, Clock, Fog, GridHelper, Vector3, IcosahedronGeometry, LineSegments, WireframeGeometry } from 'three';
import {
    Camera,
    Torus,
    DirectionalLight,
    HemisphereLight,
    Renderer,
    PhongMaterial,
    Plane,
    Scene,
    EffectComposer,
    RenderPass,
    SMAAPass,
    HalftonePass,
    Text,
    UnrealBloomPass,
} from 'troisjs';
import VRButton from 'troisjs/src/components/misc/VRButton.vue'

export default {
    components: {
        Camera,
        Torus,
        DirectionalLight,
        HemisphereLight,
        Renderer,
        PhongMaterial,
        Plane,
        Scene,
        EffectComposer,
        RenderPass,
        SMAAPass,
        Text,
        HalftonePass,
        UnrealBloomPass,
        VRButton
    },
    data() {
        return {
            target: new Vector3(0, 100, 0),
            boxColor1: '#ffffff',
            boxColor2: '#ffffff',
            boxColor3: '#ffffff',
            boxColor4: '#ffffff',
            scale2: 1,
            seg: 3,
            rotationAngle: 0,
        };
    },
    mounted() {
        document.addEventListener('mousemove', this.onMouseMove);

        this.$refs.vrbutton.init(this.$refs.renderer.renderer)
        const scene = this.$refs.scene.scene;
        scene.fog = new Fog(0x555555, 200, 1000);

        const grid = new GridHelper(2000, 20, 0x000000, 0x000000);
        grid.material.opacity = 0.25;
        grid.material.transparent = true;
        this.$refs.scene.add(grid);
    },
    computed: {
        wireframe() {
            const icosahedronGeometry = new IcosahedronGeometry(40, 3);
            const wireframeGeometry = new WireframeGeometry(icosahedronGeometry);
            return new LineSegments(wireframeGeometry);
        },
        groupRotation() {
            return { z: this.rotationAngle };
        },
    },
    methods: {
        boxOver1({ over }) {
            this.boxColor1 = over ? '#ff0000' : '#ffffff';
        },
        boxOver2({ over }) {
            this.boxColor2 = over ? '#ff0000' : '#ffffff';
        },
        boxOver3({ over }) {
            this.boxColor3 = over ? '#ff0000' : '#ffffff';
        },
        boxOver4({ over }) {
            this.boxColor4 = over ? '#ff0000' : '#ffffff';
        },
        animateRotation() {
            const groupElement = this.$refs.group.$el;

            // Set initial rotation angle
            let rotationAngle = 0;

            const updateRotation = () => {
                groupElement.style.transform = `rotateZ(${rotationAngle}rad)`;
            };

            const animate = (timestamp) => {
                const rotationSpeed = 0.002; // Adjust the rotation speed as desired

                // Calculate rotation angle based on time
                rotationAngle = rotationSpeed * timestamp;

                updateRotation();

                // Continue animation until stopped
                if (!this.stopAnimation) {
                    requestAnimationFrame(animate);
                }
            };

            // Start animation
            this.stopAnimation = false;
            requestAnimationFrame(animate);
        },
        boxClick(e) {
            //alert('Click');
            this.rotationAngle += Math.PI / 2;
            this.scale2 = 1.2;
            this.scale1 = 1;
            this.seg++;this.stopAnimation = true;

      // Delay before restarting the animation
      setTimeout(() => {
        this.stopAnimation = false;
        this.animateRotation();
      }, 1000); // Adjust the delay time as desired
            console.log(e);

        },
        onMouseMove(event) {
            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;
            const mouseX = event.clientX - windowHalfX;
            const mouseY = event.clientY - windowHalfY;

            // Adjust camera position based on mouse position
            const cameraPosition = this.$refs.camera.position;
            cameraPosition.x = mouseX * 0.5;
            cameraPosition.y = mouseY * 0.5;
            cameraPosition.z = 300;
        },
        onLoad(object) {
            this.mixer = new AnimationMixer(object);
            const action = this.mixer.clipAction(object.animations[0]);
            action.play();

            object.traverse(function(child) {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            this.clock = new Clock();
            this.$refs.renderer.onBeforeRender(this.updateMixer);
        },
        updateMixer() {
            this.mixer.update(this.clock.getDelta());
        },
    },
};
</script>
  

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Space+Mono:wght@400;700&display=swap');
@font-face {
    font-family: 'uno';
    src: url(../assets/unoestado.ttf);
}

.vr {
    width: 210px !important;
    left: unset !important;
    right: 20px;
    padding: 8px 8px !important;
    font-family: 'uno' !important;
    border-radius: unset !important;
    border-width: 3px !important;
}
</style>