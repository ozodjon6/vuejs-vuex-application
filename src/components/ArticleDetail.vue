<template>
  <h1>Article Detail</h1>
  {{article}}
</template>

<script>

import {mapState} from  'vuex'
export default {
  computed: {
    ...mapState({
      article: state => state.articles.articleDetail
    })
  }
}
</script>