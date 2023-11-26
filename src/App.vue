<template>
  <div id="app">
    <router-link to="/cadastrar">Cadastrar</router-link>
    <router-link to="/home"> - Home</router-link>
    <router-link to="/login"> - Login</router-link>
    <router-link to="/AdmCategorias"> - Categorias</router-link>
    <router-link to="/AdmListagem"> - Post</router-link>
    <router-link to="/AdmPost"> - PublicarPost</router-link>
     <router-view/>

     <h4>DSPI - SENAI AL SERVIÇO NACIONAL DE APRENDIZAGEM INDUSTRIAL - DEPARTAMENTO REGIONAL DE ALAGOAS</h4>

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

 </style>