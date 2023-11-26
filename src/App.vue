<template>
  <div id="app">

    <div class="links">
      <router-link to="/cadastrar">Cadastrar</router-link>
      <router-link to="/home"> - Home</router-link>
      <router-link to="/login"> - Login</router-link>
      <router-link to="/AdmCategorias"> - Categorias</router-link>
      <router-link to="/AdmListagem"> - Post</router-link>
      <router-link to="/AdmPost"> - PublicarPost</router-link>
    </div>
    <router-view />

  </div>
</template>
 
<script>

export default {

  mounted() {
  },
  components: {
  },
};
</script>
 
<style>
.links{
  position: absolute;
  z-index: 999;
}
</style>