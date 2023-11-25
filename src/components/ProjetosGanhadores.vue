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

            <div className="Slider-List">
              <div className="Card-Post" v-for="project in projects" :key="project.id">
                <img :src="project.image" alt="" />

                <div className="Content-Card">

                  <h3>{{ project.name }}</h3>
                  <p>{{ project.description }}</p>

                  <div className="Info-Inst">

                    <div className="Inst-Local">
                      <span>SENAI:</span>
                      <span>Text</span>
                    </div>
                    
                    <div className="Data-Post">
                      <span>DATA:</span>
                      <span>Text</span>
                    </div>

                  </div>

                </div>

              </div>
            </div>
        </div>
    </section>
  </div>


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
         { id: 1, name: "Projeto A", description: "Descrição do Projeto A", image: '/banner.jpg' },
         { id: 2, name: "Projeto B", description: "Descrição do Projeto B", image: '/banner.jpg' },
         { id: 3, name: "Projeto C", description: "Descrição do Projeto C", image: '/banner.jpg' },
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