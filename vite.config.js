import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// Rollup visualizer (optional - enabled when ANALYZE env var is set)
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isAnalyze = process.env.ANALYZE === 'true'

  const baseConfig = {
    plugins: [react()],
    build: {
      // Increase warning limit slightly and add manualChunks to split heavy vendor code
      chunkSizeWarningLimit: 1200, // in KB
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('three') || id.includes('@react-three')) {
                return 'three-vendors'
              }
              if (id.includes('framer-motion') || id.includes('maath') || id.includes('lodash')) {
                return 'motion-vendors'
              }
              if (id.includes('react') || id.includes('react-dom')) {
                return 'react-vendors'
              }
              return 'vendor'
            }
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }

  if (isAnalyze) {
    // add visualizer plugin that outputs a static HTML report into dist/
    baseConfig.plugins.push(
      visualizer({ filename: 'dist/bundle-stats.html', title: 'Bundle Analysis', gzipSize: true })
    )
  }

  return baseConfig
})
