<template>
  <div id="app">
    <main>
      <h1>{{ title }}</h1>
      <h3>{{ subTitle }}</h3>
      <button>ELEGER PROJETOS</button>
    </main>
    <section>
      <h5>PROJETOS INTEGRADORES</h5>
      <h2>Mostra Virtual de Projetos de Inovação do SENAI AL</h2>
      <p>{{ textP2 }}</p>
      <button>ELEGER PROJETOS</button>
    </section>
    <section>
      <div class="container-p3">
        <div class="header">
          <h4>Mas afinal, o que é inovação?</h4>
          <p>{{ textP3 }}</p>
        </div>
        <div class="grid-container">
          <div class="text">
            <h4>
              A inovação tecnológica em bens ou serviços pode ser categorizada
              em duas formas principais:
            </h4>
            <p>{{ textP3n2 }}</p>
            <p>{{ textP3n3 }}</p>
            <br />
            <h5>MODERNIZAÇÃO DE PROCESSOS</h5>
            <p>{{ textP3n4 }}</p>
          </div>
          
          <img src="../assets/fotoTela2.svg" alt="" />
        </div>
      </div>
    </section>
    <section>
      <ProjetosGanhadores/>
    </section>
  </div>
</template>
/*  lembrar de fazer um component btn pra descer pra outra tela la, e duplicar aq  */
   <script>
import ProjetosGanhadores from './ProjetosGanhadores.vue';

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
    components: { ProjetosGanhadores }
};
</script>
   
   <style>
body {
  font-family: Arial, sans-serif;
}

.project {
  background-color: #f7f7f7;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
}

.grid-container {
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  flex: 1; 
  align-items: flex-start;
  margin-top: 10%;
}

.text {
  flex: 0.9;
}

img {
  
  max-width: 100%; 
  width: 50%;
}

</style>