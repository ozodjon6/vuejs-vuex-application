<template>
  <div class="w-50 mx-auto">
    <h1 class="text-center">Create article</h1>
    <form @submit.prevent>
      <Input :label="'Title'" :type="'text'" :placeholder="'Title'" v-model="title"/>
      <TextArea :label="'Description'" :placeholder="'Description'" v-model="description"/>
      <TextArea :label="'Body'" :placeholder="'Body'" v-model="body"/>
      <Button @click="createArticleHandler" :disabled="isLoading" style="position: relative">
        <Loader v-if="isLoading"/>
        <span v-else>Create Article</span>
      </Button>
    </form>
  </div>
</template>

<script>

import Input from "@/ui-components/Input.vue";
import TextArea from "@/ui-components/TextArea.vue";
import Button from "@/ui-components/Button.vue";
import {mapState} from "vuex";
import Loader from "@/ui-components/Loader.vue";

export default {
  components: {
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
    })
  },
  methods: {
    createArticleHandler() {
      const article = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: []
      }
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