<script setup>
defineProps({
  align: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="container">
    <div class="content" v-bind:style="{ textAlign:align }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
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