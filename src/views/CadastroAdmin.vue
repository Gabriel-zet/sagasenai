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
        const dadosDoFormulario = {...this.dadosDoFormulario};
  
        console.log("Dados do formulário:", this.dadosDoFormulario);
  
        this.dadosDoFormulario.nome = "";
        this.dadosDoFormulario.email = "";
  
        axios
          .post("http://localhost:12345/admin/create", dadosDoFormulario)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
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
  
  #submit {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  #submit:hover {
    background-color: #45a049;
  }
  </style>
  
  