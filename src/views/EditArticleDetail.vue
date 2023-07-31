<template>
  <div class="w-50 mx-auto">
    <h1 class="text-center">Edit article</h1>
    <Loader v-if="isLoading" :style="'position: fixed; top: 50%; left: 50%'"/>
    <ArticleForm
        v-else-if="!isLoading && article"
        :click-text="'Update article'"
        :on-submit-handler="editArticleHandler"
        :initial-value="initialValue"
    />
  </div>

</template>

<script>

import {defineComponent} from "vue";
import ArticleForm from "@/components/ArticleForm.vue";
import {mapState} from "vuex";
import Loader from "@/ui-components/Loader.vue";

export default defineComponent({
  components: {Loader, ArticleForm},
  computed: {
    ...mapState({
      article: state => state.articles.articleDetail,
      isLoading: state => state.articles.isLoading
    }),
    initialValue() {
      return {
        title: this.article.title,
        description: this.article.description,
        body: this.article.body
      }
    }
  },
  methods: {
    editArticleHandler(article) {
      this.$store.dispatch('updateArticle', {article: article, slug: this.$route.params.slug})
          .then(() => this.$router.push('/'))
    }
  },
  mounted() {
    this.$store.dispatch('articleDetailInfo', this.$route.params.slug)
  }
})
</script>