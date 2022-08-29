<template>
  <div id="app">
    <nav-bar />
    <router-view @myEvent="getId" @reloaded="showMessage" />
    <messages-alert :show="alertMessage" />
    <modal-alert :id="id" @reloaded="showMessage" />
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
    showMessage() {
      this.alertMessage = true;
      setInterval(() => {
        this.alertMessage = false;
      }, 3800);
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
};
</script>

<style>
</style>