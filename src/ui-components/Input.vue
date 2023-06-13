<template>
	<div class="form-floating mt-3">
		<input
				:type="type"
				class="form-control"
				:id="label"
				:placeholder="placeholder"
				@input="updateInput"
				:value="modelValue"
		>
		<label :for="label">{{label}}</label>
	</div>
</template>

<script>
export default {
	name: "Input",
  props: {
		type: String,
    label: String,
		placeholder: String,
		modelValue: [Number, String]
  },
	methods: {
		updateInput(e) {
			this.$emit("update:modelValue", e.target.value);
		}
	}
}
</script>

<style scoped>

</style>
