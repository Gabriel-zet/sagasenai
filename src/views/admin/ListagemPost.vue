<template>
  <div class="Adm-Dashboard">
    <AdmNavbar />

    <div class="Content-Filter">
      <div class="Listagem-Full">
        <h3>Categorias</h3>
        <ul class="Box-Category categorias-senai">
          <li class="cat-title" v-for="categoria in categorias" :key="categoria.nome">{{ categoria.nome }}
          </li>
        </ul>
      </div>

      <div class="Filter-data">

        <div class="Listagem-Full">
          <span>instituição</span>
          <ul class="Box-Category Instituto-senai">
            <li class="cat-title" v-for="categoria in categorias" :key="categoria.nome">{{ categoria.nome }}
            </li>
          </ul>
        </div>

        <div class="Listagem-Full">
          <span>Ano</span>
          <div class="yearWrapper">
            <select class="form-control Adm-Input width-size" id="dYear" v-model="selectedYear">
              <option v-for="year in years" :key="year">{{ year }}</option>
            </select>
          </div>
        </div>

        <div class="Listagem-Full">
          <span>Votos</span>
          <select class="form-control Adm-Input width-size" id="dOrder">
            <option value="0">Maior para o menor</option>
            <option value="1">Menor para o maior</option>
          </select>
        </div>

        <div class="Listagem-Full">
          <button class="Adm-btn">ganhador</button>
        </div>

      </div>


      <div class="card">
        <table>
          <thead>
            <tr>
              <th class="t-table wi-25">Título</th>
              <th class="d-table wi-15">Data</th>
              <th class="i-table wi-20">Instituição</th>
              <th class="c-table wi-15">Categoria</th>
              <th class="g-table wi-10">Ganhador</th>
              <th class="v-table wi-10">Votos</th>
              <th class="e-table wi-10">Editar</th>
              <th class="x-table wi-10 end-f">Excluir</th>
            </tr>
          </thead>

          <tbody class="line-post">
            <tr>
              <td>Your Bus!</td>
              <td>10/10/2022</td>
              <td>(Senai - Poço) - Centro de Formação Profi...</td>
              <td>informática</td>
              <td>Não</td>
              <td>2.469</td>
              <td>Editar</td>
              <td>Excluir</td>
            </tr>
            <tr>
              <td>Your Bus!</td>
              <td>10/10/2022</td>
              <td>(Senai - Poço) - Centro de Formação Profi...</td>
              <td>informática</td>
              <td>Não</td>
              <td>2.469</td>
              <td>Editar</td>
              <td>Excluir</td>
            </tr>
            <tr>
              <td>Your Bus!</td>
              <td>10/10/2022</td>
              <td>(Senai - Poço) - Centro de Formação Profi...</td>
              <td>informática</td>
              <td>Não</td>
              <td>2.469</td>
              <td>Editar</td>
              <td>Excluir</td>
            </tr>
          </tbody>
        </table>

        <div class="btn-list">
          <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
          <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>

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
      selectedYear: null,
      years: Array.from({ length: 10 }, (_, index) => new Date().getFullYear() + index),
    };
  },
  components: {
    AdmNavbar
  },
  mounted() {
    this.listarCategorias();
  },
  methods: {
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
    }
  },
};
</script>

<style>
table {
  color: black;
  font-family: var(--Font-Founders);
  font-size: 18px;
  width: 95%;
  border-spacing: 0;
}

.Content-Filter {
  width: 100%;
}

.Filter-data {
  display: flex;
}

.card {
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

thead th,
tbody td {
  border-left: 1px solid;
  padding: 7px 5px;
}

thead th:last-child,
tbody td:last-child {
  border-right: 1px solid;
}

.wi-25 {
  width: 25%;
}

.wi-20 {
  width: 20%;
}

.wi-15 {
  width: 15%;
}

.wi-10 {
  width: 7%;
}


.line-post tr:nth-child(odd) {
  background-color: var(--Nardo-Grey);
}

.line-post .tr:nth-child(even) {
  border-radius: 10px;
}
</style>