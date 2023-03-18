<template>
  <div class="flex flex-col items-start gap-1 w-full">
    <label :for="label" class="text-sm font-medium text-gray-900">{{
      label
    }}</label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  label: String,
});
</script>
