<template>
  <div id="body">
    <!-- <div id="container">
      <form method="post" @submit.prevent="enviarFormulario">
        <div id="Nome">
          <label for="nome">Nome</label>
          <input type="text" v-model="dadosDoFormulario.nome" />
        </div>
        <div id="email">
          <label for="email">Email</label>
          <input type="email" v-model="dadosDoFormulario.email" />
        </div>
        <div id="password">
          <label for="password">Senha</label>
          <input type="password" v-model="dadosDoFormulario.password" />
        </div>
        <select
          id="instituto"
          name="instituto"
          v-model="dadosDoFormulario.instituto"
          required
        >
          <option value="Senai1">Senai1</option>
          <option value="Senai2">Senai2</option>
          <option value="Senai3">Senai3</option>
          <option value="Senai4">Senai4</option>
          <option value="Senai5">Senai5</option>
        </select>
        <button id="submit" type="submit">Cadastrar</button>
      </form>
    </div> -->

    <div class="wrapper Cadastrar-Form">
        <div class="sct brand" 
            v-bind:style="{ backgroundImage: 'url(/BannerHome.jpg)' }">
        </div>

        <div class="sct login">
          <form method="post" 
                @submit.prevent="enviarFormulario"
          >

            <h3>Cadastrar</h3>
            <label 
              for="nome">
              Nome
            </label>
            <div id="Nome">
            <input 
              v-bind:style="{ backgroundImage: 'url(/Perfil.svg)' }" 
              type="text" 
              v-model="dadosDoFormulario.nome" 
            />
            </div>

            <label 
              for="email">
              Email
            </label>
            <div class="email-input">
              <input 
                    v-bind:style="{ backgroundImage: 'url(/Email.png)' }" 
                    type="email" 
                    name="email" 
                    v-model="dadosDoFormulario.email" 
                    @input="verificarFormatoEmail"
              >
              <img v-if="dadosDoFormulario.email && !emailValido" src="/Error.png" alt="Email Inválido">
              <img v-if="dadosDoFormulario.email && emailValido" src="/Correct.png" alt="Email Válido">
            </div>

            <label 
              for="password">
              Senha
            </label>
            <div class="password-input">
              <input 
                      v-bind:style="{ backgroundImage: 'url(/Password.png)' }" 
                      :type="mostrarSenha ? 'text' : 'password'" 
                      name="password" 
                      v-model="dadosDoFormulario.password"
              >
              <button 
                      type="button" 
                      @click="toggleMostrarSenha" 
                      class="eye-btn"
              >
                <img v-if="mostrarSenha" src="/Eye.png" alt="Ocultar Senha">
                <img v-else src="/EyeClose.png" alt="Mostrar Senha">
              </button>

            </div>

            <!-- Adicionando mensagem de erro para senha -->
            <div 
                v-if="!senhaValida" 
                class="error-message"
              >
                A senha deve ter pelo menos 6 caracteres, incluindo pelo menos 3 caracteres especiais.
            </div>

            <label 
                  for="Instituição">
                  Instituição
            </label>
            <div class="select-container">
              <select 
                  v-bind:style="{ backgroundImage: 'url(/Local.png)' }"
                  id="instituto"
                  name="instituto"
                  v-model="dadosDoFormulario.instituto"
                  required
              >
                <option value="" disabled selected hidden>Selecione Uma</option>
                <option value="Senai_Poço">Senai - Poço</option>
                <option value="Senai_Benedito_Bentes">Senai - Benedito Bentes</option>
                <option value="Senai_Arapiraca">Senai - Arapiraca</option>
              </select>
            </div>

            <input 
              id="submit" 
              type="submit" 
              value="Cadastrar"
            >
            <h4 class="text-center">Já tem uma conta?<span><router-link to="/login">Entrar</router-link></span></h4>

          </form>


          <div 
              v-if="exibirPopup" 
              class="popup"
              @transitionend="fecharPopup"
          >
            Preencha todos os campos!
          </div>

        </div>
      </div>
  </div>
</template>
  
  <script>
import axios from "axios";
export default {
  data() {
    return {
      dadosDoFormulario: {
        nome: "",
        email: "",
        password: "",
        instituto: "",
      },
      mostrarSenha: false,
      emailValido: null,
      senhaValida: true,
      exibirPopup: false,
    };
  },
  methods: {
    enviarFormulario() {
      // Adicionando verificação de campos vazios
      if (Object.values(this.dadosDoFormulario).some(value => value === "")) {
        this.exibirPopup = true;
        setTimeout(() => {
          this.exibirPopup = false;
        }, 5000);
        return;
      }

      // Adicionando verificação da senha durante o cadastro
      if (this.dadosDoFormulario.password.length < 6 || !this.verificarCaracteresEspeciais()) {
        this.senhaValida = false;
        return; // Não prossegue se a senha não for válida
      }

      const dadosDoFormulario = { ...this.dadosDoFormulario };

      console.log("Dados do formulário:", dadosDoFormulario);

      this.dadosDoFormulario.nome = "";
      this.dadosDoFormulario.email = "";

      axios
        .post("http://localhost:12345/users/create", dadosDoFormulario)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    toggleMostrarSenha() {
      this.mostrarSenha = !this.mostrarSenha;
    },
    verificarFormatoEmail() {
      // Expressão regular simples para verificar o formato do e-mail
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailValido = regex.test(this.dadosDoFormulario.email);
    },
    verificarCaracteresEspeciais() {
      // Verifica se a senha tem pelo menos 3 caracteres especiais
      const caracteresEspeciais = /[!@#$%^&*(),.?":{}|<>]/g;
      const match = this.dadosDoFormulario.password.match(caracteresEspeciais);
      return match && match.length >= 3;
    },
    fecharPopup() {
      this.exibirPopup = false;
    },
  },
};

// Codigo antigo caso essa merda não funcionar

// data() {
//     return {
//       dadosDoFormulario: {
//         nome: "",
//         email: "",
//         password: "",
//         instituto: "",
//       },
//       mostrarSenha: false,
//       emailValido: null,
//     };
//   },

// enviarFormulario() {
//       const dadosDoFormulario = { ...this.dadosDoFormulario };

//       console.log("Dados do formulário:", this.dadosDoFormulario);

//       this.dadosDoFormulario.nome = "";
//       this.dadosDoFormulario.email = "";

//       axios
//         .post("http://localhost:12345/users/create", dadosDoFormulario)
//         .then((response) => {
//           console.log(response.data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
// },

</script>
  
  
<style>

  .Cadastrar-Form{
    grid-template-areas: "centerRight centerLeft";
  }

  .popup {
    position: fixed;
    top: 0;
    background-color: #ff0000;
    color: var(--Ermine-White);
    padding: 10px 50px;
    display: inline-block;
    z-index: 999;
    transition: top 0.5s ease-in-out;
  }

  .popup.closed {
    top: -50px; /* Altura negativa maior que a altura do popup */
  }

  .error-message {
    color: #ff0000;
    padding: 0 0 15px;
  }

</style>
  
  