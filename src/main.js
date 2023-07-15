import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTyper from 'vue3-typer'
import AFRAME from 'aframe'
createApp(App).use(store).use(AFRAME).use(router).use(VueTyper).mount('#app')
