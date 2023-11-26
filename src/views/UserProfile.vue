<template>
  <div>
    <h2>Perfil do Usuário</h2>
    <div v-if="user">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
    <div v-else>
      <p>Usuário não autenticado.</p>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      user: {
        email: "",
        id: "",
        instituto: "",
      },
    };
  },
  created() {
    const userId = Cookies.get("userId");

    if (userId) {
      axios
        .get(`http://localhost:12345/user/${userId}`)
        .then((response) => {
          console.log("Resposta da API:", response);
          this.user = response.data; // Ajuste aqui
        })
        .catch((error) => {
          console.error("Erro ao obter informações do usuário:", error);
        });
    } else {
      console.error("userId não está definido.");
    }
  },
};
</script>

<style>
</style>