import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./routes/router"

// Vue app instance
const app = createApp(App)
app.use(router)
app.mount('#app')