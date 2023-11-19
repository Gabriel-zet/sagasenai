<template>
  <div id="app">
     <h1>{{ message }}</h1>
     <router-link to="/cadastrar">Cadastrar</router-link>
     <router-link to="/home"> - Home</router-link>
     <router-link to="/login"> - Login</router-link>
     <router-view/>
     
     <h4>DSPI - SENAI AL SERVIÇO NACIONAL DE APRENDIZAGEM INDUSTRIAL - DEPARTAMENTO REGIONAL DE ALAGOAS</h4>
  </div>
 </template>
 
 <script>

 export default {
  data() {
     return {
       message: ''
     };
  },
  mounted() {
     // Chama a API quando o componente é montado
     this.fetchData();
  },
  methods: {
     async fetchData() {
       try {
         const response = await fetch('http://localhost:12345/data');
         const data = await response.json();
         this.message = data.message;
       } catch (error) {
         console.error('Erro ao obter dados da API:', error);
       }
     }
  },
  components: {

  },
 };
 </script>
 
 <style>
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 }
 
 h1 {
  font-size: 2em;
  margin-bottom: 20px;
 }
 </style>