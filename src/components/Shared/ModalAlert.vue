<template>
  <b-modal
    id="modal-1"
    :header-bg-variant="headerBgVariant"
    :header-text-variant="headerTextVariant"
    :footer-bg-variant="footerBgVariant"
    :footer-text-variant="footerTextVariant"
    hide-header-close
    title="Aviso!"
  >
    <p class="my-4">Você deseja deletar este filmes?</p>

    <template #modal-footer="{ ok, cancel }">
      <b-button size="sm" variant="dark" @click="cancel()">Cancelar</b-button>
      <b-button size="sm" variant="danger" @click="ok(), excluir()">Excluir</b-button>
    </template>
  </b-modal>
</template>

<script>
import axios from "axios";
export default {
  emits: ["reloaded"],
  props: {
    id: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      headerBgVariant: "danger",
      headerTextVariant: "light",
      footerBgVariant: "light",
      footerTextVariant: "dark",
    };
  },
  methods: {
    excluir() {
      axios
        .delete("/Filme/" + this.id)
        .then(() => {
          this.$emit("reloaded");
          console.log("Filme deletado com sucesso!!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>