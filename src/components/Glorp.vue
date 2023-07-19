<template>
    <Renderer @mouseover="onMouseMove" ref="renderer" antialias :orbit-ctrl="{
                autoRotate: false,
                enableDamping: true,
                target,
                minPolarAngle: -Math.PI / 3,  // Limit vertical rotation to -30 degrees
                maxPolarAngle: Math.PI / 1.8,   // Limit vertical rotation to 30 degrees
                minAzimuthAngle: -Math.PI / 3,  // Limit horizontal rotation to -90 degrees
                maxAzimuthAngle: Math.PI / 3,   // Limit horizontal rotation to 90 degrees
                minDistance: 300,   // Limit the maximum zoom to a distance of 300 units
                maxDistance: 600   // Limit the maximum zoom to a distance of 300 units
              }" resize shadow>
        <Camera :position="{ x: 0, y: 220, z: 400 }" :lookAt="Group" />
        <Scene ref="scene" background="#AAAAAA">
            <HemisphereLight />
    
            <DirectionalLight :position="{ x: 50, y: 50, z: 100 }" cast-shadow :shadow-camera="{ top: 180, bottom: -120, left: -120, right: 120 }" />
    
            <Plane :position="{ x: 0, y: -50, z: 0 }" :width="2000" :height="2000" :rotation="{  x: -Math.PI / 2 }" receive-shadow>
                <PhongMaterial color="#555" :props="{ depthWrite: false }" />
            </Plane>
    
    
            <Torus :tube="1" :arc="6.283185307179586" :radius="100" :radialSegments="2" :tubularSegments="3" :scale="{ x: scale2, y: scale2, z: scale2 }" :rotation="{ x: arc, y: arc,  z: -Math.PI / 2 }" :position="{ x: 0, y: 130, z: 40 }" cast-shadow="true" receive-shadow>
                <PhongMaterial color="#000000" :props="{ depthWrite: true }" />
            </Torus>
    
    
            <Torus :tube="2" :arc="6.283185307179586" :radius="100" :radialSegments="2" :tubularSegments="3" :scale="{ x:scale1, y: scale1, z: scale1}" :rotation="{ x: -arc , y: arc * 1.5,  z: -Math.PI / 2 }" :position="{ x: 0, y: 130, z: -40 }" cast-shadow="true"
                receive-shadow>
                <PhongMaterial :color="boxColor3" :props="{ depthWrite: true }" />
            </Torus>
    
            <Torus :tube="3" :arc="6.283185307179586" :radialSegments="2" :radius="130" :tubularSegments="seg" :scale="{ x: 1.2, y: 1.2, z: 1.2 }" :rotation="{ x: mouseY / arc / 100,  y: mouseX / arc / 100, z: -Math.PI / 2 }" :position="{ x: 0, y: 130, z: 0 }" cast-shadow="true"
                receive-shadow>
                <PhongMaterial :color="boxColor6" opacity="0.5" :props="{ depthWrite: true }" />
            </Torus>
            <Group :ref="group" :position="{x: 0, y: 150, z: 0 }" :rotation="groupRotation">
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
            <Group :ref="group" :position="{x: 0, y: 150, z: -120 }" :rotation="groupRotation">
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
    
            <Text @pointerOver="boxOver1" @click="boxClick" text="R" font-src="/poppins.json" align="center" :size="30" :height="10" :position="{ x: -60, y: 140, z: 0 }" :cast-shadow="false">
                                <PhongMaterial :color="boxColor1"  />
                                </Text>
            <Text @pointerOver="boxOver2" @click="boxClick" text="O" font-src="/poppins.json" align="center" :size="30" :height="10" :position="{ x: -20, y: 140, z: 0 }" :cast-shadow="false">
                                <PhongMaterial :color="boxColor2"  />
                                </Text>
            <Text @pointerOver="boxOver3" @click="boxClick" text="K" font-src="/poppins.json" align="center" :size="30" :height="10" :position="{ x: 20, y: 140, z: 0 }" :cast-shadow="false">
                                <PhongMaterial :color="boxColor3"  />
                                </Text>
            <Text @pointerOver="boxOver4" @click="boxClick" text="O" font-src="/poppins.json" align="center" :size="30" :height="10" :position="{ x: 60, y: 140, z: 0 }" :cast-shadow="false">
                                <PhongMaterial :color="boxColor4"  />
                                </Text>
            <Text @pointerOver="boxOver4" @click="boxClick" text="N  E  T  W  O  R  K" font-src="/poppins.json" align="center" :size="13" :height="10" :position="{ x: 0, y: 110, z: 0 }" :cast-shadow="false">
                                <PhongMaterial :color="boxColor4"  />
                                </Text>
            <VRButton class="vr" ref="vrbutton" />
        </Scene>
        <EffectComposer>
            <RenderPass />
            <FXAAPass />
            <UnrealBloomPass :radius="0.005" :strength="0.5" />
            <GlitchPass :mode="1" :dtSize="33" :dtInterval="3000" :dtThreshold="0.9" />
            <ZoomBlurPass :strength="0.0001" :center="{ x: -mouseX  / 4, y: mouseY / 4 }" />
    
        </EffectComposer>
    </Renderer>
</template>
  
<script>
// Model from mixamo.com
import { AnimationMixer, Clock, Fog, GridHelper, Vector3, IcosahedronGeometry, LineSegments, WireframeGeometry, } from 'three';
import {
    Camera,
    Torus,
    DirectionalLight,
    HemisphereLight,
    Renderer,
    PhongMaterial,
    Plane,
    ZoomBlurPass,
    Scene,
    EffectComposer,
    RenderPass,
    FXAAPass,
    Text,
    UnrealBloomPass,
} from 'troisjs';
import VRButton from 'troisjs/src/components/misc/VRButton.vue'
import { GlitchPass } from 'postprocessing';

