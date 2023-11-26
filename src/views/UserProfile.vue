<template>
  <header className="Header-top">
    <MainNavbar />
  </header>

  <div class="Hall-user">
    <div class="backg-user"></div>

    <div class="Content-User">
      <div class="Name-Pefil-Photo">
        <h1>A</h1>
      </div>

      <div class="User-Perfil">
        <div v-if="user" class="User-Info">
          <div class="Name-User Title-box">
            <span>Nome:</span>
            <strong>{{ user.id }}</strong>
          </div>
          <div class="Inst-User Title-box">
            <span>Instituição:</span>
            <strong>{{ user.email }}</strong>
          </div>
        </div>
        <div v-else class="User-Info">
          <p>Usuário não autenticado.</p>
        </div>
      </div>
    </div>

    <div class="Btn-end">
      <div class="Logout-User">
        <button class='Logout-Button Col-Button'>
          <div class="content-button">
            <span class='Text-Button'>FAZER LOGOUT</span>
            <img src="/logout-right-3.svg" alt="">
          </div>
        </button>
      </div>

      <div class="Delete-User">
        <button class='Delete-Button Col-Button'>
          <div class="content-button">
            <span class='Text-Button'>DELETAR CONTA</span>
            <img src="/Lixo.svg" alt="">
          </div>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import MainNavbar from '../components/MainNavbar.vue';

export default {
  computed: {
    // eslint-disable-next-line
    user() {
      return this.$store.getters["user/getUser"];
    },
  },
  components: {
    MainNavbar
  }
};
</script>

<style>
.backg-user {
  width: 100%;
  height: 300px;
  background: linear-gradient(90deg, #D2672B 0%, #3E1A83 100%);
}

.Hall-user {
  background-color: var(--Magno-Finish);
}

.Name-Pefil-Photo {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 125px;
  top: 0;
}

.Content-User {
  position: relative;
  height: 80vh;
}

.Name-Pefil-Photo h1 {
  background-color: var(--Ermine-White);
  font-size: 140px;
  color: var(--Magno-Finish);
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.Title-box {
  display: flex;
  flex-direction: column;
  margin-right: 70%;
}

.Title-box span {
  font-size: 20px;
  color: var(--Silver-Birch);
}

.Title-box strong {
  font-size: 36px;
}

.User-Info {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
}

.User-Perfil {
  top: 163px;
  position: absolute;
  margin: 0 50px;
  width: 40%;
}

.Logout-Button,
.Delete-Button {
  background: transparent;
  margin: 0 0px 27px 30px;
}

.Btn-end {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 768px) {

  .Logout-Button,
  .Delete-Button {
    margin: 0px 10px 27px 10px;
  }

  .Text-Button {
    font-size: 14px;
  }

  .Name-Pefil-Photo h1 {
    font-size: 50px;
    width: 3em;
    height: 3em;
  }

  .Name-Pefil-Photo {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 86px;
    top: 0;
  }

  .Btn-end {
    justify-content: center;
  }
}
</style>
