<template>
  <div id="body">
    <!-- <div id="container">
      <form method="post" @submit.prevent="fazerLogin">
        <div id="email">
          <label for="email">Email</label>
          <input type="email" v-model="dadosDoFormulario.email" />
        </div>
        <div id="password">
          <label for="password">Senha</label>
          <input type="password" v-model="dadosDoFormulario.password" />
        </div>
        <button id="submit" type="submit">Entrar</button>
      </form>
    </div>
  </div> -->
    <div class="wrapper Entrar-Form">
      <div class="sct brand" v-bind:style="{ backgroundImage: 'url(/BannerHome.jpg)' }"></div>

      <div class="sct login">
        <form method="post" @submit.prevent="fazerLogin">
          <h3>Entrar</h3>
          <label for="email"> Email </label>
          <div class="email-input">
            <input class="Cad-Input" v-bind:style="{ backgroundImage: 'url(/Email.png)' }" type="email" name="email"
              v-model="dadosDoFormulario.email" @input="verificarFormatoEmail" />
            <img v-if="dadosDoFormulario.email && !emailValido" src="/Error.png" alt="Email Inválido" />
            <img v-if="dadosDoFormulario.email && emailValido" src="/Correct.png" alt="Email Válido" />
          </div>

          <label for="password"> Senha </label>
          <div class="password-input">
            <input class="Cad-Input" v-bind:style="{ backgroundImage: 'url(/Password.png)' }" :type="mostrarSenha ? 'text' : 'password'"
              name="password" v-model="dadosDoFormulario.password" />
            <button type="button" @click="toggleMostrarSenha" class="eye-btn">
              <img v-if="mostrarSenha" src="/Eye.png" alt="Ocultar Senha" />
              <img v-else src="/EyeClose.png" alt="Mostrar Senha" />
            </button>
          </div>
          <input id="submit" type="submit" value="Enviar" />

          <h4 class="text-center">
            Não tem uma conta?<span><router-link to="/cadastrar">Criar Uma</router-link></span>
          </h4>
        </form>
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
        email: "",
        password: "",
      },
      mostrarSenha: false,
      emailValido: null,
    };
  },
  methods: {
    fazerLogin() {
      const dadosDoFormulario = {
        email: this.dadosDoFormulario.email,
        password: this.dadosDoFormulario.password,
      };

      axios
        .post("http://localhost:12345/login", dadosDoFormulario)
        .then((response) => {
          console.log("Login bem-sucedido!", response.data);

          this.$store.commit("user/setUser", {
            ...response.data.user,
            isAuthenticated: true,
            isAdmin: response.data.isAdmin,
          });

          this.$router.push("/UserProfile");
        })
        .catch((error) => {
          console.error("Erro durante o login:", error.response.data);
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
  },
};
</script>
  
<style>
/* Configurando alturas para HTML, body e elementos específicos */
.wrapper,
.sct {
  height: 100%;
}

/* Estilo para rótulos dentro da seção de login */
.sct.login label {
  font-size: 1.2em;
  font-family: var(--Font-Mono-Regular);
}

/* Estilo para mensagens de erro */
.mensagem-erro {
  background-color: #ff6b6b;
  color: var(--Ermine-White);
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  text-align: center;
}

/* Estilo para entrada de e-mail */
.email-input {
  position: relative;
}

.email-input img {
  right: 10px;
  top: 50%;
  width: 15px;
  transform: translateY(-50%);
  position: absolute;
}

/* Estilo para entrada de senha */
.password-input {
  position: relative;
}

.password-input button {
  right: 10px;
  width: 4%;
  top: 50%;
  transform: translateY(-40%);
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: absolute;
}

.eye-btn img {
  width: 15px;
}

/* Estilo para centralizar o texto */
.text-center {
  text-align: center;
  font-family: 'Founders Grotesk';
}

.text-center span {
  color: var(--Myan-Orange);
  text-decoration: underline;
}

/* Estilo para o heading de nível 3 */
h3 {
  font-size: 2rem;
}

form h3 {
  margin: 40px 0;
}

/* Estilo para inputs do formulário */
input:active,
input:focus,
input:visited,
input:hover,
button:active,
button:focus,
button:visited,
select:active,
select:focus,
select:visited,
select:hover {
  outline: none;
}

.Cad-Input {
  display: block;
  width: 100%;
  margin-bottom: 2rem;
  padding: 20px 18px 18px 45px;
  border: 1px solid var(--Myan-Orange);
  border-radius: 0;
  background: 15px center / 15px no-repeat var(--Magno-Finish);
  /* Estilo da imagem de fundo */
  font-family: var(--Font-Founders);
  font-size: 18px;
}

select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

select option {
  padding: 10px 0;
}

select::-ms-expand {
  display: none;
}

/* Estilo para o botão de envio do formulário */
input[type="submit"] {
  display: block;
  width: 100%;
  margin: 1.5rem 0;
  font-family: var(--Font-Mono-Medium);
  padding: 1.2rem;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 0;
  color: var(--Myan-Orange);
  background: var(--Ermine-White);
}

/* Estilo para interações com o botão de envio do formulário */
input[type="submit"]:active,
input[type="submit"]:focus,
input[type="submit"]:visited,
input[type="submit"]:hover {
  background: var(--Nardo-Grey);
  color: var(--Ermine-White);
  transition: .2s;
}

/* Estilo para botões e botão de envio do formulário */
button,
input[type="submit"] {
  cursor: pointer;
}

/* Estilo para o contêiner de layout em grade */
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  width: 100%;
}

.Entrar-Form {
  grid-template-areas: "centerLeft centerRight";
}

/* Estilo para seções dentro do contêiner em grade */
.sct {
  display: flex;
  align-items: center;
  justify-content: center;
  background: center center / cover no-repeat;
}

/* Estilo para a seção de login */
.login {
  grid-area: centerRight;
  background: var(--Magno-Finish);
}

/* Estilo para o formulário dentro da seção de login */
.login>form {
  width: 500px;
  margin: 0 3rem;
}

/* Design responsivo para telas menores */
@media (max-width: 768px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(20%, 80vmax);
    grid-template-areas: "centerRight";
  }

  .brand {
    display: none;
  }

  .login>form {
    width: 100%;
    margin: 2rem 1.2rem 2rem;
  }
}
</style>