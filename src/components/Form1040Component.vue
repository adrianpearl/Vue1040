<template>
  <PDFComponent
    :url="formUrl"
    :checkboxes="checkboxes"
    :textfields="textfields"
  ></PDFComponent>
</template>

<script setup lang="ts">
import { defineProps, PropType, computed } from "vue";
import { FullRecord, PDFTextBox } from "@/types";
import PDFComponent from "./PDFComponent.vue";

const props = defineProps({
  response: {
    type: Object as PropType<FullRecord>,
    required: true,
  },
  checkboxes: {
    type: Array as PropType<string[]>,
  },
});

const formUrl =
  "https://raw.githubusercontent.com/adrianpearl/Vue1040/main/src/assets/pdfs/f1040_2022.pdf";
const basicInfo = computed(() => props.response.basicInfo);
const checkboxes = ["topmostSubform[0].Page1[0].c1_01[0]"];
const textfields: PDFTextBox[] = [
  {
    name: "topmostSubform[0].Page1[0].f1_02[0]",
    value:
      basicInfo.value.firstName.value +
      " " +
      basicInfo.value.middleInitial.value,
  },
  {
    name: "topmostSubform[0].Page1[0].f1_03[0]",
    value: basicInfo.value.lastName.value,
  },
  {
    name: "topmostSubform[0].Page1[0].YourSocial[0].f1_04[0]",
    value: basicInfo.value.ssn.value.replaceAll("-", ""),
  },
];
</script>
