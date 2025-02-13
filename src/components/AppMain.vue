<template>
  <div class="App">
    <main>
      <MovieSearch @searchInput="searchInput"
                   @search="search" />
      <div class="filter-bar">
        <label for="year">Filter by Year:</label>
        <input id="year" v-model="filterYear" placeholder="Enter year" @input="applyFilter" />
      </div>
      <div class="items container-content">
        <div
            v-for="movie in filteredResults"
            :key="movie.imdbID"
            class="item"
            @click="openDetail(movie.imdbID)"
        >
          <img :src="movie.Poster" alt="Movie Poster" />
          <h3>{{ movie.Title }} ({{ movie.Year }})</h3>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import MovieSearch from "@/components/MovieSearch.vue";

export default {
  name: "App",
  components: {
    MovieSearch,
  },
  data() {
    return {
      s: "",
      results: [],
      filterYear: "",
      apiurl: "https://www.omdbapi.com/?apikey=52fc80df",
    };
  },
  mounted() {
    this.fetchInitialMovies();
  },
  methods: {
    fetchInitialMovies() {
      const keywords = ["drama", "criminal", "action"];
      Promise.all(keywords.map(async keyword => {
        return axios(this.apiurl + "&s=" + keyword)
            .then(({ data }) => data.Search || [])
            .catch(error => {
              console.error("Error fetching movies:", error);
              return [];
            });
      })).then(results => {
        this.results = results.flat();
      });
    },
    searchInput(e) {
      this.s = e.target.value;
    },
    search(e) {
      if (e.key === "Enter") {
        axios(this.apiurl + "&s=" + this.s)
            .then(({ data }) => {
              this.results = data.Search || [];
            });
      }
    },
    applyFilter() {
      this.$forceUpdate();
    },
    openDetail(id) {
      this.$router.push({ name: 'details', params: { id } });
    },
  },
  computed: {
    filteredResults() {
      return this.results
          .filter(movie => movie.Title.toLowerCase().includes(this.s.toLowerCase()))
          .filter(movie => !this.filterYear || movie.Year.includes(this.filterYear));
    }
  },
};
</script>

<style scoped>

</style>
