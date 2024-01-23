<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  }
})
import { ref, onMounted, onBeforeUnmount } from 'vue';

const imageUrl = props.src;
const outerDiv = ref(null);

const adjustImageSize = () => {
  const img = outerDiv.value.querySelector('.responsive-img');

  const width = outerDiv.value.offsetWidth;

  // 设置图片的 max-width，保持长宽比
  img.style.maxWidth = `${width}px`;
};

onMounted(() => {
  adjustImageSize();
  window.addEventListener('resize', adjustImageSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', adjustImageSize);
});
</script>

<template>
  <div class="outer-div" ref="outerDiv">
    <img :src="imageUrl" class="responsive-img"  alt="img"/>
  </div>
</template>