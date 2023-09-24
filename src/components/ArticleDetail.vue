<template>
  <div class="row">
    <div class="col-12">
      <h2>{{article?.title}}</h2>
    </div>
    <div class="col-12 mt-3">
      <p class="opacity-75">Description:</p>
      <p class="font-monospace">{{article?.description}}</p>
    </div>
    <div class="row">
      <div class="col-4 my-4">
        <div class="d-flex align-items-center gap-3">
          <div class="d-flex align-items-center justify-content-center bg-primary"
               style="width: 60px; height: 60px; border-radius: 100%"
          >
            <span class="text-light text-uppercase fw-bold display-6">{{article?.author.username[0]}}</span>
          </div>
          <p class="f-bold">{{article?.author?.username}}</p>
        </div>
      </div>
      <div class="col-4 d-flex align-items-center my-4">
        <p class="opacity-75 d-block" style="margin-right: 12px">Created at:</p>
        <p class="font-monospace">{{new Date(article?.createdAt).toLocaleDateString('us')}}</p>
      </div>
      <div class="col-4 d-flex align-items-center my-4">
        <p class="opacity-75 d-block" style="margin-right: 12px">Updated at:</p>
        <p class="font-monospace">{{new Date(article?.updatedAt).toLocaleDateString('us')}}</p>
      </div>
    </div>
    <div class="col-12 mt-3">
      <p class="font-monospace">{{article?.body}}</p>
    </div>
  </div>
</template>

<script>

import {mapState} from  'vuex'
export default {
  computed: {
    ...mapState({
      article: state => state.articles.articleDetail
    })
  },
}
</script>