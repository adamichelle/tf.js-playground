import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import App from './App.vue';
import router from './router';
import store from './store';

const Router = router({ store });

createApp(App).use(store).use(Router).mount('#app');
