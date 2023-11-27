<template>
  <div>
    <h2>Post Mais Votado ({{ categoriaSelecionada || 'Geral' }}):</h2>
    <div v-if="postsMaisVotados.length > 0">
      <div v-for="post in postsMaisVotados" :key="post.categoria">
        <router-link :to="'/post/' + post.id">{{ post.title }}</router-link>
        <p>Votos: {{ post.votos }}</p>
      </div>
    </div>
    <div v-else>
      <p>Nenhum post votado nesta categoria ainda.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
    categoriaSelecionada: String,
  },
  computed: {
    postsMaisVotados() {
      const postsPorCategoria = {};
      
      this.posts.forEach(post => {
        if (!postsPorCategoria[post.categoria] || postsPorCategoria[post.categoria].votos < post.votos) {
          postsPorCategoria[post.categoria] = post;
        }
      });
      return Object.values(postsPorCategoria);
    },
  },
};
</script>

<style>
/* Estilos opcionais */
</style>