export default {
    components: {
        Camera,
        Torus,
        DirectionalLight,
        HemisphereLight,
        Renderer,
        PhongMaterial,
        Plane,
        ZoomBlurPass,
        Scene,
        EffectComposer,
        RenderPass,
        FXAAPass,
        GlitchPass,
        Text,
        UnrealBloomPass,
        VRButton
    },
    data() {
        return {
            target: new Vector3(0, 130, 0),
            boxColor1: '#000000',
            boxColor2: '#000000',
            boxColor3: '#000000',
            boxColor4: '#000000',
            boxColor6: '#000000',
            scale2: 1,
            seg: 3,
            rotationAngle: 0,
            rotationSpeed: 0.002,
            arc: 0,
            mouseX: 0,
            mouseY: 0,
            maxHorizontalRotation: 90,
            maxVerticalRotation: 30
        };
    },
    mounted() {
        // Check if device orientation is supported
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', this.windowDeviceOrientationHandler);
        }

        // Check if device motion is supported
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', this.windowDeviceMotionHandler);
        }
        document.addEventListener('mousemove', this.onMouseMove);

        this.$refs.vrbutton.init(this.$refs.renderer.renderer)
        const scene = this.$refs.scene.scene;
        scene.fog = new Fog(0xAAAAAA, 200, 1000);

        const grid = new GridHelper(2000, 20, 0x000000, 0x000000);
        grid.material.opacity = 0.5;
        grid.position.y = -50; // Set the y position to -200 units
        grid.material.transparent = true;
        this.$refs.scene.add(grid);
        const renderer = this.$refs.renderer;
        renderer.onBeforeRender(() => {
            const time = Date.now() * 0.001;
            const d = 100;
            this.rotationAngle = Math.sin(time * 0.1) * d;
            this.arc = Math.sin(time * 0.1) * d / 6.283185307179586;




        });
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
        windowDeviceOrientationHandler(event) {
            // Update the orientation based on the device's alpha, beta, and gamma values
            // Adjust the values as needed to match your desired effect
            //const alpha = event.alpha || 0;
            const beta = event.beta || 0;
            const gamma = event.gamma || 0;

            // Calculate the adjusted mouseX and mouseY values based on device orientation
            const adjustedMouseX = Math.max(Math.min((beta - 90) * 2, this.maxHorizontalRotation), -this.maxHorizontalRotation);
            const adjustedMouseY = Math.max(Math.min((gamma - 90) * 2, this.maxVerticalRotation), -this.maxVerticalRotation);

            this.mouseX = adjustedMouseX;
            this.mouseY = adjustedMouseY;
        },

        windowDeviceMotionHandler(event) {
            // Update the acceleration based on the device's acceleration values
            // Adjust the values as needed to match your desired effect
            const accelerationX = event.accelerationIncludingGravity.x || 0;
            const accelerationY = event.accelerationIncludingGravity.y || 0;
            //const accelerationZ = event.accelerationIncludingGravity.z || 0;

            // Calculate the adjusted mouseX and mouseY values based on device acceleration
            const adjustedMouseX = Math.max(Math.min(accelerationX * 2, this.maxHorizontalRotation), -this.maxHorizontalRotation);
            const adjustedMouseY = Math.max(Math.min(accelerationY * 2, this.maxVerticalRotation), -this.maxVerticalRotation);


            this.mouseX = adjustedMouseX;
            this.mouseY = adjustedMouseY;
        },
        boxOver1({ over }) {
            this.boxColor1 = over ? '#333333' : '#000000';
            this.boxColor6 = over ? '#333333' : '#000000';
        },
        boxOver2({ over }) {
            this.boxColor2 = over ? '#333333' : '#000000';
        },
        boxOver3({ over }) {
            this.boxColor3 = over ? '#333333' : '#000000';
            this.boxColor6 = over ? '#333333' : '#000000';
        },
        boxOver4({ over }) {
            this.boxColor4 = over ? '#333333' : '#000000';
        },

        boxClick(e) {
            //alert('Click');
            this.rotationAngle += Math.PI / 2;
            this.scale2 = 1.2;
            this.scale1 = 1;
            this.seg++;

            // Delay before restarting the animation
            setTimeout(() => {
                this.stopAnimation = false;
                this.animateRotation();
            }, 1000); // Adjust the delay time as desired
            console.log(e);
            this.rotateGroupElement();

        },
        onMouseMove(event) {
            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;
            const mouseX = (event.clientX - windowHalfX) * 0.5;
            const mouseY = (event.clientY - windowHalfY) * 0.5;

            // Apply range limits to mouseX and mouseY
            this.mouseX = Math.max(Math.min(mouseX, this.maxHorizontalRotation), -this.maxHorizontalRotation);
            this.mouseY = Math.max(Math.min(mouseY, this.maxVerticalRotation), -this.maxVerticalRotation);
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@font-face {
    font-family: 'uno';
    src: url(../assets/unoestado.ttf);
}

.vr {
    width: 200px !important;
    left: unset !important;
    right: 20px;
    box-shadow: 0px 0px 10px;
    text-shadow: 0px 0px 10px;
    padding: 8px 8px !important;
    font-weight: 400;
    font-family: 'Poppins', sans-serif !important;
    border-radius: unset !important;
    border-width: 3px !important;
}
</style>