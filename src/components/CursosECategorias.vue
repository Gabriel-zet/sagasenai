<template>
  <div class="boxFooter Center">
    <h2>Categorias</h2>
    <div class="Footer-Category">
      <CardFooter
        v-for="(categoria, index) in categorias"
        :key="index"
        :nome="categoria.nome"
        @click="navegarParaListagem"
      />
    </div>

    <span class="footer-senai"
      >DSPI - SENAI AL SERVIÇO NACIONAL DE APRENDIZAGEM INDUSTRIAL -
      DEPARTAMENTO REGIONAL DE ALAGOAS</span
    >
  </div>
</template>

<script>
import CardFooter from "./CardFooter.vue";

import axios from "axios";

export default {
  components: {
    CardFooter,
  },
  data() {
    return {

      categorias: [],
    };
  },
  mounted() {
    this.listarCategorias();
  },
  methods: {
    listarCategorias() {
      axios
        .get("http://localhost:12345/admin/listarCategorias", {
          withCredentials: true,
        })

        .then((response) => {
          this.categorias = response.data.categorias;
        })
        .catch((err) => {
          console.warn("Erro ao obter categorias:", err);
        });
        
    },
    
    navegarParaListagem() {
      this.$router.push({ name: 'listagem' });
    
  },
  },
};
</script>

<style scoped>
@media (min-width: 1500px) {
  .card-section {
    grid-template-columns: 480px 480px 480px !important;
  }
}

@media screen and (max-width: 600px) {
  .card-section {
    grid-template-columns: 1fr;
  }

  .Footer-Category .card-footer {
    padding: 10px 30px;
  }
}

.card-section {
  justify-content: center;
  gap: 30px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  grid-gap: 1rem;
}

.Footer-Category {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
}
.Footer-Category .card-footer:nth-child(odd) {
  border-radius: 40px;
}

.Footer-Category .card-footer:nth-child(even) {
  border-radius: 10px;
}

.Footer-Category .card-footer {
  padding: 15px 30px;
  border: 1px solid;
  margin: 5px;
}

.boxFooter h2 {
  margin: 25px 8px;
}

.boxFooter {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
}

.footer-senai {
  text-align: center;
  margin: 100px auto 0 auto;
}
</style>