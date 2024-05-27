import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // 引入路由配置
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app');
