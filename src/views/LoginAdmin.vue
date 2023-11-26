<template>
  <div id="body">
    <div id="container">
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
    };
  },
  methods: {
    fazerLogin() {
      const dadosDoFormulario = {
        email: this.dadosDoFormulario.email,
        password: this.dadosDoFormulario.password,
      };

      axios
        .post("http://localhost:12345/admin/login", dadosDoFormulario)
        .then((response) => {
          console.log("Login bem-sucedido!", response.data);
          document.cookie = `token=${response.data.token}; path=/`;
          document.cookie = `loggedIn=true; path=/`;
          this.$store.commit("user/setUser", {
            ...response.data.user,
            isAuthenticated: true,
            isAdmin: response.data.isAdmin
          });
          this.$store.commit("setAdminStatus", response.data.isAdmin);
          console.log("Redirecionando para /AdmListagem");
          this.$router.push({ name: "AdmListagem" });
        })
        .catch((error) => {
          console.error("Erro durante o login:", error.response.data);
        });
    },
  },
};
</script>
  
  <style>
/* #body {
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
} */
</style>
  