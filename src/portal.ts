import {createApp} from 'vue';
import {routes} from './routes';
import initRouter from "./router.ts";
import App from './App.vue';
import Vueform from '@vueform/vueform'
import vueformConfig from '../vueform.config.js'
import Builder from '@vueform/builder'
import builderConfig from '../builder.config'

const app = createApp(App);

const router = initRouter(routes);

app.use(router);
app.use(Vueform, vueformConfig);
app.use(Builder, builderConfig);
app.mount('#app');

