<template>
  <div>
    <div class="text-center">
      <h1 class="display-4">Listagem de filmes</h1>
    </div>

    <div class="container">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end p-2">
        <router-link role="button" class="btn btn-primary" to="/create">Adicionar novo filme</router-link>
      </div>

      <table class="table table-hover">
        <thead class="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome do Filme</th>
            <th scope="col">Diretor</th>
            <th scope="col">Gênero</th>
            <th scope="col">Duração</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody v-for="filme in filmes" :key="filme.id">
          <tr>
            <th scope="row">{{ filme.id }}</th>
            <td>{{ filme.titulo }}</td>
            <td>{{ filme.diretor }}</td>
            <td>{{ filme.genero }}</td>
            <td>{{ filme.duracao }} Minutos</td>
            <td>
              <div class="btn-group text-center" role="group">
                <router-link role="button" class="btn btn-warning" :to="'/edit/' + filme.id">Editar</router-link>
                <b-button v-b-modal.modal-1 class="btn btn-danger" @click="getId(filme.id)">Deletar</b-button>

                <!-- <router-link
                  role="button"
                  class="btn btn-danger"
                  :to="'/delete/' + filme.id"
                >Deletar</router-link>-->
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IndexFilmes",
  emits: ["myEvent"],
  data() {
    return {
      filmes: {},
    };
  },
  methods: {
    getList() {
      axios
        .get("/Filme")
        .then((response) => {
          this.filmes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getId(id) {
      this.$emit("myEvent", id);
    },
  },
  created() {
    this.getList();
  },
};
</script>