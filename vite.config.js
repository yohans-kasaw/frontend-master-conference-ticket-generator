import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

export default defineConfig({
    plugins: [vue()],
    server: {
        allowedHosts: ['fifty-cougars-warn.loca.lt'],
    },
    resolve: {
        alias: {
            '@src': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
