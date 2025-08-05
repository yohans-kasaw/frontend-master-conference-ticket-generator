import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import { createPinia } from 'pinia'

const vuetify = createVuetify({
    components,
    directives,
    display: {
        mobileBreakpoint: 'sm',
        thresholds: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1280,
        },
    },
})
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(vuetify)
app.mount('#app')

