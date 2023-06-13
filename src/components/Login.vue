<template>
	<form class="text-center w-25 m-auto mt-5">
		<img :src="logo" width="75" alt="Logo">
		<h1 class="h3 mb-3 mt-3 fw-normal">Please Login</h1>

		<Input :label="'Email address'" :type="'text'" :placeholder="'Email address'" />

		<Input :label="'Password'" :type="'password'" :placeholder="'Password'" />

		<Button type="submit">Login in</Button>
	</form>
</template>

<script>
import {logo} from '@/constants'
import Input from "@/ui-components/Input.vue";
import Button from '@/ui-components/Button.vue'
export default {
	name: "Register",
	components: {Input, Button},
	data() {
		return {
			logo
		}
	}
}
</script>

<style scoped>

</style>
