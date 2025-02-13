<template>
  <div class="search-bar">
    <input
        type="text"
        placeholder="Search for a Movie..."
        class="search"
        @input="searchInput"
        @keydown.enter="search"
    />
  </div>
</template>

<script>
export default {
  name: "MovieSearch",
  methods: {
    searchInput(e) {
      this.$emit("searchInput", e);
    },
    search(e) {
      this.$emit("search", e);
    },
  },
};
</script>

<style scoped>

</style>