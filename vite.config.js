import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command,mode}) => {
  const env = loadEnv(mode,process.cwd());
  console.log(`env--->${mode}`);
  const {VITE_APP_BUILD_BASE_URL} = env;
  console.log(`VITE_APP_BUILD_BASE_URL:${VITE_APP_BUILD_BASE_URL}`);
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    base: VITE_APP_BUILD_BASE_URL
  }
})
