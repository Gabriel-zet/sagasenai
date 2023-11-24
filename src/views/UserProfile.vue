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
export default {
  computed: {
    // eslint-disable-next-line
    user() {
      return this.$store.getters["user/getUser"];
    },
  },
};
</script>
