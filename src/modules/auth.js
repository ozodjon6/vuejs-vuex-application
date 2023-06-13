import AuthService from "@/service/auth";
import {setItem} from "@/helpers/persistenStorage";

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
					setItem('token', response.data.user.token);
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
