import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { panelScreen } from './lib/ramp.esm'
import App from './App.vue'

import './styles/main.css'
import './lib/ramp.css'
// import { i18n } from './lang'

const app = createApp(App)

app.use(createPinia())
// app.use(i18n())

app.mount('#ramp4-editor')
