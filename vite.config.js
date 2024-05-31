import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { viteMockServe } from 'vite-plugin-mock';

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
      resolvers: [AntDesignVueResolver(), ElementPlusResolver()],
      dts: 'components.d.ts',
    }),
    [
      "import",
      {
        "libraryName": "ant-design-vue",
        "libraryDirectory": "es",
        "style": true // 自动加载样式
      }
    ],
    viteMockServe({
      // 指定mock文件的目录
      mockPath: 'src/mock',
      // 是否开启mock功能
      localEnabled: process.env.VITE_NODE_ENV === 'development', // 只在开发环境启用
      // 生产环境是否生成mock数据代码，默认不生成
      prodEnabled: false,
      // 是否在控制台打印请求日志
      injectCode: `
        import { setupProdMockServer } from '../mock/_createProductionServer';
        setupProdMockServer();
      `,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
})
