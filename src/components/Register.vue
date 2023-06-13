<template>
	<form class="text-center w-25 m-auto mt-5">
		<img :src="logo" width="75" alt="Logo">
		<h1 class="h3 mb-3 mt-3 fw-normal">Please Register</h1>

		<Input :label="'Name'" :type="'text'" :placeholder="'Name'"/>

		<Input :label="'Email address'" :type="'text'" :placeholder="'Email address'"/>

		<Input :label="'Password'" :type="'password'" :placeholder="'Password'"/>

		<Button type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
	</form>
</template>

<script>
import {logo} from '@/constants'
import Button from "@/ui-components/Button.vue";
import Input from "@/ui-components/Input.vue";

export default {
	name: "Register",
	components: {Button, Input},
	data() {
		return {
			logo
		}
	},
	computed: {
		isLoading() {
			return this.$store.state.auth.isLoading;
		}
	},
	methods: {
		submitHandler(e) {
			e.preventDefault();
			const data = {
				username: 'Ozodfdfsdfsfbek',
				email: 'ozofdsd@infsfo.com',
				password: 'fsdlkmfsldk'
			}
			this.$store.dispatch('register', data)
				.then((user) => {
					console.log('USER', user)
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
