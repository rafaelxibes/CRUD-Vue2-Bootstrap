<template>
  <div>
    <div class="text-center">
      <h3 class="display-4">Adicionar Filme</h3>
    </div>

    <div class="container">
      <form class="row" @submit.prevent="submit">
        <div class="mb-3">
          <label for="formInputTitulo" class="form-label">
            Titulo do Filme
            <span class="text-danger">*</span>
          </label>
          <input
            required
            type="text"
            class="form-control"
            id="formInputTitulo"
            placeholder="Nome do filme"
            v-model="formulario.titulo"
          />
          <!-- <div class="invalid-feedback">{{errosMsg}}</div> -->
        </div>
        <div class="mb-3">
          <label for="formInputDirector" class="form-label">
            Diretor
            <span class="text-danger">*</span>
          </label>
          <input
            required
            type="text"
            class="form-control"
            id="formInputDirector"
            placeholder="Nome do diretor"
            v-model="formulario.diretor"
          />
        </div>
        <div class="row">
          <div class="mb-3 col-md-4">
            <label for="formInputGenre" class="form-label">Gênero</label>
            <input
              type="text"
              class="form-control"
              id="formInputGenre"
              placeholder="Gênero do filme"
              v-model="formulario.genero"
            />
          </div>
          <div class="mb-3 col-md-3">
            <label for="formInputDuration" class="form-label">
              Duração em minutos
              <span class="text-danger">*</span>
            </label>
            <input
              required
              type="number"
              class="form-control"
              id="formInputDuration"
              v-model="formulario.duracao"
            />
          </div>
        </div>
        <div class="d-flex justify-content-between">
          <router-link role="button" class="btn btn-dark" to="/">voltar</router-link>
          <button type="submit" class="btn btn-success">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FormFilmes",
  components: {},
  data() {
    return {
      formulario: {
        titulo: "",
        diretor: "",
        genero: "",
        duracao: null,
      },
      errorMsg: {},
    };
  },
  methods: {
    submit() {
      axios
        .post("/Filme", this.formulario)
        .then(function () {
          window.open("/", "_self");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>