<template>
  <div class="Adm-Dashboard">
    <AdmNavbar />

    <div class="Content-Dashboard">
      <div class="Box-Content">

        <div class="categoriasCreate Cat-campo">

          <form action="" method="post" @submit.prevent="criarCategoria">
            <h3>Criar Categoria</h3>

            <input class="Adm-Input" type="text" v-model="dadosCriar.categoria" />
            <button class="Adm-btn" type="submit">
              Criar
            </button>
          </form>

        </div>

        <div class="categoriasDelete Cat-campo">

          <form action="" method="post" @submit.prevent="deletarCategoria">
            <h3>Deletar Categoria</h3>

            <input class="Adm-Input" type="text" v-model="dadosDeletar.categoria" />
            <button class="Adm-btn" type="submit">
              Deletar
            </button>

          </form>

        </div>
      </div>


      <div class="Listagem-Full">
        <h3>Categorias</h3>
        <ul class="Box-Category">
          <li class="cat-title" v-for="categoria in categorias" :key="categoria.nome">{{ categoria.nome }}
          </li>
        </ul>
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
  justify-content: space-between;
  width: 95%;
  margin: 90px 0;
  padding: 0 40px;
}

.Box-Category {
  font-family: var(--Font-Mono-SemiBold);
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  text-transform: uppercase;
}

.Box-Category .cat-title:nth-child(odd) {
  border-radius: 40px;
}

.Box-Category .cat-title:nth-child(even) {
  border-radius: 10px;
}

.Box-Category .cat-title {
  padding: 12px 30px;
  border: 2px solid;
  margin: 5px;
}

.Listagem-Full {
  display: flex;
  flex-direction: column;
  margin: 40px;
  color: var(--Magno-Finish);
}

.Listagem-Full h3 {
  margin: 20px 0;
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

.Adm-Input {
  background: var(--Nardo-Grey);
  border-radius: 0;
  padding: 15px 10px;
  margin: 15px 0 20px;
  font-family: 'Founders Grotesk';
  font-size: 20px;
  color: var(--Silver-Birch);
}
</style>
