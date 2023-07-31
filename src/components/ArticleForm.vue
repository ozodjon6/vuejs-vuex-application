<template>
  <form @submit.prevent>
    <Input label="Title" type="text" placeholder="Title" v-model="title"/>
    <TextArea label="Description" placeholder="Description" v-model="description"/>
    <TextArea label="Body" placeholder="Body" v-model="body"/>
    <Button @click="controlArticleHandler" :disabled="isLoading">
      <Loader v-if="isLoading"/>
      <span v-else>{{clickText}}</span>
    </Button>
  </form>
</template>

<script>

import {defineComponent} from "vue";
import Loader from "@/ui-components/Loader.vue";
import TextArea from "@/ui-components/TextArea.vue";
import Button from "@/ui-components/Button.vue";
import Input from "@/ui-components/Input.vue";
import {mapState} from "vuex";

export default defineComponent({
  components: {Input, Button, TextArea, Loader},
  props: {
    initialValue: {
      type: Object,
      required: true
    },
    onSubmitHandler: {
      type: Function,
      required: true
    },
    clickText: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title: this.initialValue.title,
      description: this.initialValue.description,
      body: this.initialValue.body
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.controllerArticle.isLoading
    })
  },
  methods: {
    controlArticleHandler() {
      const article = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: []
      }
      this.onSubmitHandler(article)
    }
  }
})
</script>

<style scoped>

</style>