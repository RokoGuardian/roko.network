import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTyper from 'vue3-typer'
import AFRAME from 'aframe'
import { TroisJSVuePlugin } from 'troisjs';
import { createNoise2D } from 'simplex-noise';
import slider from "vue3-slider"
require('aframe-physics-system');
require('aframe-environment-component');
createApp(App).use(store).use(slider).use(TroisJSVuePlugin).use(createNoise2D).use(AFRAME).use(router).use(VueTyper).mount('#app')
