<template>
	<div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
		<RouterLink :to="{name: 'home'}" to class="d-flex align-items-center">
			<img :src="logo" class="w-75" alt="Logo">
		</RouterLink>

		<nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
			<RouterLink class="me-3 py-2 link-body-emphasis text-decoration-none"
						:to="{name: 'login'}"
			>Login
			</RouterLink>
			<RouterLink class="me-3 py-2 link-body-emphasis text-decoration-none"
						:to="{name: 'register'}"
			>Register
			</RouterLink>
		</nav>
	</div>
</template>

<script>
import {logo} from '@/constants'
export default {
	name: "NavbarView",
	data() {
		return {
			logo,
		}
	}
}
</script>

<style scoped>

a:hover {
	background: transparent;
}

</style>
