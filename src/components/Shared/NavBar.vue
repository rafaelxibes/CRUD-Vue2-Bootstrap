<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            width="2em"
            viewBox="0 0 2041 2160"
            clip-rule="evenodd"
            fill-rule="evenodd"
          >
            <path d="m1397 271-370 642-371-642H64l963 1667 962-1667z" fill="#34495e" />
            <path d="M44 0h1952l-979 1696z" fill="#563d7c" fill-rule="nonzero" />
            <path d="m1633 392-612 1061L408 392H0l1021 1768L2041 392z" fill="#41b883" />
            <path
              d="M767 196h339c62 0 112 14 150 43 38 28 56 71 56 129 0 36-8 66-25 91s-42 44-74 58v2c43 9 75 29 98 61 22 31 33 71 33 118 0 28-5 53-15 77s-25 44-46 61c-21 18-47 31-80 41-32 11-71 16-116 16H767zm122 292h199c29 0 54-9 73-25 20-17 29-41 29-72 0-35-8-60-26-75-17-14-43-21-76-21H889zm0 305h216c37 0 66-10 86-29s31-46 31-81-10-61-31-80-49-28-86-28H889z"
              fill="#fff"
            />
          </svg>
          Bootstrap + Vue2
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :class="[this.$route.fullPath === '/' ? 'active' : '']" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="[this.$route.fullPath === '/create' ? 'active' : '']" to="/create">Adicionar novo filme</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="[this.$route.fullPath === '/sobre' ? 'active' : '']" to="/sobre">Sobre</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
</style>