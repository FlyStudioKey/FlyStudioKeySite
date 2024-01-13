<script setup>
defineProps({
  is_foot_d: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
    <footer v-if="is_foot_d" class="footerD">
      <a href="https://beian.miit.gov.cn/">滇 ICP 备 2022000802 号 - 2</a>
      &copy; 2022-2024 FlyStudioKey. All Rights Reserved.
      <a href="https://ipw.cn/ipv6webcheck/?site=www.flystudiokey.cn" title="本站支持IPv6访问" target='_blank'>
        <img style='display:inline-block;vertical-align:middle' alt="本站支持IPv6访问" src="https://static.ipw.cn/icon/ipv6-s4.svg">
      </a>
    </footer>
    <footer v-else class="footer">
      <a href="https://beian.miit.gov.cn/">滇 ICP 备 2022000802 号 - 2</a>
      &copy; 2022-2024 FlyStudioKey. All Rights Reserved.
      <a href="https://ipw.cn/ipv6webcheck/?site=www.flystudiokey.cn" title="本站支持IPv6访问" target='_blank'>
        <img style='display:inline-block;vertical-align:middle' alt="本站支持IPv6访问" src="https://static.ipw.cn/icon/ipv6-s4.svg">
      </a>
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