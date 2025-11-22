<template>
  <input
    class="base-input"
    :type="type"
    :placeholder="placeholder"
    v-model="innerValue"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: String,
    type: {
      type: String,
      default: "text",
    },
    placeholder: String,
  },
  emits: ["update:modelValue"],
  computed: {
    innerValue: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
};
</script>

<style scoped>
.base-input {
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
