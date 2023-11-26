<template>
  <div>
    <h1>Lista de Posts</h1>
    <div v-if="posts.length === 0">Nenhum post disponível.</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id" class="post-card">
        <h2>{{ post.title }}</h2>
        <p>{{ post.descricao }}</p>
        <p>Data: {{ post.data }}</p>
        <p>Instituição: {{ post.instituicao }}</p>
        <p>Categoria: {{ post.categoria }}</p>
        <p>Ganhador: {{ post.ganhador }}</p>
        <p>Votos: {{ post.votos }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.listarPosts();
  },
  methods: {
    listarPosts() {
      axios
        .get("http://localhost:12345/admin/listarPosts")
        .then((response) => {
          this.posts = response.data.posts;
          console.log(this.posts);
        })
        .catch((err) => {
          console.warn("Erro ao obter Posts:", err);
        });
    },
  },
};
</script>
    
<style>
</style>