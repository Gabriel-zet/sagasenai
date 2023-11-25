<template>
    <div class="card-footer">
      <h4>{{ title }}</h4>
    </div>
</template>
     
<script>
  export default {
    props: {
      title: String,
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