<template>
  <div>
    <div class="mostrarCategorias">
      <h1>Lista de Categorias</h1>
      <ul>
        <li v-for="categoria in categorias" :key="categoria.nome">{{ categoria.nome }}</li>
      </ul>
    </div>
    <div class="categoriasCreate">
      <form action="" method="post" @submit.prevent="criarCategoria">
        <h1>Criar Categoria</h1>
        <label for="categoria">Categoria</label>
        <input type="text" v-model="dadosCriar.categoria" />
        <button type="submit">Criar</button>
      </form>
    </div>
    <div class="categoriasDelete">
      <form action="" method="post" @submit.prevent="deletarCategoria">
        <h1>Deletar Categoria</h1>
        <label for="categoria">Categoria</label>
        <input type="text" v-model="dadosDeletar.categoria" />
        <button type="submit">Deletar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dadosCriar: {
        categoria: "",
      },
      dadosDeletar: {
        categoria: "",
      },
      categorias: [], 
    };
  },
  mounted() {
    this.listarCategorias();
  },
  methods: {
    criarCategoria() {
      axios
        .post("http://localhost:12345/admin/criarCategoria", this.dadosCriar)
        .then((response) => {
          console.log("Categoria Criada", response.data);
          this.listarCategorias();
        })
        .catch((err) => {
          console.warn("Create error:", err);
        });
    },
    deletarCategoria() {
      axios
        .post(
          "http://localhost:12345/admin/deletarCategoria",
          this.dadosDeletar
        )
        .then((response) => {
          console.log("Categoria Deletada", response.data);
          this.listarCategorias();
        })
        .catch((err) => {
          console.warn("Delete error:", err);
        });
    },
    listarCategorias() {
      axios.get("http://localhost:12345/admin/listarCategorias")
        .then(response => {
          this.categorias = response.data.categorias;
        })
        .catch(err => {
          console.warn('Erro ao obter categorias:', err);
        });
    },
  },
};
</script>

<style>
</style>
