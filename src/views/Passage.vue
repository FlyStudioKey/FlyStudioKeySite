<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Navbar from "@/components/Navbar.vue";
import router from "@/router";

const route = useRoute();
const psg_src = route.params.psg_src;
const passageData = ref(null);

onMounted(async () => {
  try {
    // 使用 passageId 作为 URL 中的文章 ID
    const response = await axios.get(`https://res.flystudiokey.cn/passage/${psg_src}.json`);
    console.log(response.data)
    passageData.value = response.data;
  } catch (error) {
    console.error('Error fetching JSON data', error);
    await router.push('/404');
  }
});
</script>

<template>
  <Navbar />
  <div v-if="passageData !== null" class="container">
    <component
        v-for="(message, index) in passageData.msg"
        :key="index"
        is="div"
        class="content"
    >
      <!-- 如果消息类型为 "pic"，则渲染图片 -->
      <template v-if="message.type === 'pic'">
        <img :src="`https://res.flystudiokey.cn/passage/pic/${message.src}`" alt="pic" class="center-image">
      </template>
      <!-- 否则渲染文本内容 -->
      <template v-else-if="message.type === 'p'">
        <p class="fs-4">&emsp;&emsp;{{ message.msg }}</p>
      </template>
      <template v-else-if="message.type === 'h1'">
        <h1>{{ message.msg }}</h1>
      </template>
      <template v-else-if="message.type === 'br'">
        <br />
      </template>
      <template v-else-if="message.type === 'html'">
        <span v-html="message.msg"></span>
      </template>
    </component>
  </div>
</template>

<style scoped>
.center-image {
  max-width: 100%; /* 图片宽度不超过容器 */
  height: auto; /* 图片高度自动适应 */
}
@media (min-width: 768px) {
  /* For medium and larger screens, center content in 60% width */
  .content {
    width: 60%;
    margin: 0 auto;
  }
}

@media (max-width: 767px) {
  /* For smaller screens, center content in 100% width */
  .content {
    width: 100%;
    margin: 0 auto;
  }
}
</style>