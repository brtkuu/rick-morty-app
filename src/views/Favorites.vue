<template>
  <div class="about">
    <characters-table />
  </div>
</template>
<script>
import CharactersTable from '../components/CharactersTable.vue';

export default {
  components: { CharactersTable },
  name: 'Characters',
  mounted() {
    this.$store.state.search = "";
  }
};
</script>

