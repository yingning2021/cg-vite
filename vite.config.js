import {defineConfig} from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                one: './apps/01-2d/index.html'
            }
        }
    }
})