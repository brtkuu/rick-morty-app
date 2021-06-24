<template>
  <div class="app">
    <div class="banner-top__container">
    <img class="banner-top__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png" alt="rick&mortylogo" />
    <input v-model="$store.state.search" class="banner-top__input" type="text" placeholder="Start typing to search..." />
    </div>
    <div id="nav">
      <router-link to="/">All characters</router-link>
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style>

</style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
.app {
  max-width: 1250px;
  margin: auto;
  font-family: 'Poppins', sans-serif;
  color: #8c8e90;
}
.banner-top{
  &__logo{
    height: 70px;
    width: 240px;
  }
  &__container {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 150px;
  }
  &__input {
    height: 40px;
    width: 500px;
    font-size: 18px;
    border-radius: 10px;
    padding: 10px;
    margin-left: 50px;
    font-weight: bold;
  }
}
  a {
    text-decoration: none;
    color: rgb(129, 129, 129);
    margin-right: 50px;
  }
  a:hover{
    filter: brightness(0.5);
  }
  .router-link-exact-active {
    color: #11B0C8;
    text-decoration: underline;
    padding: 3px;
    font-weight: bolder;
  }
</style>
