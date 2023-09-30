<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  }
})
const url = `https://res.flystudiokey.cn/passage/${props.src}`;
</script>

<template>
  <div class="container">
    <div class="content">
      <img :src="url" alt="Your Image" class="center-image">
    </div>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
}

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