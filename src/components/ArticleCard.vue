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
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>