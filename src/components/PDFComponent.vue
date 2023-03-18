<template>
  <iframe
    class="border"
    title="PDF in an i-Frame"
    :src="pdfDataUri"
    scrolling="auto"
    width="100%"
    height="600px"
  ></iframe>
</template>

<script setup lang="ts">
import { defineProps, PropType, computed } from "vue";
import { PDFDocument } from "pdf-lib";
import { FullRecord } from "@/types";

const props = defineProps({
  response: {
    type: Object as PropType<FullRecord>,
    required: true,
  },
});

const basicInfo = computed(() => props.response.basicInfo);
const formUrl =
  "https://raw.githubusercontent.com/adrianpearl/Vue1040/main/src/assets/pdfs/f1040_2022.pdf";
const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
const pdfDoc = await PDFDocument.load(formPdfBytes);

const form = pdfDoc.getForm();
form.getCheckBox("topmostSubform[0].Page1[0].c1_01[0]").check();

const firstNameField = form.getTextField("topmostSubform[0].Page1[0].f1_02[0]");
firstNameField.setText(
  `${basicInfo.value.firstName.value} ${basicInfo.value.middleInitial.value}`
);

const lastNameField = form.getTextField("topmostSubform[0].Page1[0].f1_03[0]");
lastNameField.setText(`${basicInfo.value.lastName.value}`);

const ssnField = form.getTextField(
  "topmostSubform[0].Page1[0].YourSocial[0].f1_04[0]"
);
ssnField.setText(`${basicInfo.value.ssn.value.replaceAll("-", "")}`);

const fields = form.getFields();
fields.forEach((field) => {
  const type = field.constructor.name;
  const name = field.getName();
  console.log(`${type}: ${name}`);
});

const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
</script>
