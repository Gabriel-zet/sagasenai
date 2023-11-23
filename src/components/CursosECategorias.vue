<template>
  <div class='boxCenter'>
    <div class="CardGrid">
      <h2>SELECIONE O CURSO E CONHEÇA OS PROJETOS DA MOSTRA</h2>
      <div class="card-section cards">
        <CardProjetos
          v-for="(card, index) in cards"
          :key="index"
          :title="card.title"
          :content="card.conteudo"
        />
        <img src="../assets/fotop3.jpg" alt="" />
      </div>
    </div>
  </div>
  <div>
    <h2>Categorias</h2>
    <CardProjetos
      v-for="(categoria, index) in categorias"
      :key="index"
      :title="categoria.title"
      :content="categoria.conteudo"
    />
  </div>
</template>

<script>
import CardProjetos from "./CardProjetos.vue";

export default {
  components: {
    CardProjetos,
  },
  data() {
    return {
      cards: [
        { title: "Título 1", conteudo: "Conteúdo 1" },
        { title: "Título 2", conteudo: "Conteúdo 2" },
        { title: "Título 3", conteudo: "Conteúdo 3" },
        { title: "Título 1", conteudo: "Conteúdo 1" },
        { title: "Título 2", conteudo: "Conteúdo 2" },
        { title: "Título 3", conteudo: "Conteúdo 3" },
        { title: "Título 1", conteudo: "Conteúdo 1" },
        { title: "Título 2", conteudo: "Conteúdo 2" },
        { title: "Título 3", conteudo: "Conteúdo 3" },
        // Add +
      ],
      categorias: [
        { title: "Título 2", conteudo: "Conteúdo 2" },
        { title: "Título 3", conteudo: "Conteúdo 3" },
        { title: "Título 1", conteudo: "Conteúdo 1" },
        { title: "Título 2", conteudo: "Conteúdo 2" },
        { title: "Título 3", conteudo: "Conteúdo 3" },
      ],
    };
  },
};
</script>

<style scoped>

@media (min-width: 1500px){
  .card-section{
    grid-template-columns: 480px 480px 480px !important;
  }
}



.card-section{
    justify-content: center;
    gap: 30px;
    padding: 0 20px;
    display: grid;
    --auto-grid-min-size: 44vw;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    grid-gap: 1rem;
}
</style>