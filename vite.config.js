import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/* global process */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
	// base: '/Burger/',
  base: process.env.NODE_ENV === 'production' ? '/Burger/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
