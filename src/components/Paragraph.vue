<script setup>
defineProps({
  indent: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <p v-if="indent" class="fs-4">
    &emsp;&emsp;<slot></slot>
  </p>
  <p v-else class="fs-4">
    <slot></slot>
  </p>
</template>

<style scoped>

</style>