import reactRefresh from '@vitejs/plugin-react-refresh'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
  plugins: [reactRefresh()],
  server: {
    host: '0.0.0.0',
    hmr: {
      port: 443,
    }
  }
  build: {
    rollupOptions: {
      plugins: [
        dynamicImportVars()
      ],
    },
  },
}
