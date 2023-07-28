<template>
	<div>
    <div class="row">
      <Loader v-if="isLoading"/>
      <ArticleCard v-else v-for="article in data" :key="article.id" :article="article"/>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import ArticleCard from "@/components/ArticleCard.vue";
import Loader from "@/ui-components/Loader.vue";

export default {
	name: "HomeView",
  components: {
    Loader,
    ArticleCard
  },
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
