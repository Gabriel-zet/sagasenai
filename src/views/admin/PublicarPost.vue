<template>
  <div class="Adm-Dashboard">
    <AdmNavbar />


    <div class="Content-Publicar">
      <div class="mostrarCategorias">
        <ul>
          <li v-for="post in posts" :key="post.nome">{{ post.title }}</li>
        </ul>
      </div>

      
      <div class="postCreate">
        <form class="form-container" enctype='multipart/form-data'>
          <div class="upload-files-container">
            <div class="drag-file-area">
              <span class="material-icons-outlined upload-icon"> Carregue uma Capa </span>

              <label class="label">
                <span class="browse-files">
                  <input type="file" class="default-file-input" ref="fileInput" @change="handleFileChange" />
                  <span class="browse-files-text">Procurar arquivo</span>
                </span>
              </label>

            </div>

            <span class="cannot-upload-message"> <span class="material-icons-outlined">error</span> Please select a file
              first <span class="material-icons-outlined cancel-alert-button">cancel</span> </span>
            <div class="file-block">
              <div class="file-info"> <span class="material-icons-outlined file-icon">description</span> <span
                  class="file-name"> </span> | <span class="file-size"> </span> </div>
              <span class="material-icons remove-file-icon">delete</span>
              <div class="progress-bar"> </div>
            </div>
          </div>
        </form>

        <form action="" method="post" @submit.prevent="criarPost">

          <label for="title">title</label>
          <input class="Adm-Input" type="text" v-model="dadosCriar.title" placeholder="Digite no máximo 50 carácteres" />
          <label for="video">videoUrl</label>
          <input class="Adm-Input" type="text" v-model="dadosCriar.video"
            placeholder="Ex.: www.youtube.com/projetoinovador" />
          <label for="data">Data</label>
          <input class="Adm-Input" type="text" v-model="dadosCriar.data" placeholder="Ex.: 20/30/2024" />
          <label for="descricao">Descrição</label>
          <textarea class="Adm-Input width-textarea" v-model="dadosCriar.descricao"
            placeholder="Digite no máximo 250 carácteres"></textarea>

          <div class="Box-Inst">
            <div class="inst-btn">
              <label for="Instituição">Instituição</label>
              <div class="select-container">
                <select class="Adm-Input width-size" id="instituicao" name="instituicao" v-model="dadosCriar.instituicao"
                  required>
                  <option value="" disabled selected hidden>Selecione Uma</option>
                  <option value="Senai_Poço">Senai - Poço</option>
                  <option value="Senai_Benedito_Bentes">Senai - Benedito Bentes</option>
                  <option value="Senai_Arapiraca">Senai - Arapiraca</option>
                </select>
              </div>
            </div>

            <div class="cat-btn">
              <label for="Instituição">Categoria</label>
              <select class="Adm-Input width-size" v-model="dadosCriar.categoria" required>
                <option value="" disabled selected>Selecione uma categoria</option>
                <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.nome">
                  {{ categoria.nome }}
                </option>
              </select>
            </div>
          </div>

          <div class="Box-select Flex-d">
            <div class="winner-btn">
              <label for="data">ganhador</label>
              <input class="Adm-Input" type="text" v-model="dadosCriar.ganhador" />
            </div>
            <div class="votos-sec">
              <label for="data">votos</label>
              <input class="Adm-Input" type="text" v-model="dadosCriar.votos" />
            </div>
          </div>

          <div class="btn-criar">
            <button class="Adm-btn" type="submit">Criar</button>
          </div>
        </form>
      </div>
    </div>


  </div>
</template>

<script>
import AdmNavbar from '../../components/AdmNavbar.vue';
import axios from "axios";

