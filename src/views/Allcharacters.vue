<template>
  <div class="characters">
    <characters-table :charactersArray="characters" />
    <select class="characters__select" @change="changePage">
      <option v-for="(item, index) in allPages" :key="index+1">{{index+1}}</option>
    </select>
  </div>
</template>

<script>
import CharactersTable from '../components/CharactersTable.vue';
import axios from "axios";
import { mapState } from 'vuex';

export default {
  components: { CharactersTable },
  data() {
    return {
      characters: [],
      page: 1,
      allPages: 0
    }
  },
  name: 'Characters',
  computed: mapState(['search']),
  watch: {
    search(newValue, oldValue) {
      this.page = 1;
      this.getData();
    }
  },
  methods: {
    async changePage(event) {
      console.log(event.target.value);
      this.page = event.target.value;
      await this.getData();
    },
    async getData() {
       const data = (await axios({
      url: 'https://rickandmortyapi.com/graphql',
      method: 'post',
      data: {
        query: `query {
                  characters(page: ${this.page}, ${this.$store.state.search ? `filter: { name: "${this.$store.state.search}" }`:``}) {
                    info {
                      count
                      pages
                    }
                    results {
                      id
                      name
                      status
                      gender
                      species
                      image
                    }
                  }
                  location(id: 1) {
                    id
                  }
                  episodesByIds(ids: [1, 2]) {
                    id
                  }
}`
      }
    })).data.data.characters;
    this.characters = data.results;
    this.allPages = data.info.pages;
    }
  },
  async mounted(){
    this.getData();
  }
};
</script>
<style lang="scss">
  .characters{ 
    &__select{
      width: 60px;
      font-size: 20px;
      background: none;
      border: none;
      color: #11B0C8;
      margin: 10px 30px;
    }
    &__select:hover{
      filter: brightness(0.7);
      cursor: pointer;
    }
  }
</style>
