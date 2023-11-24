<template>
    <div class="Menu-Nav">
      <div class="Menu-Logo">
        <router-link to="/home" class="Logo-DSPI">DSPI - SENAI AL</router-link>
      </div>
      <div class="Menu-Icons">
        <router-link to="/AdmListagem"><div class='Icon-Border'><img :src="searchIcon" class="SearchIcon HeaderIcon" alt="Search Icon" /></div></router-link>
        <router-link to="/login"><div class='Icon-Border'><img :src="perfilIcon" class="SearchIcon HeaderIcon" alt="Profile Icon" /></div></router-link>
      </div>
    </div>
</template>
  
<script>
  import searchIcon from '@/assets/Search.svg';
  import perfilIcon from '@/assets/Perfil.svg';

  
  export default {
    name: 'MainNavbar',
    data() {
      return {
      searchIcon,
      perfilIcon,
    };
  },
  };
</script>
  
<style scoped>
  /* HEADER */

a{
    text-decoration: none;
    color: #FFF;
}

.Menu-Nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 1364px;
    height: 54px;
}

.HeaderIcon{
    display: flex;
    width: 20px;
    padding: 1.2vw;
} 

.HeaderIcon img {
    max-width: 100%;
    height: auto;
}
  

.Menu-Icons {
    display: flex;
    align-items: center;
}

.Icon-Border {
    border-radius: 50%;
    border: 1px solid var(--Ermine-White);
    margin-left: 10px;
    transition: .2s;
}

.Icon-Border:hover{
    opacity: .5;
}

.Menu-Logo{
    color: var(--Ermine-White);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

@media screen and (max-width: 768px) {
    .HeaderIcon {
      padding: 1em; 
    }
}
  
</style>
  