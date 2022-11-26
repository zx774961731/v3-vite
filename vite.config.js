import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path/posix';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  server: {
    port: 9001,
    proxy: {
      '/file': {
        target: 'http://192.168.118.168:65525/',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  }
});
