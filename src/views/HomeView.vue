<template>
	<h1>Home page</h1>
  {{data}}
</template>

<script>
import {mapState} from 'vuex';
export default {
	name: "HomeView",
	computed: {
    ...mapState({
      data: state => state.articles.data,
      isLoading: state => state.articles.isLoading,
      error: state => state.articles.error
    }),
		counter() {
			return this.$store.state.count;
		}
	},
	methods: {
		decrementHandler() {
			return this.$store.commit('increment');
		},
		incrementhandler() {
			return this.$store.commit('decrement')
		}
	},
  mounted() {
    this.$store.dispatch('articles')
  }
}
</script>

<style scoped>

</style>
