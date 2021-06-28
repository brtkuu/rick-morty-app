<template>
  <div class="about">
    <characters-table :charactersArray="characters" />
  </div>
</template>
<script>
import CharactersTable from '../components/CharactersTable.vue';
import axios from "axios";
import { mapState } from 'vuex';

export default {
  components: { CharactersTable },
  name: 'Characters',
  data() {
    return {
      characters: [],
      page: 1,
      allPages: 0
    }
  },
  computed: mapState(['search']),
  watch: {
    search(newValue, oldValue) {
      this.page = 1;
      this.getData();
    }
  },
  methods: {
    async getData() {
      const ids = localStorage.favorites.substring(0, localStorage.favorites.length - 1);
      console.log(`ids: ${ids.split(",")}`);
      const data = (await axios({
      url: 'https://rickandmortyapi.com/graphql',
      method: 'post',
      data: {
        query: `query {
                  charactersByIds(ids: [${ids.split(",")}]) {
                      id
                      name
                      status
                      gender
                      species
                      image
                      episode {
                        episode
                      }
                    }
}`
      }
    })).data.data;
    console.log(data);
    this.characters = data.charactersByIds;
    // this.allPages = data.info.pages;
    }
  },
  mounted() {
    this.$store.state.search = "";
    this.getData();
  }
};
</script>

