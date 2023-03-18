<template>
  <FormInput :label="label">
    <div class="relative float-left">
      <input
        type="checkbox"
        :name="label"
        :id="label"
        class="h-4 w-4 rounded border-gray-300"
        v-model="theModel"
      />
    </div>
  </FormInput>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";
import FormInput from "./FormInput.vue";

const props = defineProps({
  modelValue: Boolean,
  label: String,
});

const emit = defineEmits(["update:modelValue"]);

const theModel = ref(props.modelValue);
watch(theModel, (newVal) => {
  emit("update:modelValue", newVal);
});
</script>
