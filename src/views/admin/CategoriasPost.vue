<template>
  <div class="Adm-Dashboard">
    <AdmNavbar />

    <div class="Content-Dashboard">

      <div class="mostrarCategorias">
        <h3>Categorias - Post</h3>

        <ul>
          <li 
            v-for="categoria in categorias" 
            :key="categoria.nome">{{ categoria.nome }}
          </li>
        </ul>

      </div>

      <div class="Box-Content">

        <div class="categoriasCreate Cat-campo">

          <form 
              action="" 
              method="post" 
              @submit.prevent="criarCategoria"
          >
            <h3>Criar Categoria</h3>
            
            <input 
                  type="text" 
                  v-model="dadosCriar.categoria" />
            <button 
                  class="Adm-btn"  
                  type="submit">
                  Criar
            </button>
          </form>

        </div>

        <div class="categoriasDelete Cat-campo">

          <form 
                action="" 
                method="post" 
                @submit.prevent="deletarCategoria"
          >
            <h3>Deletar Categoria</h3>
            
            <input 
                  type="text" 
                  v-model="dadosDeletar.categoria" />
            <button 
                  class="Adm-btn" 
                  type="submit">
                  Deletar
            </button>

          </form>

        </div>
      </div>

    </div>

  </div>
</template>

<script>

// Importanto a NavBar
import AdmNavbar from '../../components/AdmNavbar.vue';
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
  components: { 
    AdmNavbar 
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

.Adm-Dashboard {
    height: 100vh;
    display: flex;
    background: var(--Ermine-White);
}

.Box-Content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 90px 0;
}

.mostrarCategorias {
    display: flex;
    justify-content: flex-start;
    margin: 50px 40px;
}

.Content-Dashboard {
    width: 100%;
    color: var(--Magno-Finish);
}

.Cat-campo form {
    width: 550px;
}

.Adm-btn {
    background: var(--Myan-Orange);
    padding: 15px 70px;
    font-size: 18px;
    border-radius: 50px;
}

</style>