export default {
  data() {
    return {
      categorias: [],
      dadosCriar: {
        title: "",
        video: "",
        data: "",
        descricao: "",
        instituicao: "",
        selectedFile: null,
        fileDisplay: {
          name: '',
          size: '',
        },
        categoria: this.categorias,
        ganhador: 0,
        votos: 0,
      },
    };
  },
  components: {
    AdmNavbar
  },
  mounted() {
    this.listarCategorias();
  },
  methods: {
    criarPost() {
      axios
        .post("http://localhost:12345/admin/criarPost", this.dadosCriar)
        .then((response) => {
          console.log("Postagem Criada", response.data);
        })
        .catch((err) => {
          console.warn("Create error:", err);
        });
    },

    listarCategorias() {
      axios
        .get("http://localhost:12345/admin/listarCategorias")
        .then((response) => {
          this.categorias = response.data.categorias;
          console.log(this.categorias);
        })
        .catch((err) => {
          console.warn("Erro ao obter categorias:", err);
        });
    },
    handleFileChange() {
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];

      if (file) {
        // Atualiza o estado com as informações do arquivo selecionado
        this.dadosCriar.selectedFile = file;
        this.dadosCriar.fileDisplay.name = file.name;
        this.dadosCriar.fileDisplay.size = this.formatFileSize(file.size);

        // Exibe a imagem no elemento upload-files-container
        this.displayImage();
      }
    },
    formatFileSize(bytes) {
      const kilobyte = 1024;
      return bytes < kilobyte
        ? bytes + ' B'
        : (bytes / kilobyte).toFixed(2) + ' KB';
    },
    displayImage() {
      const reader = new FileReader();
      const uploadContainer = document.querySelector('.upload-files-container');

      reader.onload = function (e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.classList.add('uploaded-image');

        // Limpa o conteúdo existente e adiciona a imagem
        uploadContainer.innerHTML = '';
        uploadContainer.appendChild(imgElement);
      };

      // Lê a imagem como uma URL de dados
      reader.readAsDataURL(this.dadosCriar.selectedFile);
    },
  },
};
</script>

<style>
.upload-files-container {
  background-color: var(--Ermine-White);
  width: 600px;
  padding: 30px 60px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.upload-files-container img {
  width: 100%;
  height: 400px;
  border-radius: 40px;
  object-fit: cover;
}

.drag-file-area {
  border: 2px dashed var(--Nardo-Grey);
  border-radius: 40px;
  margin: 10px 0 15px;
  padding: 60px 50px;
  height: 250px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.drag-file-area .upload-icon {
  font-size: 50px;
}

.drag-file-area h3 {
  font-size: 26px;
  margin: 15px 0;
}

.drag-file-area label {
  font-size: 19px;
}

.drag-file-area label .browse-files-text {
  color: var(--Nardo-Grey);
  font-weight: bolder;
  cursor: pointer;
}

.browse-files span {
  position: relative;
  top: -25px;
}

.default-file-input {
  opacity: 0;
}

.cannot-upload-message {
  background-color: #ffc6c4;
  font-size: 17px;
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 5px 10px 5px 30px;
  border-radius: 5px;
  color: #BB0000;
  display: none;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.cannot-upload-message span,
.upload-button-icon {
  padding-right: 10px;
}

.cannot-upload-message span:last-child {
  padding-left: 20px;
  cursor: pointer;
}

.file-block {
  color: #f7fff7;
  background-color: #7b2cbf;
  transition: all 1s;
  width: 390px;
  position: relative;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 15px;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
}

.file-info {
  display: flex;
  align-items: center;
  font-size: 15px;
}

.file-icon {
  margin-right: 10px;
}

.file-name,
.file-size {
  padding: 0 3px;
}

.remove-file-icon {
  cursor: pointer;
}

.progress-bar {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 4.5%;
  width: 0;
  height: 5px;
  border-radius: 25px;
  background-color: #4BB543;
}

.upload-button {
  font-family: 'Montserrat';
  background-color: #7b2cbf;
  color: #f7fff7;
  display: flex;
  align-items: center;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  margin: 10px;
  padding: 7.5px 50px;
  cursor: pointer;
}


.postCreate {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

form {
  width: 600px;
}

.Flex-d div {
  margin-right: 19px;
}

.Content-Publicar {
  display: flex;
  width: 83%;
  justify-content: space-between;
  color: var(--Magno-Finish);
  flex-direction: column;
}

.Flex-d {
  display: flex;
}

.width-size {
  width: 100%;
}

.width-textarea {
  width: 96.5%;
}

.Adm-btn {
  background: var(--Myan-Orange);
  padding: 15px 70px;
  font-size: 18px;
  border-radius: 50px;
}

.btn-criar {
  margin: 20px 0;
}
</style>
