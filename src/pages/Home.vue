<template>
  <div class="section">
    <p class="title has-text-centered">
      Dashboard
    </p>
    <p class="has-text-centered">Welcome to jubelang</p>
    <!-- <div class="columns">
      <div class="column">
        <router-link tag="div" to="/peminatan" class="has-background-danger menu">
          <b-icon size="is-large" icon="book-open" />
          <p class="has-text-centered">Peminatan</p>
        </router-link>
      </div>
      <div class="column">
        <router-link tag="div" to="/pengguna" class="has-background-success menu">
          <b-icon size="is-large" icon="account-group" />
          <p class="has-text-centered">Pengguna</p>
        </router-link>
      </div>
      <div class="column">
        <router-link tag="div" to="/info" class="has-background-grey-light menu">
          <b-icon size="is-large" icon="information-variant" />
          <p class="has-text-centered">Hasil Rekomendasi</p>
        </router-link>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.menu {
  padding: 4rem;
  color: white !important;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  font-size: 15pt
}
.menu:hover {
  box-shadow: inset 0 0 0 2000px rgba(255, 255, 255, 0.144);
}
</style>