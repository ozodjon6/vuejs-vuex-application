<template>
	<h1>Home page</h1>
</template>

<script>
export default {
	name: "HomeView",
	computed: {
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
	}
}
</script>

<style scoped>

</style>
