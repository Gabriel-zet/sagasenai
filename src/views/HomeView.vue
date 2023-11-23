<template>
  <div id="app">
    <main>
      <section id='Home-Banner' class='sect-w'>
        <div class="Wellcome-Banner">
          <h1>{{ title }}</h1>
          <br />
          <h3>{{ subTitle }}</h3>
          <button class='Elect-Button'>
            <div class="content-button">
                <span class='Text-Button'>ELEGER PROJETOS</span>
                <span class='Icon-Elect'></span>
            </div>
          </button>
        </div>
      </section>

      <section id='Sobre-Banner'  class='sect-w flex-flow'>
          <div class="Box-space left">
          </div>
          <div class="Box-cotent right">
            <div class="Content-Sobre">
              <div class="Title-Sobre">
                <p>PROJETOS INTEGRADORES</p>
                <h1>Mostra Virtual de Projetos de Inovação do SENAI AL</h1>
                <br />
              </div>
              
              <div class="Text-Sobre">
                <p>{{ textP2 }}</p>
              </div>

              <button class='Elect-Button'>
                <div class="content-button">
                    <span class='Text-Button'>ELEGER PROJETOS</span>
                    <span class='Icon-Elect'></span>
                </div>
              </button>
            </div>
          </div>
      </section>

      <section id='Section-Inovacao' class='sect-i'>
        <div class="Content-Hall Center">
          
          <div class="Question-text">
            <h2>Mas afinal, o que é inovação?</h2>
            <p>{{ textP3 }}</p>
          </div>

          <div class="Section-Box flex-flow">

            <div class="Box-text grid-container left">
              <div class="question-left">
                  <div class="Question-Box">
                  <h2>
                    A inovação tecnológica em bens ou serviços pode ser categorizadaem duas formas principais:
                  </h2>

                  <p>{{ textP3n2 }}</p>
                  <p>{{ textP3n3 }}</p>
                  <br />
                </div>

                <div class="Process-Text">
                  <h3>MODERNIZAÇÃO DE PROCESSOS</h3>
                  <p>{{ textP3n4 }}</p>
                </div>
              </div>
            </div>

            <div class="Box-Image right">
              <div class="image-right">
                <img src="/fotop3.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='Section-Ganhadores'>
        <ProjetosGanhadores/>
      </section>

      <section id='Section-Categorias'>
        <CursosECategorias/>
      </section>
  </main>
  </div>
</template>
/*  lembrar de fazer um component btn pra descer pra outra tela la, e duplicar aq  */
   <script>
import CursosECategorias from '../components/CursosECategorias.vue';
import ProjetosGanhadores from '../components/ProjetosGanhadores.vue';

export default {
    data() {
        return {
            title: "MOSTRA VIRTUAL DE PROJETOS DE INOVAÇÃO",
            subTitle: "DESAFIO SENAI DE PROJETOS INTEGRADORES - SENAI AL",
            textP2: "A inovação desempenha um papel crucial na indústria, impulsionando o crescimento econômico, competitividade e vantagens sustentáveis para as empresas. As empresas valorizam cada vez mais profissionais inovadores. O Senai Alagoas criou o Desafio Senai de Projetos Integradores para que alunos desenvolvam soluções inovadoras para problemas industriais.Cerca de 500 estudantes de 12 cursos técnicos dedicaram o 1º semestre de 2023 a projetos inovadores. Os resultados estão disponíveis em uma Mostra Virtual de Projetos de Inovação. Os visitantes podem votar nos projetos mais interessantes com impacto inovador. ",
            textP3: "Inovação, de acordo com o Manual de Oslo (2004), refere-se a inovações tecnológicas em produtos e processos (TPP). Isso envolve a introdução de produtos ou processos tecnologicamente novos ou melhorias substanciais em produtos e processos existentes. Não é necessário que o produto ou processo seja novo globalmente, mas sim para a empresa.",
            textP3n2: "Produtos tecnologicamente novos: São produtos com características tecnológicas ou usos distintos em relação aos produtos anteriores. Essas inovações podem resultar de tecnologias completamente novas, combinações inovadoras de tecnologias existentes em novas aplicações, ou da aplicação de conhecimento recém-desenvolvido.",
            textP3n3: "Produtos tecnologicamente aprimorados: Referem-se a produtos existentes que passaram por melhorias significativas em seu desempenho ou custo. Essas melhorias podem ser alcançadas por meio de componentes ou materiais de melhor qualidade em produtos simples ou por meio de modificações parciais em um dos subsistemas de produtos complexos que consistem em vários subsistemas técnicos integrados.",
            textP3n4: "A Inovação Tecnológica de Processo refere-se à implementação de métodos de produção inovadores ou substancialmente aprimorados, incluindo a otimização dos processos de entrega dos produtos. Esses métodos podem implicar alterações no equipamento, na organização da produção ou, em muitos casos, uma combinação de ambas, e podem derivar do uso de novos avanços tecnológicos e conhecimento. O objetivo subjacente a essas mudanças é tanto a produção ou entrega de produtos tecnologicamente aprimorados, que não podem ser obtidos por meio dos métodos convencionais de produção, quanto o aumento da eficiência na produção e entrega de produtos já existentes.",
            projects: [
                { id: 1, name: "Projeto A", description: "Descrição do Projeto A" },
                { id: 2, name: "Projeto B", description: "Descrição do Projeto B" },
                { id: 3, name: "Projeto C", description: "Descrição do Projeto C" },
                // Adicione mais projetos conforme necessário
            ],
        };
    },
    components: { ProjetosGanhadores, CursosECategorias }
};
</script>
   
<style>

