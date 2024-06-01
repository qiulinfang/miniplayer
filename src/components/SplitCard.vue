    <template>
      <div class="split-card">
        <div class="card-left">
          <img :src="image" :alt="title" class="card-image" />
        </div>
        <div class="card-right">
          <h3 class="card-title">{{ title }}</h3>
          <ul class="list-unstyled">
            <li v-for="(item, index) in items" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </template>
    
    <script setup>
    import { defineProps } from 'vue';
    
    // 定义接收的props
    const props = defineProps({
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    });
    </script>
    
    <style scoped>
    .split-card {
      display: flex;
      align-items: stretch;
    }
    
    .card-left {
      flex-basis: 40%; /* 或具体宽度，例如 300px */
      padding-right: 20px;
    }
    
    .card-right {
      flex-basis: 60%; /* 填充剩余空间 */
    }
    
    .card-image {
      width: 100%;
      height: auto;
      border-radius: 5px; /* 可选：为图片添加圆角 */
    }
    
    .card-title {
      margin-bottom: 10px;
    }
    </style>