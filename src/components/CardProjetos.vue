<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>
   
   <script>
export default {
  props: {
    title: String,
    content: String,
  },
};
</script>
   
<style scoped>

.card {
  display: flex;
  padding: 34px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 69px;
  flex-shrink: 0;

  border: 1px solid #D2672B;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(2px);
}



</style>