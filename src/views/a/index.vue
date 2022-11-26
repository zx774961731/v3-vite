<template>
  <div class="h24">这是a</div>
  <a-button type="danger">1</a-button>
  <br />
  <svg-icon class="add-icon" name="add-sel"></svg-icon>
</template>
<script setup>
import { getImg } from '@/api/index';
import { onMounted, ref } from 'vue';
// const imgSrc = ref();
// onMounted(async () => {
//   const result = await getImg('9535daf50e6241959389d178c0238078');
//   imgSrc.value = URL.createObjectURL(result);
// });
</script>

<style scoped>
.add-icon {
  background-color: red;
  color: #fff;
}
</style>
