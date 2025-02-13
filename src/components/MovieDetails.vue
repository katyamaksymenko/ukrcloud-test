<template>
  <div v-if="movie">
    <h1 v-if="movie.Title">{{ movie.Title }}</h1>
    <img v-if="movie.Poster" :src="movie.Poster" alt="Movie Poster" />
    <p v-if="movie.Plot">{{ movie.Plot }}</p>
  </div>
  <div v-else>
    <p>Loading movie details...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MovieDetails',
  data() {
    return {
      movie: null ,
      Title: '',
      Poster: '',
      Plot: ''
    };
  },
  created() {
    const movieId = this.$route.params.id;
    if (!movieId) {
      console.error("No movie ID provided!");
      return;
    }
    axios(`https://www.omdbapi.com/?apikey=52fc80df&i=${movieId}`)
        .then(({ data }) => {
          this.movie = data;
        })
        .catch(error => {
          console.error("Error fetching movie details:", error);
        });
  }
};
</script>
