<template>
  <div class="container">
      <Navbar/>
      <RouterView/>
  </div>

</template>

<script>
import {RegisterView, LoginView} from '@/views';
import Navbar from '@/components/Navbar.vue';
import {RouterView } from 'vue-router';
export default {
	name: "App",
  components: {
	  RegisterView,
    Navbar,
    LoginView,
  },
    mounted() {
		this.$store.dispatch('getUser')
	}
}
</script>

<style scoped>

</style>
