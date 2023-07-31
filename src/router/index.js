import { createRouter, createWebHistory } from 'vue-router'
import {ArticleDetailView, HomeView, LoginView, RegisterView, CreateArticleDetail, EditArticleDetail} from '@/views';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/article/:slug',
      name: 'article',
      component: ArticleDetailView
    },
    {
      path: '/article/create-login',
      name: 'create-article',
      component: CreateArticleDetail
    },
    {
      path: '/edit-article/:slug',
      name: 'edit-article',
      component: EditArticleDetail
    }
  ]
})

export default router
