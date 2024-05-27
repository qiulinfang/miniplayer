import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

const resolve = (p) => fileURLToPath(new URL(p, import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动导入Vue、Pinia等的API
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'pinia'],
      dts: 'auto-imports.d.ts',
    }),
    // 按需引入Ant Design Vue组件
    Components({
      resolvers: [AntDesignVueResolver(),ElementPlusResolver()],
      dts: 'components.d.ts',
    }),
    [
      "import",
      {
        "libraryName": "ant-design-vue",
        "libraryDirectory": "es",
        "style": true // 自动加载样式
      }
    ]
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
})
