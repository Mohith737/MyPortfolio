import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// Rollup visualizer (optional - enabled when ANALYZE env var is set)
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isAnalyze = process.env.ANALYZE === 'true'

  const baseConfig = {
    // Force Vite to pre-bundle and normalize these deps so they don't bring mixed ESM/CJS
    // copies of React into different optimized chunks. This helps avoid runtime hook
    // resolution issues caused by duplicate or partially-bundled React instances.
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        '@react-three/fiber',
        '@react-three/drei',
        'three',
        'framer-motion',
        '@react-spring/three',
        'maath'
      ]
    },
    plugins: [react()],
    build: {
      // Increase warning limit slightly and add manualChunks to split heavy vendor code
      chunkSizeWarningLimit: 1200, // in KB
      rollupOptions: {
        output: {
          // Bundle all node_modules into a single `vendor` chunk.
          // This avoids circular cross-chunk imports between a `react-vendors`
          // chunk and a generic `vendor` chunk (which was causing the
          // runtime `useLayoutEffect` undefined error on production).
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        }
      }
      ,
      // Ensure commonjs-built packages under node_modules are properly converted
      // so they don't carry their own incompatible React runtime artifacts.
      commonjsOptions: {
        include: [/node_modules/]
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        // Force single React copy to avoid duplicate-react/runtime issues in bundled vendor chunks
        // (ensures hooks like useLayoutEffect are resolved from the same React runtime)
        react: path.resolve(__dirname, 'node_modules', 'react'),
        'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom')
      },
      // Also dedupe react imports so Vite/Rollup won't bundle multiple copies
      dedupe: ['react', 'react-dom']
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
