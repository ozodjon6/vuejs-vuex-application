<template>
	<form class="text-center w-25 m-auto mt-5">
		<img :src="logo" width="75" alt="Logo">
		<h1 class="h3 mb-3 mt-3 fw-normal">Please Register</h1>

		<ValidationErrors v-if="validationErrors" :validationErrors="validationErrors"/>

		<Input :label="'Name'" :type="'text'" :placeholder="'Name'" v-model="username"/>

		<Input :label="'Email address'" :type="'text'" :placeholder="'Email address'" v-model="email"/>

		<Input :label="'Password'" :type="'password'" :placeholder="'Password'" v-model="password"/>

		<Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
	</form>
</template>

<script>
import {logo} from '@/constants'
import Button from "@/ui-components/Button.vue";
import Input from "@/ui-components/Input.vue";
import ValidationErrors from "@/components/ValidationErrors.vue";
import {mapState} from "vuex";

export default {
	name: "Register",
	components: {ValidationErrors, Button, Input},
	data() {
		return {
			logo,
			username: '',
			email: '',
			password: '',
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
				username: this.username,
				email: this.email,
				password: this.password
			}
			this.$store.dispatch('register', data)
				.then((user) => {
					this.$router.push({name: 'home'})
				})
				.catch((error) => {
					console.log('ERROR', error)
				})
		}
	}
}
</script>

<style scoped>

</style>
