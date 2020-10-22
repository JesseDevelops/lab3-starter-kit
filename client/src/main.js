import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';

export const SocketInstance = socketio('http://localhost:3000');

createApp(App).use(VueSocketIO, SocketInstance, router).mount('#app')
