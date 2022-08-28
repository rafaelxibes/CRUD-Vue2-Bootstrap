<template>
  <div>
    <div class="text-center">
      <h1 class="display-4">Listagem de filmes</h1>
    </div>

    <div class="container">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end p-2">
        <router-link role="button" class="btn btn-primary" to="/create">Adicionar novo filme</router-link>
      </div>
      <b-table
        rounded
        id="my-table"
        :bordered="false"
        :borderless="false"
        :outlined="true"
        :hover="true"
        :caption-top="false"
        :table-variant="'light'"
        :head-variant="'light'"
        :per-page="perPage"
        :current-page="currentPage"
        :items="filmes"
        :fields="fields"
      >
        <template #cell(botoes)="data">
          <div class="btn-group text-center" role="group">
            <router-link role="button" class="btn btn-warning" :to="'/edit/' + data.item.id">Editar</router-link>
            <b-button v-b-modal.modal-1 class="btn btn-danger" @click="getId(data.item.id)">Deletar</b-button>
          </div>
        </template>
      </b-table>
      <div class="d-flex justify-content-center">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          
          aria-controls="my-table"
        ></b-pagination>
      </div>
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
      perPage: 8,
      currentPage: 1,
      fields: ["id", "titulo", "diretor", "duracao", "botoes"],
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
  computed: {
    rows() {
      return this.filmes.length;
    },
  },
  created() {
    this.getList();
  },
};
</script>