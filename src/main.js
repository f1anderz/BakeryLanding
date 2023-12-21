import {createApp} from 'vue'
import App from './App.vue'
import LandingPage from "@/components/LandingPage.vue";

const app = createApp(App);

app.mount('#app');

app.component('LandingPage', LandingPage);
