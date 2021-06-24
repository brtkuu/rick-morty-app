<template>
  <div class="characters__container">
    <div class="characters__table-info">Photo</div>
    <div class="characters__table-info">Character ID</div>
    <div class="characters__table-info">Name</div>
    <div class="characters__table-info">Gender</div>
    <div class="characters__table-info">Species</div>
    <div class="characters__table-info">Last Episode</div>
    <div class="characters__table-info">Add To Favorites</div>
  </div>
</template>

<script>
export default {
  name: 'Allcharacters',
};
</script>
<style lang="scss">
  .characters{
    &__container{
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      justify-content: center;
    }
    &__table-info{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background-color: #E5EAF4;
    }
  }
</style>
