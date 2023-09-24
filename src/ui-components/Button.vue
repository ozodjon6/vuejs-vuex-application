<template>
	<button class="w-100 mt-3 btn btn-lg btn-primary text-black hover:[text-white] bg-blue-200" type="submit">
      <slot></slot>
  </button>
</template>

<script>
export default {
	name: "Button"
}
</script>

<style scoped>

button {
  background-color: inherit;
}

</style>
