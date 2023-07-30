import { createStore } from 'vuex'
import auth from '@/modules/auth';
import articles from "@/modules/articles";
import controllerArticle from "@/modules/controller-article";

const store = createStore({
	state: {},
	mutations: {},
	actions: {},
	modules: { auth, articles, controllerArticle }
})

export default store;
