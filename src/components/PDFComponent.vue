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
import { defineProps, PropType } from "vue";
import { PDFDocument } from "pdf-lib";
import { PDFTextBox } from "@/types";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  checkboxes: {
    type: Array as PropType<string[]>,
  },
  textfields: {
    type: Array as PropType<PDFTextBox[]>,
  },
});

const formPdfBytes = await fetch(props.url).then((res) => res.arrayBuffer());
const pdfDoc = await PDFDocument.load(formPdfBytes);

const form = pdfDoc.getForm();

props.checkboxes?.map((c) => form.getCheckBox(c).check());
props.textfields?.map((f) => {
  let field = form.getTextField(f.name);
  field.setText(f.value);
});

const verbose = false;
if (verbose) {
  const fields = form.getFields();
  fields.forEach((field) => {
    const type = field.constructor.name;
    const name = field.getName();
    console.info(`${type}: ${name}`);
  });
}

const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
</script>
