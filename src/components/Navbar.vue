<template>
	<div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
		<RouterLink :to="{name: 'home'}" to class="d-flex align-items-center">
			<img :src="logo" class="w-75" alt="Logo">
		</RouterLink>
		<nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
			<template v-if="isLoggedIn">
				<RouterLink class="me-3 py-2 link-body-emphasis text-decoration-none"
										:to="{name: 'login'}"
				>{{currentUser.username}}
				</RouterLink>
			</template>
			<template v-if="isAnonymous">
				<RouterLink class="me-3 py-2 link-body-emphasis text-decoration-none"
										:to="{name: 'login'}"
				>Login
				</RouterLink>
				<RouterLink class="me-3 py-2 link-body-emphasis text-decoration-none"
										:to="{name: 'register'}"
				>Register
				</RouterLink>
			</template>
		</nav>
	</div>
</template>

<script>
import {logo} from '@/constants'
import { mapGetters } from 'vuex'
import {gettersTypes} from '@/modules/types'
export default {
	name: "NavbarView",
	data() {
		return {
			logo,
		}
	},
	computed: {
		...mapGetters({
			currentUser: gettersTypes.currentUser,
			isLoggedIn: gettersTypes.isLoggedIn,
			isAnonymous: gettersTypes.isAnonymous
		})
	}
}
</script>

<style scoped>

a:hover {
	background: transparent;
}

</style>
