<template>
  <div id="body">
    <div id="container">
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
        <button id="submit" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
</template>
  
<script>
import Cookies from 'js-cookie';  // Corrigir a importação do módulo
import axios from "axios";

export default {
  data() {
    return {
      dadosDoFormulario: {
        nome: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    enviarFormulario() {
      const dadosDoFormulario = { ...this.dadosDoFormulario };
      const token = Cookies.get('token');  

      this.dadosDoFormulario.nome = "";
      this.dadosDoFormulario.email = "";

      axios
        .post("http://localhost:12345/admin/create", dadosDoFormulario, {
          headers: {
            'authorization': token 
          }
        })
        .then((response) => {
          console.log(response.data.message);
          this.$router.push({ name: "LoginAdm" });
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 403) {
            console.error(
              "Erro de permissão: Você não tem permissão para realizar esta ação."
            );
            // erro 403 (Forbidden)
          } else {
            console.error("Erro desconhecido ao enviar a solicitação.");
            // outros erros
          }
        });
    },
  },
};
</script>

  
  <style>
#body {
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

#container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#email,
#password {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
}
</style>
  
  
  