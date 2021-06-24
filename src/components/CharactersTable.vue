<template>
    <div>
        <div class="characters__row characters__top-info">
            <div class="characters__table-info">Photo</div>
            <div class="characters__table-info">Character ID</div>
            <div class="characters__table-info">Name</div>
            <div class="characters__table-info">Gender</div>
            <div class="characters__table-info">Species</div>
            <div class="characters__table-info">Last Episode</div>
            <div class="characters__table-info">Add To Favorites</div>
        </div>
        <div class="characters__row" v-for="item in $props.charactersArray" :key="item.id">
            <div class="characters__table-info"><img class="characters__table-image" :src="item.image" /></div>
            <div class="characters__table-info">{{item.id}}</div>
            <div class="characters__table-info">{{item.name}}</div>
            <div class="characters__table-info">{{item.gender}}</div>
            <div class="characters__table-info">{{item.species}}</div>
            <div class="characters__table-info">Last Episode</div>
            <div class="characters__table-info"><img class="characters__table-favorite" src="../assets/not_favorite.png" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Allcharacters',
  props: {charactersArray: Array},
  created() {
      console.log(this.$props.charactersArray);
  }
};
</script>
<style lang="scss">
  .characters{

    &__row{
      min-height: 40px;
      margin-top: 2px;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      justify-content: center;
      border-bottom: 1px solid #E5EAF4;
    }
    &__table-info{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__table-image{
        width: 43px;
        height: 68px;
        padding: 5px;
    }
    &__table-favorite{
        height: 43px;
        width: 43px;
    }
    &__top-info {
        margin-top: 18px;
        background-color: #E5EAF4;
    }
  }
</style>
