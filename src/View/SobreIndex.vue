<template>
<div class="container mt-5">
    <b-card header="Sobre">
      <b-media class="d-flex align-items-center">
        <template #aside>
          
          <b-img
            thumbnail
            rounded="circle"
            src="https://picsum.photos/100/100/?image=58"
            alt="Image"
          ></b-img>
        </template>
        <p class="mb-2">Projeto desenvolvido usando Vue.js na versão 2 + BootstrapVue</p>
        <p class="mb-2">Desenvolvido por RafaelXibes</p>
          <b-button href="https://github.com/rafaelxibes">GitHub</b-button>
      </b-media>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "SobreIndex",
};
</script>

<style>
</style>