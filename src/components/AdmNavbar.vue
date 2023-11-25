<template>
    <div class="DashBoard-Nav">
        <div class="nav-adm">
            <ul>
                <li><router-link to="/AdmListagem">Listagem</router-link></li>
                <li><router-link to="/AdmPost">Publicar</router-link></li>
                <li><router-link to="/AdmCategorias">Categorias</router-link></li>
            </ul>
        </div>

        <div class="adm-perfil">
            <img class="perfil-adm" :src="admIcon" alt="Adm-icon">
            <h1>Saga Senai - AL</h1>
            <img class="logout-adm" :src="logoutIcon" alt="Adm-Logout">
        </div>
    </div>
</template>
  
<script>
  import admIcon from '@/assets/Adm.svg';
  import logoutIcon from '@/assets/Logout.svg';

  
  export default {
    name: 'AdmNavbar',
    data() {
      return {
        admIcon,
        logoutIcon,
    };
  },
  };
</script>
  
<style scoped>

.DashBoard-Nav{
    background-color: var(--Silver-Birch);
    color: var(--Ermine-White);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.adm-perfil{
    display: flex;
    align-items: center;
    padding: 20px;
}

.adm-perfil img{
    margin: 0 10px;
}

.logout-adm{
    width: 20px;
}

.perfil-adm{
    width: 50px;
}

.adm-perfil h1 {
    font-size: 18px;
}

.nav-adm {
    margin: 50px 20px;
}

.nav-adm ul {
    list-style: none;
}

.nav-adm li {
    margin: 15px 0;
}

.nav-adm li a {
    font-size: 18px;
}

</style>
  