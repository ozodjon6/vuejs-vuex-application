<template>
	<form class="text-center w-25 m-auto mt-5">
		<img :src="logo" width="75" alt="Logo">
		<h1 class="h3 mb-3 mt-3 fw-normal">Please Login</h1>

		<ValidationErrors v-if="validationErrors" :validationErrors="validationErrors"/>

		<Input :label="'Email address'" :type="'text'" :placeholder="'Email address'" v-model="email"/>

		<Input :label="'Password'" :type="'password'" :placeholder="'Password'" v-model="password"/>

		<Button type="submit" @click="submitHandler" :disabled="isLoading">Login in</Button>
	</form>
</template>

<script>
import {logo} from '@/constants'
import Input from "@/ui-components/Input.vue";
import Button from '@/ui-components/Button.vue';
import {mapState} from 'vuex';
import ValidationErrors from "@/components/ValidationErrors.vue";

export default {
	name: "Register",
	components: {Input, Button, ValidationErrors},
	data() {
		return {
			logo,
			email: '',
			password: ''
		}
	},
	computed: {
		...mapState({
			isLoading: state => state.auth.isLoading,
			validationErrors: state => state.auth.errors
		})
	},
	methods: {
		submitHandler(e) {
			e.preventDefault();
			const data = {
				email: this.email,
				password: this.password
			}
			this.$store.dispatch('login', data)
					.then((user) => {
						this.$router.push({name: 'home'})
					})
					.catch(err => {
						console.log(err)
					})
		}
	}
}
</script>

<style scoped>

</style>
