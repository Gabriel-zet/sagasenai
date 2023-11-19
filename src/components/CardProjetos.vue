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
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  text-align: center;
  width: 100%;
  max-width: 300px;
}
</style>