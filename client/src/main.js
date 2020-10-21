import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

const vueSocketIO = new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:3000', {}),
});

const app = createApp(App)
app.use(vueSocketIO)
app.use(router)
app.mount('#app')
