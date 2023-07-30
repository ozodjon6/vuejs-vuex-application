<template>
  <div class="form-floating mt-3">
    <textarea
        class="form-control"
        :id="label"
        :placeholder="placeholder"
        @input="updateInput"
        :value="modelValue"
    ></textarea>
    <label :for="label">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
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
