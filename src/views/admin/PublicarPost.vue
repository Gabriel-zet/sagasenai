<template>
  <div>
    <div class="mostrarCategorias">
      <h1>Lista de Posts</h1>
      <ul>
        <li v-for="post in posts" :key="post.nome">{{ post.title }}</li>
      </ul>
    </div>
    <div class="postCreate">
      <form action="" method="post" @submit.prevent="criarPost">
        <h1>Criar Post</h1>
        <label for="title">title</label>
        <input type="text" v-model="dadosCriar.title" />
        <label for="video">videoUrl</label>
        <input type="text" v-model="dadosCriar.video" />
        <label for="data">Data</label>
        <input type="text" v-model="dadosCriar.data" />
        <label for="descricao">Descrição</label>
        <textarea v-model="dadosCriar.descricao"></textarea>

        <select
          id="instituicao"
          name="instituicao"
          v-model="dadosCriar.instituicao"
          required
        >
          <option value="Senai1">Senai1</option>
          <option value="Senai2">Senai2</option>
          <option value="Senai3">Senai3</option>
          <option value="Senai4">Senai4</option>
          <option value="Senai5">Senai5</option>
        </select>
        <select v-model="dadosCriar.categoria" required>
              <option value="" disabled selected>Selecione uma categoria</option>
              <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.nome">
               {{ categoria.nome }}
              </option>
        </select>

        <label for="data">ganhador</label>
        <input type="text" v-model="dadosCriar.ganhador" />
        <label for="data">votos</label>ganhador
        <input type="text" v-model="dadosCriar.votos" />
        <button type="submit">Criar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categorias: [],
      dadosCriar: {
        title: "",
        video: "",
        data: "",
        descricao: "",
        instituicao: "",
        categoria: this.categorias,
        ganhador: 0,
        votos: 0,
      },
    };
  },
  mounted() {
    this.listarCategorias();
  },
  methods: {
    criarPost() {
      axios
        .post("http://localhost:12345/admin/criarPost", this.dadosCriar)
        .then((response) => {
          console.log("Postagem Criada", response.data);
        })
        .catch((err) => {
          console.warn("Create error:", err);
        });
    },

    listarCategorias() {
      axios
        .get("http://localhost:12345/admin/listarCategorias")
        .then((response) => {
          this.categorias = response.data.categorias;
          console.log(this.categorias);
        })
        .catch((err) => {
          console.warn("Erro ao obter categorias:", err);
        });
    },
  },
};
</script>

<style>
</style>
