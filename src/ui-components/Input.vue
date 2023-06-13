<template>
	<div class="form-floating mt-3">
		<input :type="type" class="form-control" id="floatingPassword" :placeholder="placeholder">
		<label for="floatingPassword">{{label}}</label>
	</div>
</template>

<script>
export default {
	name: "Input",
  props: {
		type: String,
    label: String,
		placeholder: String
  }
}
</script>

<style scoped>

</style>
