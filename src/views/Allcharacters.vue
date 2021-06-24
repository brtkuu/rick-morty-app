<template>
  <div class="characters">
    <characters-table :charactersArray="characters"/>
  </div>
</template>

<script>
import CharactersTable from '../components/CharactersTable.vue';
import axios from "axios";

export default {
  components: { CharactersTable },
  data() {
    return {
      characters: [],
      pages: 1
    }
  },
  name: 'Characters',
  async mounted(){

    console.log(this.$store.state.search);

    const data = (await axios({
      url: 'https://rickandmortyapi.com/graphql',
      method: 'post',
      data: {
        query: `query {
                  characters(page: ${this.pages}, ${this.$store.state.search ? `filter: { name: "${this.$store.state.search}" }`:``}) {
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
    this.pages = data.info.pages;
  }
};
</script>
