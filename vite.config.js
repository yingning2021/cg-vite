import {resolve} from "path"
import {defineConfig} from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                one: resolve(__dirname, 'apps/01-2d/index.html')
            }
        }
    }
})