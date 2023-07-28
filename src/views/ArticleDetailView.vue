<template>
  <Loader v-if="isLoading"/>
  <ArticleDetail v-else/>

</template>

<script>

import Loader from "@/ui-components/Loader.vue";
import {mapState} from 'vuex'
import ArticleDetail from "@/components/ArticleDetail.vue";

export default {
  components: {ArticleDetail, Loader},
  computed: {
    ...mapState({
        isLoading: state => state.articles.isLoading
    })
  },
  mounted() {
    this.$store.dispatch('articleDetailInfo', this.$route.params.slug)
  }
}

</script>

<style>

</style>