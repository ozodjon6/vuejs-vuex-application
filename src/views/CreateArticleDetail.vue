<template>
  <div class="w-50 mx-auto">
    <h1 class="text-center">Create article</h1>
    <ArticleForm
        :click-text="'Create article'"
        :on-submit-handler="createArticleHandler"
        :initial-value="initialValue"
    />
  </div>
</template>

<script>

import Input from "@/ui-components/Input.vue";
import TextArea from "@/ui-components/TextArea.vue";
import Button from "@/ui-components/Button.vue";
import {mapState} from "vuex";
import Loader from "@/ui-components/Loader.vue";
import ArticleForm from "@/components/ArticleForm.vue";

export default {
  components: {
    ArticleForm,
    Loader,
    Button,
    TextArea,
    Input
  },
  data() {
    return {
      title: '',
      description: '',
      body: ''
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.controllerArticle.isLoading
    }),
    initialValue() {
      return {
        title: '',
        description: '',
        body: ''
      }
    }
  },
  methods: {
    createArticleHandler(article) {
      this.$store.dispatch('createArticle', article)
      setTimeout(() => {
        this.$router.push('/')
        this.title = ''
        this.description = ''
        this.body = ''
      }, 1000)
    },
  }
}

</script>