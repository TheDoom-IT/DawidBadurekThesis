import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      three: path.resolve('./node_modules/three')
    },
  },
  plugins: [react()]
})
