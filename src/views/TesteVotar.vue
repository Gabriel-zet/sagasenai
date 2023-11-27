<template>
    <div>
      <h2>Lista de Posts</h2>
      <div v-if="posts.length > 0">
        <ul>
          <li v-for="post in posts" :key="post.id">
            <strong>ID:</strong> {{ post.id }} -
            <strong>Título:</strong> {{ post.title }} -
            <strong>Descrição:</strong> {{ post.descricao }} -
            <strong>Instituição:</strong> {{ post.instituicao }} -
            <strong>Data:</strong> {{ post.data }} -
            <strong>Categoria:</strong> {{ post.categoria }} -
            <strong>Vídeo:</strong> {{ post.video }} -
            <strong>Votos:</strong> {{ post.votos }} -
            <button @click="votar(post.id)" :disabled="post.votado">Votar</button>
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
          this.posts = response.data.posts.map(post => ({
            ...post,
            votos: 0,
            votado: false,
          }));
        })
        .catch((error) => {
          console.error("Erro ao obter lista de posts:", error);
        });
    },
    methods: {
      votar(postId) {
        const post = this.posts.find(post => post.id === postId);
        if (!post.votado) {
          post.votos += 1;
          post.votado = true;
          this.desabilitarOutrosPosts(postId);
        }
      },
      desabilitarOutrosPosts(postId) {
        this.posts.forEach(post => {
          if (post.id !== postId) {
            post.votado = true;
          }
        });
      },
    },
  };
  </script>
  
  <style>
  /* Estilos opcionais */
  </style>
  