<template>
  <div class="characters">
    <characters-table :charactersArray="characters" />
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
      page: 1
    }
  },
  name: 'Characters',
  computed: mapState(['search']),
  watch: {
    search(newValue, oldValue) {
      this.getData();
    }
  },
  methods: {
    async getData() {
      console.log(this.$store.state.search);
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
    console.log(data);
    this.characters = data.results;
    }
  },
  async mounted(){
    this.getData();
  }
};
</script>
