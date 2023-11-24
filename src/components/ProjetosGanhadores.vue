<template>
  <!-- <div id="app">
     <h1>{{ title }}</h1>
     <button>VER TODOS</button>
     <h2>{{ subTitle }}</h2>
     <button>ELEGER PROJETOS</button>
     <div class="project" v-for="project in projects" :key="project.id">
       <h2>{{ project.name }}</h2>
       <p>{{ project.description }}</p>
     </div>
  </div> -->


  <div id="app">
    <section id='Winner-Slider' class='sect-i Center'>
      <div class="Content-Slider">
        <div class="Title-Slider"  v-bind:style="{ backgroundImage: 'url(/WinnerLine.svg)' }">
          <h1>{{ title }}</h1>
          <button>VER TODOS</button>
        </div>

        <div class="Slider-List project" v-for="project in projects" :key="project.id">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
 
 <script>
 export default {
  data() {
     return {
       title: "Projetos Ganhadores",
       subTitle: "DESAFIO SENAI DE PROJETOS INTEGRADORES - SENAI AL",
       projects: [
         { id: 1, name: "Projeto A", description: "Descrição do Projeto A" },
         { id: 2, name: "Projeto B", description: "Descrição do Projeto B" },
         { id: 3, name: "Projeto C", description: "Descrição do Projeto C" },
       ],
     };
  },
 };
 </script>
 
 <style>
 body {
  font-family: Arial, sans-serif;
 }
 
 h1 {

  text-align: center;
 }

.project {
    background-color: #f7f7f7;
    padding: 20px;
    margin: 20px 0;
    border-radius: 5px;
}

 </style>