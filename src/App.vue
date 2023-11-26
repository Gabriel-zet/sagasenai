<template>
  <div id="app">
    <router-link to="/cadastrarAdm" v-if="isAdmin">Cadastrar</router-link>
    <router-link to="/home" v-if="isAdmin"> - Home</router-link>
    <router-link to="/loginAdm" v-if="isAdmin"> - Login</router-link>
    <router-link to="/AdmCategorias" v-if="isAdmin"> - Categorias</router-link>
    <router-link to="/AdmListagem" v-if="isAdmin"> - Post</router-link>
    <router-link to="/AdmPost" v-if="isAdmin"> - PublicarPost</router-link>
    <router-view />

    <h4>
      DSPI - SENAI AL SERVIÇO NACIONAL DE APRENDIZAGEM INDUSTRIAL - DEPARTAMENTO
      REGIONAL DE ALAGOAS
    </h4>
  </div>
</template>
 
 <script>

export default {
  computed: {
    isAdmin() {
      // Vuex
      const vuexUser = this.$store.getters['user/getUser'];
      if (vuexUser && vuexUser.isAuthenticated === true && vuexUser.isAdmin === true) {
        return true;
      }
      
      const storedUser = JSON.parse(window.localStorage.getItem('user'));
      return storedUser && storedUser.isAuthenticated === true && storedUser.isAdmin === true;
    },
  },
};
 </script>
 
 <style>
</style>