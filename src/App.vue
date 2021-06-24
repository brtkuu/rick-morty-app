<template>
  <div class="app">
    <div class="banner-top__container">
    <img class="banner-top__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1280px-Rick_and_Morty.svg.png" alt="rick&mortylogo" />
    <input class="banner-top__input" type="text" placeholder="Start typing to search..." />
    </div>
    <div id="nav">
      <router-link to="/">All characters</router-link> |
      <router-link to="/about">Favorites</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
.app {
  max-width: 1200px;
  margin: auto;
  font-family: 'Poppins', sans-serif;
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
    max-width: 1200px;
    margin: auto;
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
</style>
