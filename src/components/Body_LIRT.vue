<script setup>
defineProps({
  img_url: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  toUrl: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-lg-6 col-md-12 col-sm-12 content">
        <img v-bind:src="img_url" alt="Img" class="img-fluid">
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 content">
        <p>
          <span v-html="message"></span>
          <router-link v-bind:to="toUrl" class="btn btn-primary">详细</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  margin-left: -12.5%;
  text-align: center;
}

.content img {
  max-width: 100%; /* 图片宽度不超过容器 */
  height: auto; /* 图片高度自动适应 */
  max-height: 300px; /* 图片最大高度 */
}
</style>