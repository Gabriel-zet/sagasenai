<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p><strong>Descrição:</strong> {{ post.descricao }}</p>
    <p><strong>Instituição:</strong> {{ post.instituicao }}</p>
    <p><strong>Video:</strong> {{ post.video }}</p>
    <p><strong>Data:</strong> {{ post.data }}</p>
    <p><strong>Categoria:</strong> {{ post.categoria }}</p>
    <button @click="votar(post.id)" :disabled="post.votado">Votar</button>
    <p v-if="post.votado">Você já votou neste post.</p>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      post: {},
      userId: null,
    };
  },
  mounted() {
    this.userId = Cookies.get("id");

    axios
      .get(`http://localhost:12345/listarPost/${this.$route.params.id}`)
      .then((response) => {
        this.post = { ...response.data.post, votado: false };
      })
      .catch((error) => {
        console.error("Erro ao obter informações do post:", error);
      });
  },
  methods: {
    votar(postId) {
      const userId = Cookies.get("id");
      const token = Cookies.get("token");
      const post = this.post;
      if (!post.votado) {
        post.votado = true;

        axios
          .post(
            `http://localhost:12345/votar/${postId}`,
            { userId },
            {
              headers: {
                "Content-Type": "application/json",
                authorization: token,
              },
            }
          )
          .then((response) => {
            console.log(response.data.message);
          })
          .catch((error) => {
            console.error("Erro ao votar:", error);
          });
      }
    },
  },
};
</script>
