<template>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
           preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>
        Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
      </svg>
      <div class="card-body">
        <strong class="mb-2 d-block">
          {{article.title}}
        </strong>
        <p class="card-text">
          {{article.description}}
        </p>
        <div class="card-footer d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" @click="navigateHandler">Read more</button>
            <template v-if="article?.author?.username === user">
              <button
                  type="button"
                  class="btn btn-sm btn-outline-danger"
                  @click="deleteArticleHandler"
              >Delete</button>
              <button
                  type="button"
                  class="btn btn-sm btn-outline-primary"
                  @click="editArticleHandler"
              >Edit</button>
            </template>
          </div>
        </div>
          <small class="text-muted">{{dateCreatedFormat(article.createdAt)}}</small>
        </div>
      </div>
    <Loader v-if="isLoading" :style="'position: fixed; top: 50%; left: 50%'"/>
    </div>

</template>

<script>
import {mapState} from "vuex";
import Loader from "@/ui-components/Loader.vue";

export default {
  components: {Loader},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      user: state => state.auth?.user?.username,
      isLoading: state => state.controllerArticle.isLoading
    })
  },
  methods: {
    dateCreatedFormat(date) {
      return new Date(date).toLocaleString('uzb')
    },
    navigateHandler() {
      return this.$router.push(`/article/${this.article.slug}`)
    },
    deleteArticleHandler() {
      this.isLoading = true;
      return this.$store.dispatch('deleteArticle', this.article.slug)
          .then(() => this.$store.dispatch('articles'))
    },
    editArticleHandler() {
      return this.$router.push(`/edit-article/${this.article.slug}`);
    }
  }
}
</script>

<style scoped>

</style>