import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const base = isGithubPages && repositoryName ? `/${repositoryName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
  server: {
    port: 3000,
    strictPort: true,
    host: true,
  },
})
