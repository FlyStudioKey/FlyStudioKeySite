<script setup>
defineProps({
  isFootD: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
    <footer v-if="isFootD" class="footerD">
      滇 ICP 备 2022000802 号 - 2
      &copy; 2023 FlyStudioKey. All Rights Reserved.
    </footer>
    <footer v-else class="footer">
        滇 ICP 备 2022000802 号 - 2
        &copy; 2023 FlyStudioKey. All Rights Reserved.
    </footer>
</template>

<style scoped>
.footerD {
  background-color: white; /* 与页面背景色相同 */
  text-align: center; /* 文本居中 */
  padding: 20px 0; /* 上下内边距 */
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.footer {
  background-color: white; /* 与页面背景色相同 */
  text-align: center; /* 文本居中 */
  padding: 20px 0; /* 上下内边距 */
}
</style>