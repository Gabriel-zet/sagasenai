<template>
  <div>
    <h2>Lista de Categorias:</h2>
    <div>
      <button v-for="categoria in categorias" :key="categoria.id" @click="selecionarCategoria(categoria)">
        {{ categoria.nome }}
      </button>
    </div>
    <h2>Lista de Posts</h2>
    <div v-if="postsFiltrados.length > 0">
      <ul>
        <li v-for="post in postsFiltrados" :key="post.id">
          <router-link :to="'/post/' + post.id">{{ post.title }}</router-link>
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
      categorias: [],
      categoriaSelecionada: null,
    };
  },
  computed: {
    postsFiltrados() {
      if (this.categoriaSelecionada) {
        return this.posts.filter(post => post.categoria === this.categoriaSelecionada);
      }
      return this.posts;
    },
  },
  methods: {
    selecionarCategoria(categoria) {
      this.categoriaSelecionada = categoria.nome;
    },
  },
  mounted() {
    axios
      .get("http://localhost:12345/admin/listarPosts")
      .then((response) => {
        console.log("Resposta da API:", response);
        this.posts = response.data.posts.map((post) => ({
          ...post,
          votado: false,
        }));
      })
      .catch((error) => {
        console.error("Erro ao obter lista de posts:", error);
      });

    axios
      .get("http://localhost:12345/admin/listarCategorias")
      .then((response) => {
        console.log("Resposta da API de Categorias:", response);
        this.categorias = response.data.categorias;
      });
  },
};
</script>

<style>
/* Estilos opcionais */
</style>
