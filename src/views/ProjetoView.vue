

<template>
  <CardProjetos v-for="(post, index) in posts" :key="index" :nome="post.nome" />
</template>

<script>
import axios from "axios";
import CardProjetos from "@/components/CardProjetos.vue";
export default {
  data() {
    return {
      posts: [],
    };
  },
  components: {
    CardProjetos,
  },
  mounted() {
    this.listarPosts();
  },
  methods: {
    listarPosts() {
      axios
        .get("http://localhost:12345/admin/listarCategorias")
        .then(response => {
          console.log(this.posts);
          this.posts = response.data.posts;
        })
        .catch(err => {
          console.warn("Erro ao obter posts", err);
        });
    },
  },
};
</script>

<style>
</style>