:root {
  line-height: 1.5;
  font-weight: 400;

  --Font-Mono-Regular: 'IBM Plex Mono Regular';
  --Font-Mono-Medium: 'IBM Plex Mono Medium';
  --Font-Mono-SemiBold: 'IBM Plex Mono SemiBold';
  --Font-Founders: 'Founders Grotesk';

  --Nardo-Grey: #B9B9B9;
  --Ermine-White: #FFFFFF;
  --Silver-Birch: #484848;
  --Mica-Blue: #004AFF;
  --Magno-Finish: #000000;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

.flex-flow{
  flex-flow: row wrap;
  width: 100%;
}

.left {
    width: 50%;
}

.right {
    width: 50%;
}

a {
  font-weight: 500;
  text-decoration: inherit;
  transition: .2s;
}

a:hover {
  color: var(--Nardo-Grey);
}

h1, h2, h3{
  font-family: var(--Font-Mono-SemiBold);
  line-height: 1.1;
}

h1 {
  font-size: 3.2em;
}

h2 {
  font-size: 2.2em;
}

h3{
  font-size: 1.2em;
}

p{
  font-size: 1.23em;
}

button {
  border: 1px solid var(--Nardo-Grey);
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

*{
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: 'Founders Grotesk';
  src: url('../assets/Fonts/founders-grotesk.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'IBM Plex Mono Regular';
  src: url('../assets/Fonts/IBMPlexMono-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'IBM Plex Mono Medium';
  src: url('../assets/Fonts/IBMPlexMono-Medium.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'IBM Plex Mono SemiBold';
  src: url('../assets/Fonts/IBMPlexMono-SemiBold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}  

.boxCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 0;
  margin: 0 auto;
}

body{
  background-color: #fff;
  font-family: monospace; 
}

.Center {
    max-width: 1700px;
    margin: 0 auto;
}

.project {
  background-color: #f7f7f7;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
}

.text {
  flex: 0.9;
}

.sect-w{
  height: 1000px;
  width: 100%;
}

.sect-i {
    padding: 100px 0;
    width: 100%;
}

/* HOME BANNER */

#Home-Banner {
  background-color: royalblue;
  position: relative;
  background-image: url('@/assets/teste.png');
}


main{
  /* position: relative;
  top: -150px; */
  text-align: center;
  margin: 0 auto;
}

.Wellcome-Banner {
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 1200px;
  width: 65%;
}

.Wellcome-Banner h1 {
  font-family: var(--Font-Mono-SemiBold);
  font-size: 5.5em;
}

.Wellcome-Banner p {
  font-size: 1.5em;
  font-family: var(--Font-Mono-Regular);
  margin: 15px 0;
}

@media screen and (max-width: 768px) {
  
  .Wellcome-Banner h1 {
    font-size: 3em; 
  }
  
  .Wellcome-Banner p {
    font-size: 1.2em; 
  }
}

@media screen and (max-width: 768px) {
  
  .Wellcome-Banner {
    width: 90%;
  }

}
  

/* SOBRE BANNER */

#Sobre-Banner {
    background-color: rebeccapurple;
    position: relative;
    display: flex;
    align-items: center;
}

.Content-Sobre {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 50px;
}

.Title-Sobre p{
  /* padding: 22px 0; */
  font-family: var(--Font-Mono-Regular);
}

.Title-Sobre h1 {
  padding: 1vw 0;
  text-align: left;
  /* font-size: 2.2vw; */
}

.Text-Sobre p {
  text-align: justify;
  font-size: 1.4em;
  margin: 1.3vw 0;
  font-family: var(--Font-Founders);
}

/* INOVAÇÃO */

.Content-Hall {
    color: var(--Magno-Finish);
    text-align: justify;
}

.Content-Hall p{
    font-family: var(--Font-Founders);
    margin: 25px 0 0;
}

.Question-text {
    margin: 0 30px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1111px;
}

.Section-Box {
    width: 100%;
    align-items: flex-start;
    display: flex;
}

.question-left{
    display: flex;
    flex-direction: column;
    height: inherit;
    justify-content: space-between;
    margin: 0 30px;
}
      
.Box-text span{
    text-decoration-line: underline;
}

.Box-Image {
    height: inherit;
}
  
.image-right {
    padding: 0 30px 0 0;
}

.Box-Image img {
    width: 100%;
    object-fit: cover;
    height: inherit;
    display: block;
    margin: 0 auto;
}

/* WINNER */

#Winner-Slider{
    background-color: var(--Magno-Finish);
}

.Title-Slider {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0  0 140px;
}

.Title-Slider span {
    width: 58%;
    height: 0.01em;
    background: aqua;
}

.Title-Slider h1 {
    font-family: 'Founders Grotesk';
    margin-top: var(--Font-Founders);
}

/* BUTTON */

.Elect-Button {
    background: rgba(255, 255, 255, 0.10);
    backdrop-filter: blur(2px);
    /* width: 23%; */
    border-radius: 5vw;
    padding: 0.5vw 0.1vw;
    max-width: 80vw;
    margin: 34px 0;
}

.content-button {
    display: flex;
    align-items: center;
    padding: 0 17px;
    justify-content: space-around;
}

.Text-Button{
    padding: 0 15px;
    font-family: var(--Font-Mono-Regular);
    color: var(--Nardo-Grey);
    text-align: center;
    font-size: 1.2em;
    text-transform: uppercase;
}

.Icon-Elect svg{
    background: rgba(217, 217, 217, 0.20);
    padding: 10px;
    border-radius: 50px;
    width: 25px;
    height: 25px;
}

/* SEILA */

#Section-Categorias {
    background-color: var(--Magno-Finish);
}

.CardGrid h2 {
    margin: 64px 0;
}


@media (max-width: 1023px) {
  .left, .right {
        width: 100%;
    }
}
</style>