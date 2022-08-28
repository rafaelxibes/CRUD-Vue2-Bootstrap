<template>
  <div class="p-2 d-flex justify-content-end" v-if="this.show">
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Sucesso</strong>
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      msg: "Operação realizada com sucesso!",
    };
  },
};
</script>