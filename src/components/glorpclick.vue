<template>
    <Renderer ref="renderer" resize :pointer="{ onMove: updateTilt }">
        <Camera  :position="{ y: cameraPosition.y, z: cameraPosition.z }" :rotation="{ x: cameraRotation.x, y: cameraRotation.y, z: cameraRotation.z }" />
        <Scene background="#000000">
            <AmbientLight />
            <PointLight ref="light" :position="{ y: lightPosition.y, z: 20 }" />
            <InstancedMesh ref="imesh" @pointerOver="boxOver" @click="boxClick" :count="NUM_INSTANCES" :position="{ y: 20, z: 10 }">
                <SphereGeometry :size="SIZE" />
                <LambertMaterial :color="boxColor" />
            </InstancedMesh>
            <Mesh :geometry="groundPlaneGeometry" :material="groundPlaneMaterial" />
        </Scene>
        <EffectComposer>
            <RenderPass />
            <FXAAPass />
            <BokehPass />
            <UnrealBloomPass :strength="0.3" />
            <TiltShiftPass :gradient-radius="tiltRadius" :start="{ x: 0, y: this.tiltY }" :end="{ x: 100, y: this.tiltY }" />
        </EffectComposer>
    </Renderer>
</template>
  
<script>
import { InstancedBufferAttribute, Object3D, PlaneGeometry, MeshBasicMaterial, Mesh, Vector2, Euler, MathUtils } from 'three';
import {
    AmbientLight,
    SphereGeometry,
    Camera,
    EffectComposer,
    FXAAPass,
    InstancedMesh,
    LambertMaterial,
    PointLight,
    BokehPass,
    Renderer,
    RenderPass,
    Scene,
    UnrealBloomPass,
    TiltShiftPass,
} from 'troisjs';
import SimplexNoise from 'simplex-noise';

const simplex = new SimplexNoise();

export default {
    components: {
        AmbientLight,
        SphereGeometry,
        Camera,
        EffectComposer,
        FXAAPass,
        InstancedMesh,
        LambertMaterial,
        PointLight,
        BokehPass,
        Renderer,
        RenderPass,
        Scene,
        UnrealBloomPass,
        TiltShiftPass,
    },
    setup() {

        const groundPlaneGeometry = new PlaneGeometry(this.W + this.SIZEP, this.H + this.SIZEP);
        const groundPlaneMaterial = new MeshBasicMaterial({
            color: '#ffffff',
            transparent: true,
            opacity: this.groundPlaneOpacity,
            depthTest: false,
        });
        const SIZE = 1.6,
            NX = 50,
            NY = 50,
            PADDING = 10;
        const SIZEP = SIZE + PADDING;
        const W = NX * SIZEP - PADDING;
        const H = NY * SIZEP - PADDING;
        return {
            SIZE,
            NX,
            NY,
            PADDING,
            SIZEP,
            W,
            H,
            groundPlaneGeometry,
            groundPlaneMaterial,
            boxColor: '#ffffff',
            NUM_INSTANCES: NX * NY,
            lightPosition: new Vector2(20, 10),
            cameraPosition: new Vector2(0, -20),
            cameraRotation: new Euler(0, 0, 0),
        };
    },
    data() {
        return {
            tiltRadius: 100,
            tiltY: 100,
        };
    },
    computed: {
        tiltStart() {
            return { x: 0, y: this.tiltY };
        },
        tiltEnd() {
            return { x: 100, y: this.tiltY };
        },
    },
    mounted() {
        this.renderer = this.$refs.renderer;
        this.size = this.renderer.three.size;
        this.imesh = this.$refs.imesh.mesh;
        this.light = this.$refs.light;

        // init color attribute
        const colors = [];
        for (let i = 0; i < this.NUM_INSTANCES; i++) {
            colors.push(255, 0, 0);
        }
        this.imesh.geometry.setAttribute(
            'color',
            new InstancedBufferAttribute(new Float32Array(colors), 3)
        );
        this.createGroundPlane();
        this.tiltRadius = this.size.height / 3;
        this.tiltY = this.size.height / 2;
        this.renderer.onResize(this.updateTilt);

        this.dummy = new Object3D();
        this.renderer.onBeforeRender(this.animate);
    },
    methods: {

        createGroundPlane() {
            this.groundPlane = new Mesh(this.groundPlaneGeometry, this.groundPlaneMaterial);
            this.groundPlane.rotation.x = Math.PI * -0.5;
            this.groundPlane.position.set(0, -150, 0); // Adjust the y position of the ground plane here
            this.$refs.scene.scene.add(this.groundPlane);
        },
        boxOver({ over }) {
            this.boxColor = over ? '#ff0000' : '#ffffff';
        },
        boxClick(e) {
            alert('Click');
            console.log(e);
        },
        animate() {
            this.updateInstanceMatrix();
        },
        updateTilt({ positionN }) {
            this.tiltRadius = this.size.height / 3;
            this.tiltY = (positionN.y + 1) * 0.5 * this.size.height;

            // Update light position
            this.lightPosition.x = (positionN.x + 1) * 0.5 * this.size.width;
            this.lightPosition.y = this.size.height - (positionN.y + 1) * 0.5 * this.size.height;

            // Normalize light position to the range [-1, 1]
            this.lightPosition.x = (this.lightPosition.x / this.size.width) * 2 - 1;
            this.lightPosition.y = (this.lightPosition.y / this.size.height) * 2 - 1;

            // Update light's y and z position based on the mouse position
            this.light.position.y = this.lightPosition.y;
            this.light.position.z = this.lightPosition.x * 20;

            // Update camera's y and z position based on the mouse position
            this.cameraPosition.y = -20 + this.lightPosition.y * 20;
            this.cameraPosition.z = 10 + this.lightPosition.x * 10;

            // Update camera rotation based on the mouse position
            const maxRotation = MathUtils.degToRad(90);
            this.cameraRotation.x = MathUtils.clamp(
                Math.PI * -this.lightPosition.y, -maxRotation,
                maxRotation
            );
            this.cameraRotation.y = MathUtils.clamp(
                Math.PI * -this.lightPosition.x, -maxRotation,
                maxRotation
            );

            // Update camera position and rotation
            this.renderer.camera.position.y = this.cameraPosition.y;
            this.renderer.camera.position.z = this.cameraPosition.z;
            this.renderer.camera.rotation.set(
                this.cameraRotation.x,
                this.cameraRotation.y,
                this.cameraRotation.z
            );
        },
        updateInstanceMatrix() {
            const x0 = -this.W / 2 + this.PADDING;
            const y0 = -this.H / 2 + this.PADDING;
            const time = Date.now() * 0.0001;
            const noise = 0.9;
            let x, y, nx, ny, rx, ry;
            for (let i = 0; i < this.NX; i++) {
                for (let j = 0; j < this.NY; j++) {
                    x = x0 + i * this.SIZEP;
                    y = y0 + j * this.SIZEP;
                    nx = x * noise;
                    ny = y * noise;
                    rx = simplex.noise3D(nx, ny, time) * Math.PI;
                    ry = simplex.noise3D(ny, nx, time) * Math.PI;
                    this.dummy.position.set(x, y, -150);
                    this.dummy.rotation.set(rx, ry, 0);
                    this.dummy.updateMatrix();
                    this.imesh.setMatrixAt(i * this.NY + j, this.dummy.matrix);
                }
            }
            this.imesh.instanceMatrix.needsUpdate = true;
        },
    },
};
</script>
  