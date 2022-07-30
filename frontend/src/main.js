import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import router from './router'

const appInstance = createApp(App);
appInstance.use(router);
appInstance.mount('#app');
