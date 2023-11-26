<template>
  <div>
    <h2>Lista de Posts</h2>
    <div v-if="posts.length > 0">
      <ul>
        <li v-for="post in posts" :key="post.id">
          <strong>ID:</strong> {{ post.id }} - <strong>Título:</strong> {{ post.title }}-
          <strong>{{  post.descricao }}</strong> - <strong>{{  post.instituicao}}</strong> -
          <strong>{{  post.video }}</strong> - <strong>{{  post.data }}</strong> -
          <strong>{{  post.categoria }}</strong> - <strong>{{  post.video }}</strong> -
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Nenhum post encontrado.</p>
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
    axios
      .get("http://localhost:12345/admin/listarPosts")
      .then((response) => {
        console.log("Resposta da API:", response);
        this.posts = response.data.posts;
      })
      .catch((error) => {
        console.error("Erro ao obter lista de posts:", error);
      });
  },
};
</script>

<style>
/* Estilos opcionais */
</style>
