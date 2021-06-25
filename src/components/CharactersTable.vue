<template>
  <section>
    <loading class="characters__loading" v-if="!charactersArray.length" />
    <div v-if="charactersArray.length" class="characters__container">
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
            <div class="characters__table-info"><img :class="{dead: item.status === 'Dead', 'characters__table-image': true}" :src="item.image" /><img class="characters__table-image-dead" v-if="item.status === 'Dead'" src="../assets/ribbon.png" /></div>
            <div class="characters__table-info">{{ item.id }}</div>
            <div class="characters__table-info">{{ item.name }}</div>
            <div class="characters__table-info"><img class="characters__gender-img" :src="getGenderImg(item.gender)" alt="" />{{ item.gender }}</div>
            <div class="characters__table-info">{{ item.species }}</div>
            <div class="characters__table-info">{{item.episode[item.episode.length -1].episode}}</div>
            <div class="characters__table-info"><i @click="addToFavorites(item.id)" :class="{star: true}"></i></div>
        </div>
    </div>
  </section>
</template>

<script>
import Loading from './Loading.vue';
export default {
    components: { Loading },
  name: 'Allcharacters',
  props: {charactersArray: Array},
  created() {
      console.log(this.$props.charactersArray);
  },
  methods: {
    getGenderImg(gender) {

      if(gender === 'Male'){
        return require('../assets/male.png');
      } 
      if(gender === 'Female'){
        return require('../assets/female.png');
      }
      if(gender === 'Unknown'){
        return require('../assets/unknown.png');
        
      }
      return require('../assets/genderless.png');
    },
    addToFavorites(id) {
      if(!localStorage.favorites){
        localStorage.setItem("favorites", id + ",");
      } else {
        if(!localStorage.favorites.includes(id)){
          localStorage.favorites += `${id},`; 
        }
      }
    }
  }
};
</script>
<style lang="scss">
  .characters{
    &__loading {
      left: 50%;
      transform: translateX(-50%);
    }
    &__container{
      min-height: 70vh;
    }
    &__row{
      min-height: 40px;
      margin-top: 2px;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      justify-content: center;
      border-bottom: 1px solid #E5EAF4;
    }
    &__table-info{
       position: relative;
      display: flex;
      align-items: center;
      justify-content: start;
      margin-left: 15px;
    }
    &__table-image{
        width: 43px;
        height: 68px;
        padding: 5px;
        &-dead{
          position: absolute;
          height: 20px;
          width: 20px;
          top:0%;
          left: 43px;
        }
    }
    &__table-favorite{
        height: 43px;
        width: 43px;
    }
    &__table-favorite{
        height: 43px;
        width: 43px;
    }
    &__top-info {
        margin-top: 18px;
        background-color: #E5EAF4;
    }
    &__gender-img{
      height: 24px;
      width: 24px;
      margin-right: 10px;
    }
  }
  .star {
  position: relative;
  
  display: inline-block;
  width: 0;
  height: 0;
  
  margin-left: .9em;
  margin-right: .9em;
  margin-bottom: 1.2em;
  
  border-right:  .3em solid transparent;
  border-bottom: .7em  solid rgb(223, 223, 223);
  border-left:   .3em solid transparent;

  /* Controlls the size of the stars. */
  font-size: 14px;
  
  &:before, &:after {
    content: '';
    
    display: block;
    width: 0;
    height: 0;
    
    position: absolute;
    top: .6em;
    left: -1em;
  
    border-right:  1em solid transparent;
    border-bottom: .7em  solid rgb(223, 223, 223);
    border-left:   1em solid transparent;
  
    transform: rotate(-35deg);
  }
  
  &:after {  
    transform: rotate(35deg);
  }
}
.star:hover{
    border-bottom: .7em  solid #11B0C8;
    &:before, &:after {
        border-bottom: .7em  solid #11B0C8;
    }
}
.dead{
  filter: grayscale(100%);
}
</style>
