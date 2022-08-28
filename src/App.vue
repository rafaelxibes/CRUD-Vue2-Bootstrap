<template>
  <div id="app">
    <nav-bar />
    <router-view @myEvent="getId" />
    <messages-alert :show="alertMessage" />
    <modal-alert :id="id" />
  </div>
</template>

<script>
import NavBar from "./components/Shared/NavBar.vue";
import MessagesAlert from "./components/Shared/MessagesAlert.vue";
import ModalAlert from "./components/Shared/ModalAlert.vue";
export default {
  components: { NavBar, MessagesAlert, ModalAlert },
  data() {
    return {
      alertMessage: false,
      id: "",
    };
  },
  methods: {
    getId(id) {
      this.id = id;
    },
  },
};
</script>

<style>
</style>