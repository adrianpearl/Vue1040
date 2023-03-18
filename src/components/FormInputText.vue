<template>
  <FormInputLabelShell :label="label">
    <div class="relative w-full float-left">
      <input
        type="text"
        :name="label"
        :id="label"
        class="peer block w-full border-0 bg-gray-50 py-1.5 px-2 font-mono text-lg text-gray-900 focus:ring-0 focus:outline-none sm:leading-6"
        :placeholder="field.placeholder"
        :maxlength="field.maxlen"
        v-model="theModel"
      />
      <div
        class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
        aria-hidden="true"
      />
    </div>
  </FormInputLabelShell>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, PropType } from "vue";
import FormInputLabelShell from "./FormInputLabelShell.vue";
import { TextField } from "@/types";

const props = defineProps({
  modelValue: String,
  format: Function,
  field: {
    type: Object as PropType<TextField>,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
const label = ref(props.field.label);

const theModel = ref(props.modelValue);
watch(theModel, (newVal) => {
  theModel.value = props.format ? props.format(newVal) : newVal;
  emit("update:modelValue", theModel.value);
});
</script>
