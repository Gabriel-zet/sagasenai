<template>
  <div class="Adm-Dashboard">
    <AdmNavbar />


    <div class="Content-Publicar">
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
          <input class="Adm-Input" type="text" v-model="dadosCriar.title" />
          <label for="video">videoUrl</label>
          <input class="Adm-Input" type="text" v-model="dadosCriar.video" />
          <label for="data">Data</label>
          <input class="Adm-Input" type="text" v-model="dadosCriar.data" />
          <label for="descricao">Descrição</label>
          <textarea class="Adm-Input" v-model="dadosCriar.descricao"></textarea>

          <label for="Instituição">Instituição</label>
          <div class="select-container">
            <select class="Adm-Input" v-bind:style="{ backgroundImage: 'url(/Local.png)' }" id="instituicao" name="instituicao" v-model="dadosCriar.instituicao" required>
              <option value="" disabled selected hidden>Selecione Uma</option>
              <option value="Senai_Poço">Senai - Poço</option>
              <option value="Senai_Benedito_Bentes">Senai - Benedito Bentes</option>
              <option value="Senai_Arapiraca">Senai - Arapiraca</option>
            </select>
          </div>

          <label for="Instituição">Categoria</label>
          <select class="Adm-Input" v-model="dadosCriar.categoria" required>
            <option value="" disabled selected>Selecione uma categoria</option>
            <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.nome">
              {{ categoria.nome }}
            </option>
          </select>

          <label for="data">ganhador</label>
          <input class="Adm-Input" type="text" v-model="dadosCriar.ganhador" />
          <label for="data">votos</label>ganhador
          <input class="Adm-Input" type="text" v-model="dadosCriar.votos" />
          <button type="submit">Criar</button>
        </form>
      </div>
    </div>


  </div>
</template>

<script>
import AdmNavbar from '../../components/AdmNavbar.vue';
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
  components: {
    AdmNavbar
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
form {
  width: 400px;
}

.Content-Publicar {
  display: flex;
  width: 75%;
  justify-content: space-between;
  color: var(--Magno-Finish);
}
</style>
