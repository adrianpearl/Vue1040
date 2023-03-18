<template>
  <div class="flex flex-col gap-6">
    <div v-for="field in theModel" :key="field.label">
      <FormInputText
        v-if="field.inputType == InputType.TEXT"
        :label="field.label"
        :format="field.format"
        :field="field"
        v-model="field.value"
      />
      <FormInputCheckbox
        v-if="field.inputType == InputType.CHECKBOX"
        :label="field.label"
        v-model="field.value"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, PropType, ref, watch } from "vue";
import { InputType, FieldSet } from "../types";
import FormInputText from "./FormInputText.vue";
import FormInputCheckbox from "./FormInputCheckbox.vue";

const props = defineProps({
  modelValue: Object as PropType<FieldSet>,
  tab: String,
});

const emit = defineEmits(["update:modelValue"]);
const theModel = ref(props.modelValue);
watch(theModel, () => emit("update:modelValue", theModel.value));
</script>
