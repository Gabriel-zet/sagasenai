<template>
  <section>
    <h2>SELECIONE O CURSO E CONHEÇA OS PROJETOS DA MOSTRA</h2>
    <div class="card-grid">
      <CardProjetos
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :content="card.conteudo"
      />
      <img src="../assets/fotop3.jpg" alt="" />
    </div>
  </section>
  <section>
    <h2>Categorias</h2>
    <CardProjetos
      v-for="(categoria, index) in categorias"
      :key="index"
      :title="categoria.title"
      :content="categoria.conteudo"
    />
  </section>
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
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  padding: 20px;
}
</style>