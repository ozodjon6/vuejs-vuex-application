<template>

  <div class="spinner-border" :style="style" role="status">
    <span class="sr-only">Loading...</span>
  </div>

</template>

<script>

export default {
  name: 'Loader',
  props: {
    style: {
      style: String
    }
  }
}

</script>

<style scoped>

</style>