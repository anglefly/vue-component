import { createApp } from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(ElementUI)
  .mount('#app');
