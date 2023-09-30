<script setup>
defineProps({
  message: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <div class="content">
      <p class="fs-4">
        &emsp;&emsp;<span v-html="message"></span>
      </p>
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