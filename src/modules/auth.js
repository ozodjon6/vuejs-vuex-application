import AuthService from "@/service/auth";

const state = {
	isLoading: false,
	user: null,
	error: null,
}

const mutations = {
	registerStart(state) {
		state.isLoading = true;
		state.user = null;
		state.error = null;
	},
	registerSuccess(state) {
		state.isLoading = false;
	},
	registerFailure(state) {
		state.isLoading = false;
	}
}

const actions = {
	register(context, user) {
		return new Promise((resolve, reject) => {
			context.commit('registerStart');
			AuthService.register(user)
				.then(response => {
					context.commit('registerSuccess', response.data.user);
					resolve(response.data.user);
				}).catch(err => {
					context.commit('registerFailure', err.response.data);
					reject(err.response.data)
			})
		})

	}
}
export default {
	state,
	mutations,
	actions
}
