import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTyper from 'vue3-typer'
import AFRAME from 'aframe'
import { TroisJSVuePlugin } from 'troisjs';
import { createNoise2D } from 'simplex-noise';
import { postprocessing } from 'postprocessing';
createApp(App).use(store).use(TroisJSVuePlugin).use(postprocessing).use(createNoise2D).use(AFRAME).use(router).use(VueTyper).mount('#app')
